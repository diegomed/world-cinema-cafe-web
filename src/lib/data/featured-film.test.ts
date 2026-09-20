import { describe, expect, it } from 'vitest';

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
