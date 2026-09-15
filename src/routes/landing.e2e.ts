import { expect, test } from '@playwright/test';

// Covers the MonthlyFeature spotlight (film + trailer + food). Currently on hold
// while Schedule.svelte is shown instead — re-enable alongside MonthlyFeature.
// test('landing page shows the monthly feature with film and food', async ({ page }) => {
// 	await page.goto('/');
//
// 	await expect(page.getByRole('heading', { name: 'World Cinema Cafe', level: 1 })).toBeVisible();
//
// 	const feature = page.locator('#feature');
// 	await expect(feature.getByRole('heading', { name: 'Amélie' })).toBeVisible();
// 	await expect(feature.getByText('Food for everyone')).toBeVisible();
// 	await expect(feature.getByRole('button', { name: /play trailer/i })).toBeVisible();
// });

test('landing page lists the second-Friday screening dates', async ({ page }) => {
	await page.goto('/');

	await expect(page.getByRole('heading', { name: 'World Cinema Cafe', level: 1 })).toBeVisible();

	const schedule = page.locator('#screenings');
	await expect(schedule.getByText('Friday, December 11')).toBeVisible();
	await expect(schedule.getByText(/food to share/i)).toBeVisible();
});
