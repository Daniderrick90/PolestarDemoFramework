playwright-cucumber-sample(UI/API)

Overview:

This is a sample test automation framework developed using Playwright with Cucumber.

programming language used is TypeScript

Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API. Playwright is built to enable cross-browser web automation that is ever-green, capable, reliable and fast.

Cucumber is a tool for running automated tests written in plain language. Because they're written in plain language, they can be read by anyone on your team. Because they can be read by anyone, you can use them to help improve communication, collaboration and trust on your team. Cucumber supports behavior-driven development. Central to the Cucumber BDD approach is its ordinary language parser called Gherkin.

For Demo purpose web UI test cases are created on https://www.polestar.com/se site and API test cases are created on https://reqres.in/ System API endpoints.

Features:
- This testing framework supports Behavior Driven Development (BDD). Tests are written in plain English text called Gherkin
- Framework was built in library to operate on UI, API (both SOAP & REST API) 
- Supports execution of tests in different browsers.
- Supports running scenarios in parallel mode. It runs 2 scenarios in parallel by default.
- Generates Cucumber HTML Report.

Supported Browsers

1. Chrome
2. Firefox
3. MS Edge

2. Test creation

- Test scenarios are organized into features and these feature files should be placed inside features folder.
- Step definitions connect Gherkin steps in feature files to programming code. A step definition carries out the action that should be performed by the scenario steps. These step definitions should placed inside steps folder in different packages.
- For web UI based tests maintain all the Locators in Locator.json for the respective pages.

3. Execution

- For UI : npm run test:UI --TAGS="@UI"
- For API : npm run test:API --TAGS="@API"


4. Report & Logs

Cucumber HTML report will be present inside : reports\cucumber_report_PoleStar.html

5. GITHUB Actions:

GTIHUB Actions is created to facilitate Continuous Integration (CI) and Continuous Deployment (CD) workflows. It allows you to automate software development processes, such as building, testing, and deploying code, directly within your GitHub repository.
