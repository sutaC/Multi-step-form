<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import Fieldset1 from '$lib/components/fieldset1.svelte';
	import Fieldset2 from '$lib/components/fieldset2.svelte';
	import Fieldset3 from '$lib/components/fieldset3.svelte';
	import Fieldset4 from '$lib/components/fieldset4.svelte';
	import Finished from '$lib/components/finished.svelte';

	let selected = 1;
	let finished = false;

	function handleBack() {
		if (selected > 1) return selected--;
	}

	function handleNext() {
		if (selected < 4) return selected++;
		if (selected !== 4) return;
		finished = true;
	}
</script>

<div class="app">
	<Header {selected}></Header>

	<main>
		{#if finished}
			<Finished></Finished>
		{:else if selected === 1}
			<Fieldset1></Fieldset1>
		{:else if selected === 2}
			<Fieldset2></Fieldset2>
		{:else if selected === 3}
			<Fieldset3></Fieldset3>
		{:else if selected === 4}
			<Fieldset4></Fieldset4>
		{/if}

		<div class:hidden={finished}>
			<Footer
				btnStyle={selected === 4 ? 'confirm' : 'default'}
				btnBefore={selected > 1}
				on:back={handleBack}
				on:next={handleNext}
			></Footer>
		</div>
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

	.hidden {
		display: none;
	}
</style>
