import { render } from 'vitest-browser-svelte';
import { expect, test } from 'vitest';

import MonthlyFeature from './MonthlyFeature.svelte';

test('shows the details of the film whose screening is coming up next', async () => {
	const today = new Date('2026-10-10'); // day after Cinema Paradiso screens
	const screen = await render(MonthlyFeature, { today });

	await expect.element(screen.getByRole('heading', { name: 'El Poeta', level: 2 })).toBeVisible();
	await expect.element(screen.getByText('Food for everyone')).toBeVisible();
	await expect.element(screen.getByRole('button', { name: /play trailer/i })).toBeVisible();
});

test('clicking the trailer button swaps the thumbnail for a playing embed', async () => {
	const today = new Date('2026-10-10');
	const screen = await render(MonthlyFeature, { today });

	await screen.getByRole('button', { name: /play trailer/i }).click();

	await expect.element(screen.getByTitle('El Poeta trailer')).toBeVisible();
});
