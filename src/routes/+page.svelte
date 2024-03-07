<script lang="ts">
	import type { ChangePageEvent, Option } from '$lib/types';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import Fieldset1 from '$lib/components/fieldset1.svelte';
	import Fieldset2 from '$lib/components/fieldset2.svelte';
	import Fieldset3 from '$lib/components/fieldset3.svelte';
	import Summary from '$lib/components/summary.svelte';
	import Finished from '$lib/components/finished.svelte';

	let selected = 1;
	let finished = false;
	const form = 'mainForm';

	function handleBack() {
		if (selected > 1) return selected--;
	}

	function handleNext() {
		if (selected < 4) return selected++;
		if (selected !== 4) return;
		finished = true;
	}

	function handleChangePage(event: ChangePageEvent) {
		const page = event.detail.page;
		if (page < 1 || page > 4) throw new Error('Page index out of bounds');
		selected = page;
	}

	// Data
	let yearly = false;
	let plan: Option;
	let options: Option[];
</script>

<div class="app">
	<div class="mobile">
		<Header {selected}></Header>
	</div>

	<main>
		<div class="banner desktop">
			<Header {selected}></Header>
		</div>

		<form id={form}>
			<div class:hidden={selected !== 1 || finished}>
				<Fieldset1 {form}></Fieldset1>
			</div>
			<div class:hidden={selected !== 2 || finished}>
				<Fieldset2 {form} bind:yearly bind:selectedOption={plan}></Fieldset2>
			</div>
			<div class:hidden={selected !== 3 || finished}>
				<Fieldset3 {form} {yearly} bind:options></Fieldset3>
			</div>
			<div class:hidden={selected !== 4 || finished}>
				<Summary {plan} {options} {yearly} on:pageChange={handleChangePage}></Summary>
			</div>

			{#if finished}
				<Finished></Finished>
			{/if}

			<div class="footerContainer" class:hidden={finished}>
				<Footer
					btnStyle={selected === 4 ? 'confirm' : 'default'}
					btnBefore={selected > 1}
					on:back={handleBack}
					on:next={handleNext}
				></Footer>
			</div>
		</form>
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

	.mobile {
		display: block;
	}
	.desktop {
		display: none;
	}

	@media (width >= 700px) {
		.mobile {
			display: none;
		}
		.desktop {
			display: block;
		}

		.app {
			background-image: none;
			display: grid;
			place-content: center;
		}

		main {
			width: clamp(50vw, 50rem, 90vw);
			aspect-ratio: 1.618;

			display: flex;
			justify-content: space-between;
			gap: 5%;
		}

		form {
			overflow: auto;
			display: flex;
			justify-content: space-between;
			flex-direction: column;
			min-height: 100%;
			width: 65%;
		}

		.banner {
			border-radius: 1rem;
			background-image: url('bg-sidebar-desktop.svg');
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
			width: 35%;
		}
	}
</style>
