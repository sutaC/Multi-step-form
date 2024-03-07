<script lang="ts">
	import TextField from './textField.svelte';

	export let form = '';
</script>

<fieldset {form}>
	<h1>Personal info</h1>
	<p>Please provide your name, email address, and phone number.</p>

	<TextField label="Name" placeholder="e.g. Stephen King" error=""></TextField>
	<TextField label="Email Address" placeholder="e.g. stephenking@lorem.com" error=""></TextField>
	<TextField label="Phone Number" placeholder="e.g. +1 234 567 890" error="Err"></TextField>
</fieldset>

<style>
	fieldset {
		border: none;
	}

	p {
		color: var(--clr-text-shaded);
	}
</style>
