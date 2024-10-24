@UI
Feature: To verify if user should be able to select the book with the price range

Scenario: verify if user should be able to select the book with the price less than 700
Given User should be able to navigate to the polestar landing page 
When user navigates to the Additionals products page
And user click on Books link
Then user is able to select the book with the price range between 700 to 950


Scenario: verify if user should be able to select the book with the price greater than 700
Given User should be able to navigate to the polestar landing page 
When user navigates to the Additionals products page
And user click on Books link
Then user is able to select the book with the price range between 500 to 700


