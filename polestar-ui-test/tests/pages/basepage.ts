import {Page} from "playwright";
import {getBContext} from "../../corelibraries/hooks";
// @ts-ignore
import {ICreateAttachment, ICreateLog} from "@cucumber/cucumber/lib/runtime/attachment_manager";
export default class BasePage{
    protected page:Page;
    protected log:ICreateAttachment;
    
    constructor(page:Page , log:ICreateAttachment){
        this.page = page;
        this.log = log;
    }
    //--------------This method is to wait for the element before performing the click action-----------------------
    async click(object:any , pageName:any, timeout:any){
        await this.page.locator(object["locator"]).waitFor(timeout["timeout"]);
        await this.page.locator(object["locator"]).last().click();
        
    }
    async dbclick(object:any , pageName:any, timeout:any){
        await this.page.locator(object["locator"]).waitFor(timeout["timeout"]);
        await this.page.locator(object["locator"]).last().dblclick();
        
    }
    async Assigntestclick(object:any , pageName:any, timeout:any,data:string){
        const obj = await this.page.frameLocator('iframe').locator(data);
        await obj.waitFor(timeout["timeout"]);
        await obj.click();
    }
    async Customxpathclick(object:any , pageName:any, timeout:any,data:string){
        await this.page.locator(data).waitFor(timeout["timeout"]);
        await this.page.locator(data).last().dblclick();
    }

    //--------------This method is to wait for the element before performing the click action to an element inside the iframe-----------------------
    async insideFrame_click(object:any , pageName:any, timeout:any){
        const obj = await this.page.frameLocator('iframe').locator(object["locator"]);
        await obj.waitFor(timeout["timeout"]);
        await obj.click();
        
    }

    async pressenter(object:any , pageName:any, timeout:any){
        await this.page.locator(object["locator"]).waitFor(timeout["timeout"]);
        await this.page.locator(object["locator"]).press("Enter");
        
    }
    //--------------This method is to enter a value in the text box-------------------------------------------
    async enter_Text(object:any, pageName:any, timeout:any, data:string){
        await this.page.locator(object["locator"]).waitFor(timeout["timeout"]);
        await this.page.locator(object["locator"]).fill(data);
        
    }
    async isenable(object:any, pageName:any, timeout:any){
        await this.page.locator(object["locator"]).waitFor(timeout["timeout"]);
        await this.page.locator(object["locator"]).isEnabled;
     
    }
    async focus(object:any, pageName:any, timeout:any){
        await this.page.locator(object["locator"]).waitFor(timeout["timeout"]);
        await this.page.locator(object["locator"]).focus;
     
    }
     inner_Text(object:any, pageName:any, timeout:any): any{
         this.page.locator(object["locator"]).waitFor(timeout["timeout"]);
         this.page.locator(object["locator"]).isVisible()
      const value=  this.page.locator(object["locator"]).innerText();
        return value;
    }
    //--------------This method is to enter a value in the text box-------------------------------------------
    async insideFrame_enter_Text(object:any, pageName:any, timeout:any, data:string){
        const obj = await this.page.frameLocator('iframe').locator(object["locator"]);
        await obj.waitFor(timeout["timeout"]);
        await obj.fill(data);
        
    }
    //--------------This method is to select a value in the bropdown box--------------------------------------
    async select_dropdown_Value(object:any, pageName:any, timeout:any, data:string){
        await this.page.locator(object["locator"]).waitFor(timeout["timeout"]);
        await this.page.locator(object["locator"]).selectOption({value : data});
        
    }

    //--------------This method is to wait for a element until the element is visible(default wait is 30 sec-
    async wait_for_Element_Visible(object:any){
        await this.page.locator(object["locator"]).isVisible();
    }


    async mouse_Hower_on_Element(object:any , timeout:any){
        await this.page.locator(object["locator"]).waitFor(timeout["timeout"]);
        await this.page.locator(object["locator"]).hover();
    }

    //--------------This method is to wait for a element for 5 seconds--------------------------------------
    async waitfor_Element(object:any){
        await this.page.locator(object["locator"]).waitFor({timeout:5000});
    }

    async navigate_to_SampleLog_Window(object:any, pageName:any, timeout:any){

        const [newTab] = await Promise.all([
            this.page.waitForEvent("popup"),
            await this.page.frameLocator('iframe').locator(object["locator"]).click()           
        ])
        return newTab;
    }
    async navigate_to_DDEandDDR(object:any, pageName:any, timeout:any){

        const [DDETab] = await Promise.all([
            this.page.waitForEvent("popup"),
            await this.page.locator(object["locator"]).click()           
        ])
        return DDETab;
    }
   
}