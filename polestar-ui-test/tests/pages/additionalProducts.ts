import {Page} from "playwright";
import * as additional_Products from "../locators/additional_products.json";
import BasePage from "./basepage";
import {ICreateAttachment} from "@cucumber/cucumber/lib/runtime/attachment_manager";
import dotenv from "dotenv"
export default class additionalProducts extends BasePage{


    constructor(page:Page, log:ICreateAttachment){
        super(page , log);
    }

    async books_links(){

        await this.click(additional_Products.books_link , additional_Products, additional_Products);
        this.log(`User was able to click on books link under additional products page`);
        await this.page.waitForTimeout(5000);
    }

    async findthebook(Lower_price:number , higher_price:number) {
     // Select all books under the books products page
     const price = await this.page.$$(additional_Products.books.locator); // Adjust the selector if needed (e.g., 'ul > li' for nested lists)

     // Loop through each list item and click the item with the price less than 700
     for (const items of price) {
         const innerText = await items.innerText();
         const bookPrice = parseInt(innerText?.replace('kr', '').trim() || '0', 10);
         if (bookPrice > Lower_price && bookPrice < higher_price){
            await items.click();
            await this.page.waitForTimeout(5000);
            break;
        }

        } 

        
    }    
}     