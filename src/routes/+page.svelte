<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	// MonthlyFeature is on hold in favor of the Screenings list below, until we're
	// ready to spotlight a specific film + trailer again. Kept intact for later.
	// import MonthlyFeature from '$lib/components/MonthlyFeature.svelte';
	import Schedule from '$lib/components/Schedule.svelte';
	import Community from '$lib/components/Community.svelte';
	import Visit from '$lib/components/Visit.svelte';
	// Newsletter is on hold until we pick a real signup service (no backend yet).
	// Kept intact for later — see conversation notes for the MailerLite plan.
	// import Newsletter from '$lib/components/Newsletter.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>World Cinema Cafe. A Community Cinema</title>
	<meta
		name="description"
		content="World Cinema Cafe is a community-organized cinema screening one film every second Friday, with food to share for all who attend."
	/>
	<meta property="og:title" content="World Cinema Cafe" />
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
	<!-- <MonthlyFeature /> -->
	<Schedule />
	<Community />
	<Visit />
	<!-- <Newsletter /> -->
</main>
<Footer />
