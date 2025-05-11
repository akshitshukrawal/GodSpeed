import { GSContext, GSStatus } from "@godspeedsystems/core";

export default function (ctx: GSContext) {
  const {
    inputs: {
      data: { user },
    },
  } = ctx;

  const name = user?.username || user?.displayName || "Guest";

  return new GSStatus(true, 200, undefined, { message: `Hello ${name}` }, undefined);
}
