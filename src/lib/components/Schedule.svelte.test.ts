import { render } from 'vitest-browser-svelte';
import { expect, test } from 'vitest';

import Schedule from './Schedule.svelte';

test('dims screening dates that have already passed and leaves upcoming ones at full opacity', async () => {
	const today = new Date('2026-09-15'); // after The Old Oak, before Cinema Paradiso

	const screen = await render(Schedule, { today });

	const past = screen.getByText('Friday, August 14');
	const upcoming = screen.getByText('Friday, October 16');

	await expect.element(past).toHaveClass('opacity-50');
	await expect.element(upcoming).not.toHaveClass('opacity-50');
});

test('lists the correct film title for every screening date', async () => {
	const today = new Date('2026-09-15');

	const screen = await render(Schedule, { today });

	await expect.element(screen.getByText('El Poeta')).toBeVisible();
	await expect.element(screen.getByText('The First of May')).toBeVisible();
});

// `isPast` used to parse the ISO date with `new Date(iso)`, which reads a
// plain `YYYY-MM-DD` string as UTC midnight — wrong for a visitor west of
// UTC comparing against a *local*-midnight "today". It now delegates to the
// shared `parseLocalDate` helper (see `$lib/data/local-date.ts`), whose
// timezone-correctness is covered directly by `local-date.test.ts`; the
// Playwright-driven browser environment here doesn't give per-test control
// over the browser's timezone, so that's where the regression coverage
// lives instead of here.
