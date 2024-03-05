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
	let yearly = false;

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
		<div class:hidden={selected !== 1 || finished}>
			<Fieldset1></Fieldset1>
		</div>
		<div class:hidden={selected !== 2 || finished}>
			<Fieldset2 bind:yearly></Fieldset2>
		</div>
		<div class:hidden={selected !== 3 || finished}>
			<Fieldset3 {yearly}></Fieldset3>
		</div>
		<div class:hidden={selected !== 4 || finished}>
			<Fieldset4></Fieldset4>
		</div>

		{#if finished}
			<Finished></Finished>
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
		padding: 0.75rem;
		background-image: url(bg-sidebar-mobile.svg);
		background-position: top center;
		background-size: contain;
		background-repeat: no-repeat;
	}

	main {
		background-color: var(--clr-base);
		border-radius: 0.5rem;
		padding: 1rem;
		margin-top: 1rem;
	}

	.hidden {
		display: none;
	}
</style>
