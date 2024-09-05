import { test, expect } from '@playwright/test';
import * as path from 'path';

test('has title', async ({ page }) => {
  // Bepaal het absolute pad naar het HTML-bestand in de 'app' map
  const htmlFilePath = path.resolve(__dirname, '..', 'app', 'website.html');

  // Navigeer naar het lokale HTML-bestand
  await page.goto(`file://${htmlFilePath}`);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Mijn fantastische websitee');
});
