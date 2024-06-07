/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
    app(input) {
        return {
            name: "personal-portfolio",
            removal: input?.stage === "production" ? "retain" : "remove",
            home: "aws",
        };
    },
    async run() {
        new sst.aws.Nextjs("Portfolio", {
          domain: {
            name: "ajani.me"
          }
        });
    },
});
