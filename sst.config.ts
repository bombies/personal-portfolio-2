/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
    app(input) {
        return {
            name: "personal-portfolio-2",
            removal: input?.stage === "production" ? "retain" : "remove",
            home: "aws",
        };
    },
    async run() {
        new sst.aws.Nextjs("PersonalPortfolio", {
          domain: {
            name: "ajani.me"
          }
        });
    },
});
