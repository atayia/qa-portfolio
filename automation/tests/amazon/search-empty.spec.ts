import { test, expect } from '@playwright/test';

test.describe('TC-AMZ-005 — Empty Search / No Results', () => {
    test('Non-existent query returns sponsored fallback content', async ({ page }) => {
        await page.goto('/');
        const searchBox = page.locator('#twotabsearchtextbox');
        await searchBox.fill('zxyvwk123456789');
        await searchBox.press('Enter');

        // Landed on search results page
        await expect(page).toHaveURL(/s\?k=/);

        // Results container is present (Amazon shows sponsored fallback, not a blank page)
        await expect(page.locator('.s-search-results')).toBeVisible();

        // Amazon signals no direct matches with "No results for" OR shows "More results" fallback
        // Either way, the original query keyword appears in the results header
        const noResultsMsg = page.locator('[data-component-type="s-no-results"]');
        const moreResultsHeading = page.locator('h2').filter({ hasText: 'More results' });

        await expect(noResultsMsg.or(moreResultsHeading)).toBeVisible();
    });
});