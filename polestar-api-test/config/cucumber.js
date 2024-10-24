module.exports={
        default: {
            tags: process.env.npm_config_TAGS || "",
            dryRun: false,
            formatOptions: {
                snippetInterface: "aysnc-await"
            },
            paths: [
                "polestar-api-test/tests/features/**/*.feature"
            ],
            require: [
                "polestar-api-test/tests/steps/**/*.ts",
                "polestar-api-test/corelibraries/corelibs.ts"
            ],
            requireModule: [
                "ts-node/register"
            ],
            format: [
                [
                    "json",
                    "reports/cucumber_report.json"
                ],
                [
                    "junit",
                    "reports/junit.xml"
                ],
                [
                    "html",
                    "reports/html-formatter.html"
                ],
                [
                    "progress-bar"
                ]            
            ],
            parallel:2
        }
}