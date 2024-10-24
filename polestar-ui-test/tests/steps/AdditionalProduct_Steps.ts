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



         When('user navigates to the Additionals products page', async function () {
            await landingPage.additional_Products();
         });


         When('user click on Books link', async function () {
            additional_Products = new additionalProducts(getpage(), this.attach);
            await additional_Products.books_links();
         });



         Then('user is able to select the book with the price range between {int} to {int}', async function (lowerPrice , higherPrice) {
            await additional_Products.findthebook(lowerPrice , higherPrice);
         });




