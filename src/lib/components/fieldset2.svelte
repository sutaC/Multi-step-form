<script lang="ts">
	import type { Option } from '$lib/types';
	import CheckboxField from './checkboxField.svelte';
	import RadioField from './radioField.svelte';

	export let form = '';
	export let yearly = false;

	let selected = 0;

	const options: Option[] = [
		{ description: 'Arcade', price: 9 },
		{ description: 'Advanced', price: 12 },
		{ description: 'Pro', price: 15 }
	];

	export let selectedOption: Option = options[selected];

	function handleSelect(idx: number) {
		selected = idx;
		selectedOption = options[selected];
	}
</script>

<fieldset {form}>
	<h1>Select your plan</h1>
	<p>You have the option of monthly or yearly billing.</p>

	<RadioField
		label="Arcade"
		discount={yearly ? '2 months free' : ''}
		name="type"
		subscript={yearly ? '$90/yr' : '$9/mo'}
		icon="icon-arcade.svg"
		checked={selected === 0}
		on:click={() => handleSelect(0)}
	></RadioField>
	<RadioField
		label="Advanced"
		discount={yearly ? '2 months free' : ''}
		name="type"
		subscript={yearly ? '$120/yr' : '$12/mo'}
		icon="icon-advanced.svg"
		checked={selected === 1}
		on:click={() => handleSelect(1)}
	></RadioField>
	<RadioField
		label="Pro"
		discount={yearly ? '2 months free' : ''}
		name="type"
		subscript={yearly ? '$150/yr' : '$15/mo'}
		icon="icon-pro.svg"
		checked={selected === 2}
		on:click={() => handleSelect(2)}
	></RadioField>

	<CheckboxField off="Monthly" on="Yearly" bind:checked={yearly}></CheckboxField>
</fieldset>

<style>
	fieldset {
		border: none;
	}

	p {
		color: var(--clr-text-shaded);
	}
</style>
