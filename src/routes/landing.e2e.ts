import { expect, test } from '@playwright/test';

test('landing page lists the second-Friday screening dates', async ({ page }) => {
	await page.goto('/');

	await expect(page.getByRole('heading', { name: 'World Cinema Café', level: 1 })).toBeVisible();

	const schedule = page.locator('#screenings');
	await expect(schedule.getByText('Friday, December 11')).toBeVisible();
	await expect(schedule.getByText(/food to share/i)).toBeVisible();
});

test('the Coming Next spotlight shows a film, its trailer, and shared-food details', async ({
	page
}) => {
	await page.goto('/');

	const feature = page.locator('#feature');
	await expect(feature.getByText('Coming Next')).toBeVisible();
	await expect(feature.getByRole('heading', { level: 2 })).toBeVisible();
	await expect(feature.getByText('Food for everyone')).toBeVisible();

	const playButton = feature.getByRole('button', { name: /play trailer/i });
	await expect(playButton).toBeVisible();

	await playButton.click();
	await expect(feature.locator('iframe')).toBeVisible();
});

test('given the browser clock is set to October 16 2026 (the screening day itself), the Coming Next spotlight still shows Cinema Paradiso', async ({
	page
}) => {
	await page.clock.setFixedTime(new Date('2026-10-16T12:00:00'));
	await page.goto('/');

	const feature = page.locator('#feature');
	await expect(feature.getByRole('heading', { name: 'Cinema Paradiso', level: 2 })).toBeVisible();
});

test('given the browser clock is set to October 17 2026 (the day after the screening), the Coming Next spotlight moves on to El Poeta', async ({
	page
}) => {
	await page.clock.setFixedTime(new Date('2026-10-17T12:00:00'));
	await page.goto('/');

	const feature = page.locator('#feature');
	await expect(feature.getByRole('heading', { name: 'El Poeta', level: 2 })).toBeVisible();
});

test('the footer links to the Instagram page and opens it in a new tab', async ({ page }) => {
	await page.goto('/');

	const instagramLink = page.locator('footer').getByRole('link', { name: 'Instagram' });
	await expect(instagramLink).toBeVisible();
	await expect(instagramLink).toHaveAttribute('href', 'https://instagram.com/worldcinemacafe');
	await expect(instagramLink).toHaveAttribute('target', '_blank');
});
