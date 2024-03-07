<script lang="ts">
	import type { Option } from '$lib/types';
	import { createEventDispatcher } from 'svelte';

	export let yearly = false;
	export let plan: Option = { description: '', price: 0 };
	export let options: Option[] = [];

	const dispatch = createEventDispatcher();
	$: planPrice = yearly ? plan.price * 10 : plan.price;
	let totalPrice = 0;

	$: {
		totalPrice = planPrice;
		options.forEach((option) => {
			totalPrice += option.price;
		});
	}

	const handleChange = () => {
		dispatch('pageChange', { page: 2 });
	};
</script>

<div class="summary">
	<h1>Finishing up</h1>
	<p class="subscript">Double-check everything looks OK before confirming.</p>

	<section>
		<div class="heading" class:noOptions={options.length === 0}>
			<div class="plan">
				<h2>{plan.description} (Monthly)</h2>
				<button class="change" on:click={handleChange}>Change</button>
			</div>
			<div class="planPrice">
				${planPrice}/{yearly ? 'yr' : 'mo'}
			</div>
		</div>
		<div class="options">
			{#each options as option, idx (idx)}
				<div class="option">
					<p class="name">{option.description}</p>
					<p>+${option.price}/{yearly ? 'yr' : 'mo'}</p>
				</div>
			{/each}
		</div>
	</section>
	<div class="total">
		<p>Total (per {yearly ? 'year' : 'month'})</p>
		<p class="totalPrice">
			${totalPrice}/{yearly ? 'yr' : 'mo'}
		</p>
	</div>
</div>

<style>
	.summary {
		padding: 0.35em 0.75em;
	}

	.subscript {
		color: var(--clr-text-shaded);
	}

	section {
		background-color: var(--clr-section-bg);
		padding: 1rem;
		font-size: 0.8rem;
		border-radius: 0.5rem;
	}

	h2 {
		font-size: 1em;
		margin: 0;
	}

	button.change {
		background-color: transparent;
		border: none;
		color: var(--clr-text-shaded);
		text-decoration: underline;
		font-weight: 500;
		font-size: 1em;
		margin: 0.5rem 0;
		padding: 0;
		cursor: pointer;
		transition: all 150ms ease-out;
	}

	button.change:hover,
	button.change:focus {
		color: var(--clr-highlight);
	}

	.heading {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid var(--clr-body-bg);
		padding-bottom: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.heading.noOptions {
		border-bottom: none;
		padding-bottom: 0;
		margin-bottom: 0;
	}

	.planPrice {
		font-weight: 700;
		font-size: 1em;
	}

	.option {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding: 0.5rem 0;
	}

	.option > p {
		margin: 0;
	}

	.option > p.name {
		color: var(--clr-text-shaded);
	}

	.total {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding: 1rem;
		font-size: 0.8rem;
	}

	.total > p {
		margin: 0;
		color: var(--clr-text-shaded);
	}

	.total > p.totalPrice {
		color: var(--clr-highlight);
		font-weight: 900;
		font-size: 1.2em;
	}
</style>
