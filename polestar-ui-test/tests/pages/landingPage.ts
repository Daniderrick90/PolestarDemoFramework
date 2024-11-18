import {Page} from "playwright";
import * as landingPage_Locator from "../locators/landingPage_Locator.json";
import BasePage from "./basepage";
// @ts-ignore
import {ICreateAttachment} from "@cucumber/cucumber/lib/runtime/attachment_manager";
import dotenv from "dotenv"
export default class landingPage extends BasePage{



    constructor(page:Page, log:ICreateAttachment){
        super(page , log);
    }

    async goto_PoleStar_LandingPage(){
        dotenv.config();

    let URL = process.env.URL as string;
        await this.page.goto(URL)
        this.log(`User was able to navigates to the PoleStar Home page successfully`);
    }

    async accept_All_Cookies(){

        await this.click(landingPage_Locator.accept_all_cookies , landingPage_Locator, landingPage_Locator);
        this.log(`User was able to click on Accept All Cookies`);
    }

    async additional_Products(){
        await this.mouse_Hower_on_Element(landingPage_Locator.shop, landingPage_Locator)
        await this.click(landingPage_Locator.Extras , landingPage_Locator, landingPage_Locator);
        this.log(`User is able to navigate to additional product page successfully`);
    }

}