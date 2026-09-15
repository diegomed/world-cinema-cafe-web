<script lang="ts">
	const venue = 'Quaker Meeting House';
	const addressLine = '316 E. Marks Street';
	const cityLine = 'Orlando, FL 32803';
	const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${venue}, ${addressLine}, ${cityLine}`)}`;
</script>

<section id="visit" class="bg-wcc-charcoal px-6 py-24">
	<div class="mx-auto grid max-w-4xl gap-16 sm:grid-cols-2">
		<div>
			<div class="flex items-center gap-2">
				<svg viewBox="0 0 24 24" class="h-5 w-5 fill-wcc-gold">
					<path
						d="M12 2c-4.14 0-7.5 3.36-7.5 7.5 0 5.63 6.5 11.63 6.78 11.88a1 1 0 0 0 1.44 0c.28-.25 6.78-6.25 6.78-11.88C19.5 5.36 16.14 2 12 2Zm0 10.25a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5Z"
					/>
				</svg>
				<h2 class="font-display text-3xl text-wcc-cream">Visit</h2>
			</div>
			<p class="mt-5 text-base leading-relaxed text-wcc-cream">
				<b>{venue}</b><br />
				<span class="text-wcc-muted">{addressLine}<br />{cityLine}</span>
			</p>
			<a
				href={mapsHref}
				target="_blank"
				rel="noopener noreferrer"
				class="mt-4 inline-block text-sm text-wcc-gold underline underline-offset-4 hover:brightness-110"
			>
				Get directions
			</a>
		</div>
		<div>
			<div class="flex items-center gap-2">
				<svg viewBox="0 0 24 24" class="h-5 w-5 fill-wcc-gold">
					<path
						d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 10.41 4.29 4.3-1.42 1.41L11 13V6h2Z"
					/>
				</svg>
				<h2 class="font-display text-3xl text-wcc-cream">Hours</h2>
			</div>
			<dl class="mt-5 space-y-3 text-base">
				<div class="flex justify-between gap-4">
					<dt class="text-wcc-muted">Screening night</dt>
					<dd class="text-wcc-cream">Second Friday of the month</dd>
				</div>
				<div class="flex justify-between gap-4">
					<dt class="text-wcc-muted">Doors</dt>
					<dd class="text-wcc-cream">6:00 PM</dd>
				</div>
				<div class="flex justify-between gap-4">
					<dt class="text-wcc-muted">Film</dt>
					<dd class="text-wcc-cream">6:30 PM</dd>
				</div>
			</dl>
		</div>
	</div>
</section>
