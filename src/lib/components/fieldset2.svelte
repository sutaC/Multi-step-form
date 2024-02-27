<script lang="ts">
	import CheckboxField from './checkboxField.svelte';
	import RadioField from './radioField.svelte';

	export let form = '';
	export let yearly = false;
</script>

<fieldset {form}>
	<h1>Select your plan</h1>
	<p>You have the option of monthly or yearly billing.</p>

	<RadioField
		label="Arcade"
		discount={yearly ? '2 months free' : ''}
		name="type"
		checked={true}
		subscript={yearly ? '$90/yr' : '$9/mo'}
		icon="icon-arcade.svg"
	></RadioField>
	<RadioField
		label="Advanced"
		discount={yearly ? '2 months free' : ''}
		name="type"
		subscript={yearly ? '$120/yr' : '$12/mo'}
		icon="icon-advanced.svg"
	></RadioField>
	<RadioField
		label="Pro"
		discount={yearly ? '2 months free' : ''}
		name="type"
		subscript={yearly ? '$150/yr' : '$15/mo'}
		icon="icon-pro.svg"
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
