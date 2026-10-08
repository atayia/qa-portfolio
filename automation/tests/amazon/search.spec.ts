import { test, expect } from '@playwright/test';

test.describe('TC-AMZ-003 — Product Search', () => {

    test('Search returns relevant results for a valid query', async ({ page }) => {
        await page.goto('/');

        const searchBox = page.locator('#twotabsearchtextbox');
        await searchBox.fill('Logitech MX Master 3S');
        await searchBox.press('Enter');

        await expect(page).toHaveURL(/s\?k=/);
        await expect(page.locator('.s-search-results')).toBeVisible();
        await expect(page.locator('h2.a-size-mini').first()).toBeVisible();
    });

});