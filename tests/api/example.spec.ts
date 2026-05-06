import { test, expect } from '@playwright/test';

test('API - Example test', async ({ request }) => {
  const response = await request.get('https://api.example.com/users');
  expect(response.status()).toBe(200);
});
