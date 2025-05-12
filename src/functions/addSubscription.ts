import { GSContext, GSStatus } from "@godspeedsystems/core";

export default async function addSubscription(ctx: GSContext): Promise<GSStatus> {
  const { userId, packageId, targetUserId } = ctx.inputs.data.body;
  const prisma = ctx.datasources.schema?.client;

  if (!prisma) {
    return new GSStatus(false, 500, "Datasource client not initialized.");
  }

  const admin = await prisma.user.findUnique({ where: { id: userId } });
  if (!admin) return new GSStatus(false, 404, "Admin user not found.");
  if (admin.role !== 'ADMIN') return new GSStatus(false, 403, "Only ADMIN users can create subscriptions.");

  const pkg = await prisma.package.findUnique({ where: { id: packageId } });
  if (!pkg) return new GSStatus(false, 404, "Package not found.");

  const user = await prisma.user.findUnique({ where: { id: targetUserId } });
  if (!user) return new GSStatus(false, 404, "Target user not found.");

  const subscription = await prisma.subscription.create({
    data: {
      user: { connect: { id: targetUserId } },
      package: { connect: { id: packageId } },
      active: true,
    }
  });

  return new GSStatus(true, 200, "Subscription created successfully.", {
    message: `Subscription created for user ${user.email} on package ${pkg.name}`,
    subscription
  });
}
