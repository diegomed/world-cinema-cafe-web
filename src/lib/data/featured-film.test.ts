import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { films } from './films';
import { getFeaturedFilm } from './featured-film';

describe('getFeaturedFilm', () => {
	it('returns the next unscreened film when today falls between two screenings', () => {
		const today = new Date('2026-09-15'); // after Amélie, before Cinema Paradiso
		expect(getFeaturedFilm(films, today).title).toBe('Cinema Paradiso');
	});

	it('treats the screening day itself as still upcoming', () => {
		const today = new Date('2026-10-16'); // Cinema Paradiso's own screening day
		expect(getFeaturedFilm(films, today).title).toBe('Cinema Paradiso');
	});

	it('moves on to the following film the day after a screening', () => {
		const today = new Date('2026-10-17'); // day after Cinema Paradiso
		expect(getFeaturedFilm(films, today).title).toBe('El Poeta');
	});

	it('falls back to the most recently screened film once every screening has passed', () => {
		const today = new Date('2027-01-01'); // after The First of May
		expect(getFeaturedFilm(films, today).title).toBe('The First of May');
	});
});

describe('getFeaturedFilm for a visitor west of UTC', () => {
	// Regression test for a timezone bug: `new Date(film.iso)` parses the
	// plain `YYYY-MM-DD` screening date as UTC midnight, while "today" is
	// zeroed with `setHours(0, 0, 0, 0)`, which zeroes to *local* midnight.
	// For any visitor west of UTC, local midnight falls hours after UTC
	// midnight, so on the screening day itself the comparison could flip
	// before the local calendar actually turned over. A bare
	// `new Date('2026-10-16')` fixture doesn't exercise this, because both
	// the fixture and the code under test parse it as UTC regardless of the
	// machine's real timezone — so these tests pin the timezone itself
	// (US Eastern, UTC-4 in October, e.g. Orlando, FL) rather than relying
	// on whatever timezone the test runner happens to be in. Node reads
	// `TZ` dynamically for each `Date` it constructs, so setting it here
	// (and restoring it after) is enough — no fake-timer library needed.
	let originalTz: string | undefined;

	beforeEach(() => {
		originalTz = process.env.TZ;
		process.env.TZ = 'America/New_York'; // UTC-4 in October (daylight time)
	});

	afterEach(() => {
		process.env.TZ = originalTz;
	});

	it('still treats the screening day itself as upcoming at local midday', () => {
		const today = new Date(2026, 9, 16, 12, 0, 0); // local Oct 16 2026, 12:00 PM Eastern
		expect(getFeaturedFilm(films, today).title).toBe('Cinema Paradiso');
	});

	it('still treats the screening day itself as upcoming right after local midnight', () => {
		const today = new Date(2026, 9, 16, 0, 1, 0); // local Oct 16 2026, 12:01 AM Eastern
		expect(getFeaturedFilm(films, today).title).toBe('Cinema Paradiso');
	});

	it('still moves on to the next film the day after a screening', () => {
		const today = new Date(2026, 9, 17, 0, 1, 0); // local Oct 17 2026, 12:01 AM Eastern
		expect(getFeaturedFilm(films, today).title).toBe('El Poeta');
	});
});
