@UI
Feature: To verify if user should be able to select the book with the price range

Scenario: verify if the price of the product Torkarblad is 840
Given User should be able to navigate to the polestar landing page 
When user navigates to the Extras page
And user click on Exterior link
And user is able to select the Torkarblad from the products
Then check if the price for the Torkarblad is 840

Scenario: verify if the price of the product 20 Pro vinterhjul is 450
Given User should be able to navigate to the polestar landing page 
When user navigates to the Extras page
And user click on Exterior link
And user is able to select the Ventilhattar i Swedish gold from the products
Then check if the price for the Ventilhattar i Swedish gold is 450




