import { GSContext, GSStatus } from "@godspeedsystems/core";

export default async function addPackage(ctx: GSContext): Promise<GSStatus> {
  const { userId, productId, name} = ctx.inputs.data.body;
  const prisma = ctx.datasources.schema?.client;

  if (!prisma) {
    return new GSStatus(false, 500, "Datasource client not initialized.");
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return new GSStatus(false, 404, "User not found.",{
    message: "User not found."});
  if (user.role !== 'ADMIN') return new GSStatus(false, 403, "Only ADMIN users can add products.",{
    message: "Only ADMIN users can add products."});

  const product = await prisma.product.findUnique({ where: { id: productId } });
  if (!product) return new GSStatus(false, 404, "Product not found.");

  const pkg = await prisma.package.create({
    data: {
      name,
      product: { connect: { id: productId } }
    }
  });

  return new GSStatus(true, 200, "Package created successfully.", {
    message: `Package '${pkg.name}' created under product '${product.name}'`,
    package: pkg
  });
}
