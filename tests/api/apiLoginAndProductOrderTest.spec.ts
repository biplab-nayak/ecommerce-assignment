import { test, expect } from '@playwright/test';
import testData from '../../testData.json';
let token: string;

test.beforeAll('Fetch Token', async ({ request }) => {
   // Fetch token using API
  const credentials = testData.validCredentials;
  const loginResponse = await request.post(testData.urls.tokenEndpoint, {
    data: {
      userEmail: credentials.email,
      userPassword: credentials.password
    }
  });

  const responseBody = await loginResponse.json();
  token = responseBody.token;
  console.log('Token fetched:', token);

});

test('Product Order Test', async ({ request }) => {
    // Create order using API
    const orderResponse = await request.post(testData.urls.createOrderEndpoint, {
      data: testData.orderData,
      headers: {
        'Authorization': token
      }
    });

    expect(orderResponse.status()).toBe(201);
    const responseBody = await orderResponse.json();
    console.log('Order created:', responseBody);
});