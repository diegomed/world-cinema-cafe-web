<script lang="ts">
	let { videoId, title }: { videoId: string; title: string } = $props();
	let playing = $state(false);

	const thumbnailUrl = $derived(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);

	// The page is prerendered, so its HTML carries the thumbnail of whichever film
	// was "Coming Next" on the build day. Svelte deliberately doesn't repair a
	// mismatched `src` while hydrating, so set it explicitly once we're in the
	// browser — otherwise the old film's thumbnail sticks around after the date
	// moves on, even though the title, synopsis and trailer update.
	let thumbnail: HTMLImageElement | undefined = $state();
	$effect(() => {
		if (thumbnail && thumbnail.getAttribute('src') !== thumbnailUrl) {
			thumbnail.src = thumbnailUrl;
		}
	});
</script>

<div
	class="relative aspect-video overflow-hidden rounded-lg border border-wcc-gold-dim/40 bg-wcc-charcoal shadow-2xl shadow-black/60"
>
	{#if playing}
		<iframe
			class="h-full w-full"
			src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
			title={`${title} trailer`}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	{:else}
		<button
			type="button"
			class="group absolute inset-0 flex h-full w-full items-center justify-center"
			aria-label={`Play trailer for ${title}`}
			onclick={() => (playing = true)}
		>
			<img
				bind:this={thumbnail}
				src={thumbnailUrl}
				alt=""
				class="h-full w-full object-cover opacity-70 transition group-hover:opacity-85"
				loading="lazy"
			/>
			<span
				class="absolute flex h-16 w-16 items-center justify-center rounded-full bg-wcc-gold text-wcc-ink shadow-lg transition-transform group-hover:scale-110 sm:h-20 sm:w-20"
			>
				<svg viewBox="0 0 24 24" class="ml-1 h-7 w-7 fill-current sm:h-8 sm:w-8">
					<path d="M8 5v14l11-7z" />
				</svg>
			</span>
			<span
				class="absolute bottom-3 left-3 rounded bg-wcc-ink/70 px-2 py-1 font-sans text-xs tracking-wide text-wcc-cream sm:bottom-4 sm:left-4"
			>
				Watch the trailer
			</span>
		</button>
	{/if}
</div>
