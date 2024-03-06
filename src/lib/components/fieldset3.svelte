<script lang="ts">
	import type { Option } from '$lib/types';
	import CheckboxOption from './checkboxOption.svelte';

	export let form = '';
	export let yearly = false;

	let osChecked = false;
	let lsChecked = false;
	let cpChecked = false;

	export let options: Option[] = [];

	$: {
		options = [];
		if (osChecked)
			options = [...options, { description: 'Online service', price: yearly ? 10 : 1 }];
		if (lsChecked)
			options = [...options, { description: 'Larger storage', price: yearly ? 20 : 2 }];
		if (cpChecked)
			options = [...options, { description: 'Customizable Profile', price: yearly ? 20 : 2 }];
	}
</script>

<fieldset {form}>
	<h1>Pick add-ons</h1>
	<p>Add-ons help enhance your gaming experience.</p>

	<CheckboxOption
		{yearly}
		heading="Online service"
		subscript="Access to multiplayer games"
		moPrice={1}
		yePrice={10}
		bind:checked={osChecked}
	></CheckboxOption>

	<CheckboxOption
		{yearly}
		heading="Larger storage"
		subscript="Extra 1TB of cloud save"
		moPrice={2}
		yePrice={20}
		bind:checked={lsChecked}
	></CheckboxOption>

	<CheckboxOption
		{yearly}
		heading="Customizable Profile"
		subscript="Custom theme on your profile"
		moPrice={2}
		yePrice={20}
		bind:checked={cpChecked}
	></CheckboxOption>
</fieldset>

<style>
	fieldset {
		border: none;
	}

	p {
		color: var(--clr-text-shaded);
	}
</style>
