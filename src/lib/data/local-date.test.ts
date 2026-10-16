import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { parseLocalDate } from './local-date';

describe('parseLocalDate', () => {
	// Regression coverage for a real production bug: `new Date('2026-10-16')`
	// parses a plain `YYYY-MM-DD` string as UTC midnight. Both
	// `getFeaturedFilm` and `Schedule`'s `isPast` compare that against a
	// "today" that's zeroed to *local* midnight (`setHours(0, 0, 0, 0)`). For
	// a visitor west of UTC, local midnight falls hours after UTC midnight,
	// so the screening's own day could register as already "past" for the
	// first several hours of that day. A bare `new Date('2026-10-16')`
	// fixture in a test doesn't catch this, because it's parsed as UTC
	// regardless of the machine's real timezone — only pinning the
	// *timezone itself* reproduces the bug. Node reads `TZ` dynamically for
	// each `Date` it constructs, so setting it here (and restoring it after)
	// is enough to do that.
	let originalTz: string | undefined;

	beforeEach(() => {
		originalTz = process.env.TZ;
	});

	afterEach(() => {
		process.env.TZ = originalTz;
	});

	it('parses as local midnight in UTC', () => {
		process.env.TZ = 'UTC';
		const parsed = parseLocalDate('2026-10-16');
		expect(parsed.getFullYear()).toBe(2026);
		expect(parsed.getMonth()).toBe(9); // 0-indexed: October
		expect(parsed.getDate()).toBe(16);
		expect(parsed.getHours()).toBe(0);
	});

	it('parses as local midnight for a visitor west of UTC (US Eastern, UTC-4 in October)', () => {
		process.env.TZ = 'America/New_York';
		const parsed = parseLocalDate('2026-10-16');
		expect(parsed.getFullYear()).toBe(2026);
		expect(parsed.getMonth()).toBe(9);
		expect(parsed.getDate()).toBe(16);
		expect(parsed.getHours()).toBe(0);
	});

	it('is not earlier than a same-day "today" zeroed to local midnight, for a visitor west of UTC', () => {
		process.env.TZ = 'America/New_York';

		// Mirrors how both call sites build "today": from the visitor's clock,
		// zeroed to local midnight.
		const today = new Date(2026, 9, 16, 9, 0, 0); // local Oct 16 2026, 9:00 AM Eastern
		const startOfToday = new Date(today);
		startOfToday.setHours(0, 0, 0, 0);

		expect(parseLocalDate('2026-10-16') >= startOfToday).toBe(true);
	});

	it('is earlier than the next local midnight, for a visitor west of UTC', () => {
		process.env.TZ = 'America/New_York';

		const tomorrow = new Date(2026, 9, 17, 9, 0, 0); // local Oct 17 2026, 9:00 AM Eastern
		const startOfTomorrow = new Date(tomorrow);
		startOfTomorrow.setHours(0, 0, 0, 0);

		expect(parseLocalDate('2026-10-16') < startOfTomorrow).toBe(true);
	});
});
