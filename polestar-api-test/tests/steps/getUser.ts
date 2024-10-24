import { Given, When, Then } from '@cucumber/cucumber';
import { request, APIResponse, expect } from '@playwright/test';

let response: APIResponse;


Given('I have an API endpoint {string}', function (endpoint: string) {
  this.endpoint = endpoint; // Store the endpoint for use in other steps
});

//Reqres Post request to retrieve user
When('I send a GET request', async function () {
  const apiRequest = await request.newContext(); // Create a new request context
  response = await apiRequest.get(this.endpoint); // Send the GET request
  console.log(await response.json())
});

//To assert the status code
Then('I should receive a response with status {int}', async function (statusCode: number) {
 
    // Assert the response status matches the expected status code
    expect(response.status()).toBe(statusCode);
    expect(response.status()).toBeTruthy();
});

//Reqres Post request to create user
Given('I create a user with the post request to Reqres API {string}', async function (baseURL: string) {
   const apiRequest = await request.newContext(); // Create a new request context
 
   // Send the POST request to the specified endpoint with the provided body
   response = await apiRequest.post(baseURL, {
     data: {
       "name": "Derrick",
       "job": "consultant, QA"
     },
     headers: {
       'Content-Type': 'application/json',
     },
   });
 
 });