export type MonthlyFeature = {
	title: string;
	year: number;
	director: string;
	synopsis: string;
	date: string;
	time: string;
	trailerId: string;
	food: {
		heading: string;
		description: string;
		note: string;
	};
};

// Update this file each month with the new screening's details.
export const monthlyFeature: MonthlyFeature = {
	title: 'Amélie',
	year: 2001,
	director: 'Jean-Pierre Jeunet',
	synopsis:
		'A shy Parisian waitress named Amélie decides to secretly mend the lives of those around her, and in doing so finds her own way to happiness. Whimsical, warm, and endlessly rewatchable.',
	date: 'Saturday, September 26 (TBC)',
	time: 'Doors 6:30 PM · Film 7:30 PM (TBC)',
	trailerId: '555A7T_kmIc',
	food: {
		heading: 'Food for everyone',
		description:
			'Every screening opens with a shared table before the film — this month, a French-inspired spread for all attendees.',
		note: 'Vegetarian options always available. Let us know about other dietary needs when you reserve.'
	}
};
