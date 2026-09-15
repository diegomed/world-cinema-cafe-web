<script lang="ts">
	let email = $state('');
	let submitted = $state(false);

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (!email) return;
		// Placeholder only — no signup service is wired up yet.
		submitted = true;
	}
</script>

<section id="newsletter" class="bg-wcc-ink px-6 py-24">
	<div class="mx-auto max-w-xl text-center">
		<h2 class="font-display text-3xl text-wcc-cream sm:text-4xl">Stay in the loop</h2>
		<p class="mt-4 leading-relaxed text-wcc-muted">
			Get next month's film, the menu, and reservation details before anyone else.
		</p>
		{#if submitted}
			<p class="mt-8 text-lg text-wcc-gold">Thanks. We'll be in touch soon.</p>
		{:else}
			<form class="mt-8 flex flex-col gap-3 sm:flex-row" onsubmit={handleSubmit}>
				<label for="email" class="sr-only">Email address</label>
				<input
					id="email"
					type="email"
					required
					bind:value={email}
					placeholder="you@email.com"
					class="flex-1 rounded-full border border-wcc-muted/30 bg-wcc-charcoal px-5 py-3 text-sm text-wcc-cream placeholder:text-wcc-muted/60 focus:border-wcc-gold focus:outline-none"
				/>
				<button
					type="submit"
					class="rounded-full bg-wcc-gold px-8 py-3 text-sm font-medium tracking-wide text-wcc-ink uppercase transition hover:brightness-110"
				>
					Sign Up
				</button>
			</form>
		{/if}
	</div>
</section>
