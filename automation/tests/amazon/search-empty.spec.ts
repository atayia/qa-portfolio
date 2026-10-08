import { test, expect } from '@playwright/test';

test.describe('TC-AMZ-005 — Empty Search / No Results', () => {
    test('Non-existent query shows a no-results message or sponsored fallback', async ({ page }) => {
        await page.goto('/');
        const searchBox = page.getByRole('searchbox', { name: 'Search Amazon' });
        await searchBox.fill('zxyvwk123456789');
        await searchBox.press('Enter');

        await expect(page).toHaveURL(/s\?k=/);

        // Amazon serves two variants for unmatched queries:
        //   A) "More results" heading with sponsored fallback only (AMZ-OBS-001)
        //   B) "No results for your search query." heading, then sponsored fallback
        const noResultsHeading = page.getByRole('heading', { name: /no results for/i });
        const moreResultsHeading = page.getByRole('heading', { name: /more results/i });

        await expect(noResultsHeading.or(moreResultsHeading).first()).toBeVisible();

        // Record which variant this run received, as evidence in the report
        const variant = (await noResultsHeading.isVisible())
            ? 'B — "No results for your search query." heading shown'
            : 'A — "More results" sponsored fallback, no empty-state message';

        test.info().annotations.push({ type: 'Variant observed', description: variant });
        await test.info().attach('Search results page', {
            body: await page.screenshot({ fullPage: true }),
            contentType: 'image/png',
        });
    });
});