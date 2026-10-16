<script lang="ts">
	import ticket from '$lib/assets/wcc-ticket.jpg';
	import ticketBack from '$lib/assets/wcc-ticket-back.jpg';
</script>

<section id="invite" class="bg-wcc-ink px-6 py-16">
	<div class="mx-auto flex max-w-5xl flex-col gap-6">
		<img
			src={ticket}
			alt="World Cinema Café ticket: Free, admit one. You are cordially invited. Screening global films the second Friday of every month at 6:30 PM, at Quaker House, 316 E. Marks Street, Orlando, FL. Pickles, pretzels, and popcorn."
			class="w-full rounded-lg border border-wcc-gold-dim/25"
			width="2000"
			height="647"
		/>
		<img
			src={ticketBack}
			alt="Back of the World Cinema Café ticket: The Five Cardinal Sins of Cinema — the film is subtitled, too slow, too old, too long, or has no story — with a quote from Andrey Tarkovsky: Art affects a person's emotions, not his reason. Its function is, as it were, to turn and loosen the human soul, making it receptive to good."
			class="w-full rounded-lg border border-wcc-gold-dim/25"
			width="2000"
			height="647"
		/>
	</div>
</section>
