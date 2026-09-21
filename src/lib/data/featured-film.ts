import type { Film } from './films';

/**
 * The film to spotlight as "Coming Next": the first upcoming screening on or
 * after `today` (the screening's own day still counts as upcoming). If every
 * screening in the list has already passed — nothing booked yet for next
 * month — falls back to the most recent one instead of leaving the
 * spotlight empty.
 */
export function getFeaturedFilm(films: Film[], today: Date): Film {
	const startOfToday = new Date(today);
	startOfToday.setHours(0, 0, 0, 0);

	const upcoming = films.find((film) => new Date(film.iso) >= startOfToday);
	return upcoming ?? films[films.length - 1];
}
