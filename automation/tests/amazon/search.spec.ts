import { test, expect } from '@playwright/test';

test.describe('TC-AMZ-003 — Product Search', () => {

    test('Search returns relevant results for a valid query', async ({ page }) => {
        await page.goto('/');

        const searchBox = page.getByRole('searchbox', { name: 'Search Amazon' });
        await searchBox.fill('Logitech MX Master 3S');
        await searchBox.press('Enter');

        await expect(page).toHaveURL(/s\?k=/);
        await expect(page.locator('.s-search-results')).toBeVisible();
        await expect(page.locator('h2.a-size-mini').first()).toBeVisible();

        // Attach the results page as evidence in the report
        await test.info().attach('Search results page', {
            body: await page.screenshot({ fullPage: true }),
            contentType: 'image/png',
        });
    });

});