import { GSContext, GSStatus } from "@godspeedsystems/core";
import { PlainObject } from "@godspeedsystems/core";

export default async function addProductFunction(ctx: GSContext): Promise<GSStatus> {
  const { userId, companyId, name, description } = ctx.inputs.data.body;

  const prisma = ctx.datasources.schema?.client as any;

  if (!prisma) {
    return new GSStatus(false, 500, "Datasource client not initialized.");
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) {
    return new GSStatus(false, 404, "User not found.",{
    message: "User not found."});
  }

  if (user.role !== 'ADMIN') {
    return new GSStatus(false, 403, "Only ADMIN users can add products.",{
    message: "Only ADMIN users can add products."});
  }

  const company = await prisma.company.findUnique({ where: { id: companyId } });

  if (!company) {
    return new GSStatus(false, 404, "Company not found.",{
    message: "Company not found."});
  }

  const product = await prisma.product.create({
    data: {
      name,
      description,
      companyId: company.id,
    }
  });

  return new GSStatus(true, 200, "Product created successfully.", {
    message: `Product '${product.name}' created under company '${company.name}'`,
    product
  });
}

