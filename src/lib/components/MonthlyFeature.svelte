<script lang="ts">
	import { monthlyFeature as f } from '$lib/data/feature';
	import TrailerPlayer from './TrailerPlayer.svelte';
</script>

<section id="feature" class="bg-wcc-charcoal px-6 py-24">
	<div class="mx-auto max-w-5xl">
		<p class="mb-8 text-center text-xs tracking-[0.4em] text-wcc-gold uppercase sm:text-left">
			This Month at WCC
		</p>
		<div class="grid gap-12 md:grid-cols-2 md:items-start">
			<div>
				<TrailerPlayer videoId={f.trailerId} title={f.title} />
			</div>
			<div>
				<h2 class="font-display text-4xl text-wcc-cream">{f.title}</h2>
				<p class="mt-1 text-sm text-wcc-muted">{f.director} · {f.year}</p>
				<p class="mt-6 leading-relaxed text-wcc-cream/90">{f.synopsis}</p>
				<dl class="mt-6 space-y-1 text-sm text-wcc-muted">
					<div class="flex gap-2">
						<dt class="text-wcc-gold">Date</dt>
						<dd>{f.date}</dd>
					</div>
					<div class="flex gap-2">
						<dt class="text-wcc-gold">Time</dt>
						<dd>{f.time}</dd>
					</div>
				</dl>

				<div class="mt-8 rounded-lg border border-wcc-gold-dim/30 bg-wcc-ink/40 p-5">
					<h3 class="font-display text-lg text-wcc-cream">{f.food.heading}</h3>
					<p class="mt-2 text-sm leading-relaxed text-wcc-muted">{f.food.description}</p>
					<p class="mt-2 text-xs text-wcc-muted/80 italic">{f.food.note}</p>
				</div>

				<a
					href="#newsletter"
					class="mt-8 inline-block rounded-full bg-wcc-gold px-8 py-3 text-sm font-medium tracking-wide text-wcc-ink uppercase transition hover:brightness-110"
				>
					Reserve Your Seat
				</a>
			</div>
		</div>
	</div>
</section>
