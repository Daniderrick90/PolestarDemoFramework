import dotenv from "dotenv"

const report = require("multiple-cucumber-html-reporter");

dotenv.config();

let browserType = process.env.browser as string;

report.generate({
  jsonDir: "reports",
  reportPath: "reports",
  reportName:"PoleStar_Automation Report",
  pageTitile:"Regression Report",
  displayDuration:true,
  metadata: {
    browser: {
      name: browserType,
      version: "60",
    },
    device: "Daniel machine",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "PoleStar Regression" },
      { label: "Release", value: "October 2024" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Oct 23 2024, 04:31 PM EST" },
      { label: "Execution End Time", value: "Oct 23 2024, 04:31 PM EST" },
    ],
  },
});