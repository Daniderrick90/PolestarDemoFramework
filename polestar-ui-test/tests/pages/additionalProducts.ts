import {Page} from "playwright";
import {expect} from "@playwright/test"
import * as extras from "../locators/Extras.json";
import BasePage from "./basepage";
import {ICreateAttachment} from "@cucumber/cucumber/lib/runtime/attachment_manager";
import dotenv from "dotenv"
export default class additionalProducts extends BasePage{


    constructor(page:Page, log:ICreateAttachment){
        super(page , log);
    }

    async exterior_link(){

        await this.click(extras.books_link , extras, extras);
        this.log(`User was able to click on exterior link under shop page`);
        await this.page.waitForTimeout(5000);
    }

    async Torkarblad_Product() {
   
        await this.click(extras.Torkarblad , extras, extras);
        this.log(`User was able to click on Torkarblad under shop page`);
        
    } 
    
    async Ventilhattar_i_Swedish_gold_Product() {
   
        await this.click(extras.Ventilhattar_i_Swedish_gold , extras, extras);
        this.log(`User was able to click on Torkarblad under shop page`);
        
    } 

    async Torkarblad_product_price(price:number){
        const innerText = await this.inner_Text(extras.Torkarblad_Price , extras, extras);
        await expect(innerText).toBe(""+price+" kr");


    }

    async Ventilhattar_i_Swedish_gold_product_price(price:number){
        const innerText = await this.inner_Text(extras.Ventilhattar_i_Swedish_gold_Price , extras, extras);
        await expect(innerText).toBe(""+price+" kr");


    }
}     