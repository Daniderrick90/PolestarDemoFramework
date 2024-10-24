@API
Feature: Scenarios related to Users REST API in Reqres System

  Scenario: Retrieve a user from the Reqres System
    Given I have an API endpoint "?page=2"
    When I send a GET request
    Then I should receive a response with status 200

  Scenario: Create a user from the Reqres System
    Given I create a user with the post request to Reqres API with name "Prince" and job "Automation"
    Then I should receive a response with status 201

  Scenario: Update a user from the Reqres System
    Given I update a user with the put request to Reqres API "/5" name "Prince" and job "Automation Test"
    Then I should receive a response with status 200

  Scenario: Delete a user from the Reqres System
    Given I delete a user with the delete request to Reqres API "/5"
    Then I should receive a response with status 204