import { Given, When, Then, setDefaultTimeout, Before, After } from "@cucumber/cucumber";
import { expect, Page } from "@playwright/test";
import { getpage } from "../../corelibraries/hooks";
import landing_Page from "../pages/landingPage"
import additionalProducts from "../pages/additionalProducts";


let landingPage: landing_Page;
let additional_Products: additionalProducts;

         Given('User should be able to navigate to the polestar landing page', async function () {
            landingPage = new landing_Page(getpage(), this.attach);
            await landingPage.goto_PoleStar_LandingPage();
            await landingPage.accept_All_Cookies();
         });



         When('user navigates to the Extras page', async function () {
            await landingPage.additional_Products();
         });


         When('user click on Exterior link', async function () {
            additional_Products = new additionalProducts(getpage(), this.attach);
            await additional_Products.exterior_link();
         });



         When('user is able to select the Torkarblad from the products', async function () {
            await additional_Products.Torkarblad_Product();
         });
         
         When('user is able to select the Ventilhattar i Swedish gold from the products', async function () {
            await additional_Products.Ventilhattar_i_Swedish_gold_Product();
         });

         Then('check if the price for the Torkarblad is {int}', async function(price){
            await additional_Products.Torkarblad_product_price(price);
         });

         Then('check if the price for the Ventilhattar i Swedish gold is {int}', async function(price){
            await additional_Products.Ventilhattar_i_Swedish_gold_product_price(price);
         });




