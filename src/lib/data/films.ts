export type Film = {
	title: string;
	year: number;
	director: string;
	synopsis: string;
	date: string;
	iso: string;
	time: string;
	trailerId: string;
	food: {
		heading: string;
		description: string;
	};
};

// Films in screening order, one per second Friday of the month. Both the
// Screenings list and the "Coming Next" spotlight read from this single
// list, so there's one place to update per month rather than two.
// Add next year's entries here once they're booked.
export const films: Film[] = [
	{
		title: 'The Old Oak',
		year: 2023,
		director: 'Ken Loach',
		synopsis:
			'In a struggling former mining village, a pub owner and a community of newly arrived Syrian refugees find their fates entwined against a rising tide of local resentment. A tender, clear-eyed story about solidarity.',
		date: 'Friday, August 14',
		iso: '2026-08-14',
		time: 'Doors 6:00 PM · Film 6:30 PM',
		trailerId: 'Fwb0c5zqsyM',
		food: {
			heading: 'Food for everyone',
			description:
				"There's always a shared meal before the film — simple and generous, and open to everyone in the room. What's served may vary, but no one leaves hungry."
		}
	},
	{
		title: 'Amélie',
		year: 2001,
		director: 'Jean-Pierre Jeunet',
		synopsis:
			'A shy Parisian waitress named Amélie decides to secretly mend the lives of those around her, and in doing so finds her own way to happiness. Whimsical, warm, and endlessly rewatchable.',
		date: 'Friday, September 11',
		iso: '2026-09-11',
		time: 'Doors 6:00 PM · Film 6:30 PM',
		trailerId: '555A7T_kmIc',
		food: {
			heading: 'Food for everyone',
			description:
				"There's always a shared meal before the film — simple and generous, and open to everyone in the room. What's served may vary, but no one leaves hungry."
		}
	},
	{
		title: 'Cinema Paradiso',
		year: 1988,
		director: 'Giuseppe Tornatore',
		synopsis:
			'A celebrated filmmaker looks back on his childhood in a small Sicilian village, and the projectionist who first opened his eyes to the magic of the movies. A love letter to moviegoing itself.',
		date: 'Friday, October 16',
		iso: '2026-10-16',
		time: 'Doors 6:00 PM · Film 6:30 PM',
		trailerId: 'JMyVSD6OvO8',
		food: {
			heading: 'Food for everyone',
			description:
				"There's always a shared meal before the film — simple and generous, and open to everyone in the room. What's served may vary, but no one leaves hungry."
		}
	},
	{
		title: 'El Poeta',
		year: 2025,
		director: 'Simón Mesa Soto',
		synopsis:
			'An aging, once-promising poet in Medellín — long stalled in his own ambitions — takes on a gifted teenage student, and is forced to confront the life he never quite lived.',
		date: 'Friday, November 13',
		iso: '2026-11-13',
		time: 'Doors 6:00 PM · Film 6:30 PM',
		trailerId: 'L8Bia4f8l20',
		food: {
			heading: 'Food for everyone',
			description:
				"There's always a shared meal before the film — simple and generous, and open to everyone in the room. What's served may vary, but no one leaves hungry."
		}
	},
	{
		title: 'The First of May',
		year: 1999,
		director: 'Paul Sirmons',
		synopsis:
			'At a rundown seaside carnival, an aging tightrope walker and a young boy — each carrying his own quiet grief — form an unlikely friendship that pulls them both back toward life. A gentle story about family found rather than born.',
		date: 'Friday, December 11',
		iso: '2026-12-11',
		time: 'Doors 6:00 PM · Film 6:30 PM',
		trailerId: 'MaaGPspHsaI',
		food: {
			heading: 'Food for everyone',
			description:
				"There's always a shared meal before the film — simple and generous, and open to everyone in the room. What's served may vary, but no one leaves hungry."
		}
	}
];
