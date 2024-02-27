<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import Fieldset1 from '$lib/components/fieldset1.svelte';
	import Fieldset2 from '$lib/components/fieldset2.svelte';
	import Fieldset3 from '$lib/components/fieldset3.svelte';
	import Fieldset4 from '$lib/components/fieldset4.svelte';

	let selected = 1;

	function handleProceed() {
		selected++;
		if (selected > 4) selected = 1;
	}
</script>

<div class="app">
	<Header {selected}></Header>

	<main>
		{#if selected === 1}
			<Fieldset1></Fieldset1>
		{:else if selected === 2}
			<Fieldset2></Fieldset2>
		{:else if selected === 3}
			<Fieldset3></Fieldset3>
		{:else if selected === 4}
			<Fieldset4></Fieldset4>
		{/if}

		<Footer btnStyle="default" on:click={handleProceed}></Footer>
	</main>
</div>

<style>
	.app {
		min-height: 100vh;
		padding: 2rem 1rem;
		background-image: url(bg-sidebar-mobile.svg);
		background-position: top center;
		background-size: contain;
		background-repeat: no-repeat;
	}

	main {
		background-color: var(--clr-main-bg);
		border-radius: 0.5rem;
		padding: 1rem;
		margin-top: 2rem;
	}
</style>
