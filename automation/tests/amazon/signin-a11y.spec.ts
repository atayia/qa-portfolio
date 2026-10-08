import { test, expect } from '@playwright/test';

test.describe('TC-AMZ-008 — Sign-In Programmatic Labels (A11y)', () => {
    test('Email field exposes an accessible name matching its visible label', async ({ page }) => {
        await page.goto('/');

        // Open the sign-in page from the header, as a user would
        await page.getByRole('link', { name: /hello, sign in/i }).click();
        await expect(page).toHaveURL(/\/ap\/signin/);

        // getByLabel finds the input through its programmatic label —
        // the same information a screen reader announces
        const emailField = page.getByLabel(/mobile number or email/i);

        await expect(emailField).toBeVisible();
        await expect(emailField).toBeEditable();

        await test.info().attach('Sign-in page', {
            body: await page.screenshot({ fullPage: true }),
            contentType: 'image/png',
        });
    });
});