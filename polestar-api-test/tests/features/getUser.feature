@API
Feature: Scenarios related to Users REST API in Reqres System

  Scenario: Retrieve a user from the Reqres System
    Given I have an API endpoint "https://reqres.in/api/users?page=2"
    When I send a GET request
    Then I should receive a response with status 200

  Scenario: create a user from the Reqres System
    Given I create a user with the post request to Reqres API "https://reqres.in/api/users"
    Then I should receive a response with status 201
