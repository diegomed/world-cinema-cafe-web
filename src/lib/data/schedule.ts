export type ScreeningDate = {
	date: string;
	iso: string;
	film?: string;
};

// One screening per second Friday of the month. Add next year's dates here
// when they're set — the section below marks past dates automatically.
export const screeningDates: ScreeningDate[] = [
	{ date: 'Friday, August 14', iso: '2026-08-14', film: 'The Old Oak' },
	{ date: 'Friday, September 11', iso: '2026-09-11', film: 'Amélie' },
	{ date: 'Friday, October 9', iso: '2026-10-09' },
	{ date: 'Friday, November 13', iso: '2026-11-13' },
	{ date: 'Friday, December 11', iso: '2026-12-11' }
];
