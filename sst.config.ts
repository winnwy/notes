/// <reference path="./.sst/platform/config.d.ts" />

import { identityPool, userPool, userPoolClient } from "./infra/auth";

export default $config({
  app(input) {
    return {
      name: "notes",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    await import("./infra/storage");
    await import("./infra/api");
    const auth = await import("./infra/auth");

    return {
      UserPool: auth.userPool.id,
      Region: aws.getRegionOutput().name,
      identityPool: auth.identityPool.id,
      userPoolClient: auth.userPoolClient.id,
    };
  },
});
