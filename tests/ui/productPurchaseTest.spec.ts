import { test, expect, APIRequestContext } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';
import { CartPage } from '../../pages/CartPage';
import testData from '../../testData.json';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { OrderConfirmationPage } from '../../pages/OrderConfirmationPage';
import { OrdersPage } from '../../pages/OrdersPage';


let loginPage: LoginPage;
let dashboardPage: DashboardPage; 
let cartPage: CartPage;
let checkoutPage: CheckoutPage;
let orderConfirmationPage: OrderConfirmationPage;
let ordersPage: OrdersPage;
let fetchedOrderID: string;
let allOrderIDs: string[];

test.beforeEach(async ({ page }) => {
    // Initialize Login Page
  loginPage = new LoginPage(page);

  // Initialize Dashboard Page
    dashboardPage = new DashboardPage(page); 

 // Initialize Cart Page
   cartPage = new CartPage(page);

   // Initialize Checkout Page
   checkoutPage = new CheckoutPage(page);

   //Initilize Order Confirmation Page
   orderConfirmationPage = new OrderConfirmationPage(page);

   // Initialize Orders Page
   ordersPage = new OrdersPage(page);

  // Navigate to Login Page
  await loginPage.navigateToLoginPage();
  // Verify Login Page is visible
  expect(await loginPage.isLoginPageVisible()).toBeTruthy();
    // Perform login with valid credentials
  await loginPage.loginWithValidCredentials();
  // Verify successful login
  await loginPage.waitForNavigation(testData.urls.dashboard);
  const currentUrl = await loginPage.getCurrentUrl();
  expect(currentUrl).toBe(testData.urls.dashboard);  
});
test.afterEach(async ({ page, request }) => {
  // Fetch token using API
  const credentials = testData.validCredentials;
  const loginResponse = await request.post(testData.urls.tokenEndpoint, {
    data: {
      userEmail: credentials.email,
      userPassword: credentials.password
    }
  });

  const responseBody = await loginResponse.json();
  const token = responseBody.token;

  console.log('Token fetched:', token);

  // Use token to delete product/order via API
  // Delete all fetched order IDs
  for (const orderId of allOrderIDs) {
    const deleteUrl = `${testData.urls.deleteOrderEndpoint}/${orderId}`;
    const deleteResponse = await request.delete(deleteUrl, 
    {
      headers: 
      {
        'Authorization': `${token}`
      }
    });
    console.log(`Deleted Order ID: ${orderId}`);
  }

  // Logout after each test
  await dashboardPage.signout();
});

test('Product Purchase and Validation Test', async ({ page }) => {
    // Add product to cart 
    await dashboardPage.addProductToCart();
    await dashboardPage.viewCart();
    await cartPage.clickCheckoutButton();
    await checkoutPage.selectCountry(testData.checkoutData.country);
    //await checkoutPage.clickOnSpaceAbovePlaceOrderButton();
    await checkoutPage.placeOrder();
    await page.waitForLoadState('networkidle');
    
    
    await orderConfirmationPage.validateOrderConfirmationPage();
    console.log(await orderConfirmationPage.fetchOrderID());
    fetchedOrderID = await orderConfirmationPage.fetchOrderID();
    await orderConfirmationPage.navigateToOrderHistory();
    
    // Fetch all order IDs from order history
    allOrderIDs = await ordersPage.fetchAllOrderIDs();
    console.log('All Order IDs:', allOrderIDs);
    
    // Compare fetched order ID with all order IDs
    expect(allOrderIDs).toContain(fetchedOrderID);
    console.log('Order ID found in order history:', fetchedOrderID);
});


