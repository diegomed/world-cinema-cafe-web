<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer class="border-t border-wcc-gold-dim/20 px-6 py-10">
	<div
		class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-wcc-muted sm:flex-row"
	>
		<p class="font-display tracking-[0.2em] text-wcc-cream uppercase">World Cinema Cafe</p>
		<nav class="flex gap-6">
			<!-- Instagram link on hold until there's an actual page to link to.
			<a
				href="https://instagram.com/worldcinemacafe"
				target="_blank"
				rel="noopener noreferrer"
				class="transition-colors hover:text-wcc-gold">Instagram</a
			>
			-->
			<a
				href="mailto:leafstormpictures@yahoo.com?subject=World%20Cinema%20Cafe"
				class="transition-colors hover:text-wcc-gold">Contact</a
			>
		</nav>
		<p>&copy; {year} World Cinema Cafe</p>
	</div>
</footer>
