import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);  //it check if it has title playwright in it 
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible(); //checks It has Getstarted goes to that link and checks if it has Installation as heading on top. 
});


//navigating to page, click() all these are actions. and expect you see are all called assertions. 

//now lets run the test 
//cmd - pnpm exec playwright test 
//if you using npm then it would be npx playwright test 
//after running it showed 6 test passed because each test is running on 3 diff browsers 

//pnpm exec playwright show-report -> this cmd gives you report for the test you just ran. 
//it opens browser window and you can see all test passed , you see steps after hook before hook sections also 

//locally also report get created in project , its same report 
