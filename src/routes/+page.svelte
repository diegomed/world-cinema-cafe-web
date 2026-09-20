<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import CardinalSins from '$lib/components/CardinalSins.svelte';
	import Schedule from '$lib/components/Schedule.svelte';
	import MonthlyFeature from '$lib/components/MonthlyFeature.svelte';
	import Community from '$lib/components/Community.svelte';
	import Visit from '$lib/components/Visit.svelte';
	// Newsletter is on hold until we pick a real signup service (no backend yet).
	// Kept intact for later — see conversation notes for the MailerLite plan.
	// import Newsletter from '$lib/components/Newsletter.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>World Cinema Café</title>
	<meta
		name="description"
		content="World Cinema Café is a community-organized cinema screening one film every second Friday, with food to share for all who attend."
	/>
	<meta property="og:title" content="World Cinema Café" />
	<meta
		property="og:description"
		content="Building community through film. A community-organized cultural cinema."
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<Header />
<main>
	<Hero />
	<About />
	<CardinalSins />
	<Schedule />
	<MonthlyFeature />
	<Community />
	<Visit />
	<!-- <Newsletter /> -->
</main>
<Footer />
