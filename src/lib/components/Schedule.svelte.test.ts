import { render } from 'vitest-browser-svelte';
import { expect, test } from 'vitest';

import Schedule from './Schedule.svelte';

test('dims screening dates that have already passed and leaves upcoming ones at full opacity', async () => {
	const today = new Date('2026-09-15'); // after The Old Oak, before Cinema Paradiso

	const screen = await render(Schedule, { today });

	const past = screen.getByText('Friday, August 14');
	const upcoming = screen.getByText('Friday, October 9');

	await expect.element(past).toHaveClass('opacity-50');
	await expect.element(upcoming).not.toHaveClass('opacity-50');
});

test('lists the correct film title for every screening date', async () => {
	const today = new Date('2026-09-15');

	const screen = await render(Schedule, { today });

	await expect.element(screen.getByText('El Poeta')).toBeVisible();
	await expect.element(screen.getByText('The First of May')).toBeVisible();
});
