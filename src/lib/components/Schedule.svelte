<script lang="ts">
	import { SvelteDate } from 'svelte/reactivity';

	import { screeningDates } from '$lib/data/schedule';

	const today = new SvelteDate();
	today.setHours(0, 0, 0, 0);

	function isPast(iso: string) {
		return new Date(iso) < today;
	}
</script>

<section id="screenings" class="bg-wcc-charcoal px-6 py-24">
	<div class="mx-auto max-w-3xl text-center">
		<p class="mb-3 text-xs tracking-[0.4em] text-wcc-gold uppercase">Screenings</p>
		<h2 class="font-display text-3xl text-wcc-cream sm:text-4xl">One film, every second Friday</h2>
		<p class="mx-auto mt-4 max-w-xl leading-relaxed text-wcc-muted">
			Films are announced closer to each date. There's always food to share before the lights go
			down.
		</p>

		<ul class="mt-12 divide-y divide-wcc-gold-dim/20 border-y border-wcc-gold-dim/20 text-left">
			{#each screeningDates as screening (screening.iso)}
				<li class="flex items-center justify-between gap-4 py-4">
					<span
						class="font-display text-lg text-wcc-cream"
						class:opacity-50={isPast(screening.iso)}
					>
						{screening.date}
					</span>
					<span class="text-xs tracking-wide text-wcc-muted uppercase">
						{screening.film ?? (isPast(screening.iso) ? 'Past' : 'Coming soon...')}
					</span>
				</li>
			{/each}
		</ul>

		<!-- CTA on hold until there's a real way to act on it (newsletter signup or similar).
		<a
			href="mailto:leafstormpictures@yahoo.com?subject=Notify%20me%20of%20upcoming%20films"
			class="mt-10 inline-block rounded-full bg-wcc-gold px-8 py-3 text-sm font-medium tracking-wide text-wcc-ink uppercase transition hover:brightness-110"
		>
			Get Notified of Each Film
		</a>
		-->
	</div>
</section>
