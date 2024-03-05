<script lang="ts">
	import CheckboxOption from './checkboxOption.svelte';

	export let form = '';
	export let yearly = false;
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
	></CheckboxOption>

	<CheckboxOption
		{yearly}
		heading="Larger storage"
		subscript="Extra 1TB of cloud save"
		moPrice={2}
		yePrice={20}
	></CheckboxOption>

	<CheckboxOption
		{yearly}
		heading="Customizable Profile"
		subscript="Custom theme on your profile"
		moPrice={2}
		yePrice={20}
	></CheckboxOption>
</fieldset>

<style>
	fieldset {
		border: none;
	}
</style>
