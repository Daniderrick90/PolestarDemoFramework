import { Given, When, Then, Before } from '@cucumber/cucumber';
import { request, APIResponse, expect } from '@playwright/test';

let apiRequest: any; // Declare the variable for the API request context
let response: APIResponse;
const baseURL = "https://reqres.in/api/users"; // Define the base URL

Before(async function () {
  apiRequest = await request.newContext(); // Create a new request context before each scenario
});

Given('I have an API endpoint {string}', function (endpoint: string) {
  this.endpoint = `${baseURL}${endpoint}`; // Append baseURL to the endpoint for use in other steps
});

// Reqres GET request to retrieve user
When('I send a GET request', async function () {
  try {
    response = await apiRequest.get(this.endpoint); // Send the GET request
    console.log(await response.json());
  } catch (error) {
    console.error('Error sending GET request:', error);
    throw new Error('GET request failed');
  }
});

// Reqres POST request to create user
Given('I create a user with the post request to Reqres API with name {string} and job {string}', async function (name: string, job: string) {
  const fullURL = `${baseURL}`; // Use baseURL for the POST request
  try {
    // Send the POST request to the specified endpoint with the provided body
    response = await apiRequest.post(fullURL, {
      data: {
        "name": name,
        "job": job
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error sending POST request:', error);
    throw new Error('POST request failed');
  }
});

// Reqres PUT request to update user
Given('I update a user with the put request to Reqres API {string} name {string} and job {string}', async function (endpoint: string, name: string, job: string) {
  const fullURL = `${baseURL}${endpoint}`; // Append baseURL to the endpoint
  try {
    // Send the PUT request to the specified endpoint with the provided body
    response = await apiRequest.put(fullURL, {
      data: {
        "name": name,
        "job": job
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error sending PUT request:', error);
    throw new Error('PUT request failed');
  }
});

// Reqres DELETE request to delete user
Given('I delete a user with the delete request to Reqres API {string}', async function (endpoint: string) {
  const fullURL = `${baseURL}${endpoint}`; // Append baseURL to the endpoint
  try {
    response = await apiRequest.delete(fullURL); // Send the DELETE request
  } catch (error) {
    console.error('Error sending DELETE request:', error);
    throw new Error('DELETE request failed');
  }
});

// To assert the status code
Then('I should receive a response with status {int}', async function (statusCode: number) {
  try {
    // Assert the response status matches the expected status code
    expect(response.status()).toBe(statusCode);
    expect(response.status()).toBeTruthy();
  } catch (error) {
    console.error('Error asserting response status:', error);
    throw new Error('Status code assertion failed');
  }
});