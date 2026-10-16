/**
 * Parses a plain `YYYY-MM-DD` string as **local midnight**, not UTC midnight.
 *
 * `new Date('2026-10-16')` parses per the ISO-8601 rules as UTC midnight.
 * Everywhere we compare a screening's date against "today", "today" is built
 * from the visitor's own clock and zeroed with `setHours(0, 0, 0, 0)`, which
 * zeroes to *local* midnight. For any visitor west of UTC (which includes
 * every US timezone), local midnight falls hours after UTC midnight, so a
 * UTC-parsed screening date can register as "in the past" while the local
 * calendar still reads as the screening day itself. Parsing both sides in
 * local time keeps the comparison correct regardless of the visitor's
 * timezone.
 */
export function parseLocalDate(iso: string): Date {
	const [year, month, day] = iso.split('-').map(Number);
	return new Date(year, month - 1, day);
}
