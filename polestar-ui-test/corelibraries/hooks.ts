import { Given, When, Then, setDefaultTimeout, Before, After, BeforeAll, AfterAll, BeforeStep, AfterStep } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "playwright";
import { expect } from "@playwright/test";
import dotenv from "dotenv"

setDefaultTimeout(1000 * 60 * 2);

let browser: Browser;
let bContext: BrowserContext;
let newContext: BrowserContext;
let page: Page;
let newPage:Page;
let stepnum = 0;
const date = new Date();

BeforeAll(async function(){

    dotenv.config();

    let browserType = process.env.browser;

    switch(browserType){
        case 'chrome':
            browser = await chromium.launch({ headless: false, channel: "chrome", args: ['--start-maximized'] }); 
            break;
        case 'edge':
            browser = await chromium.launch({ headless: false, channel: "msedge", args: ['--start-maximized'] });
          break;
        default:
            throw new Error(`invalid browser type ${browserType} is passed, Please provide a valid browser type`)
    }

});

Before(async function (scenario) {

    bContext = await browser.newContext({ viewport: null, javaScriptEnabled: true });
    page = await bContext.newPage();
    
});

BeforeStep(async function (scenario) {

});

AfterStep(async function (scenario) {
    const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}}`;
    if(scenario.result?.status==`PASSED`){
        this.attach(`I am taking screenshot......`);
        const img = await page.screenshot({
            path:`./reports/${scenario.pickle.name}.png`
        });
        
        this.attach(img,'image/png');
    }
    if(scenario.result?.status==`FAILED`){
        this.attach(`I am taking screenshot......`);
        const img = await page.screenshot({
            path:`./reports/${scenario.pickle.name}.png`
        });
        
        this.attach(img,'image/png');
    }
});

After(async function (scenario) {
    stepnum = 0;
    await page.close();
    await bContext.close();
});

AfterAll(async function(){
    await browser.close();
})

//export {page};
export function getpage():Page{
    return page;
}

export function getBContext():BrowserContext{
    return bContext;
}