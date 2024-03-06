import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.tim.pl/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/TIM.pl | największy wybór artykułów elektrycznych/);
});
