<script lang="ts">
	import TextField from './textField.svelte';

	export let form = '';

	export let valName = '';
	export let valEmail = '';
	export let valPhone = '';

	enum FieldErrors {
		Empty = 'Field cannot be empty',
		MustBePhoneNumber = 'Field must be an valid phone number',
		MustBeEmail = 'Field must be an valid email address'
	}

	const errors = {
		name: '',
		email: '',
		phone: ''
	};

	export function validate(): boolean {
		let valid = true;

		// Name
		if (valName.trim().length === 0) {
			errors.name = FieldErrors.Empty;
			valid = false;
		}

		// Email
		if (valEmail.trim().length === 0) {
			errors.email = FieldErrors.Empty;
			valid = false;
		} else if (!valEmail.trim().match(/^[^@|\s]+@([^@|\s]+\.)+[^@|\s]+$/s)) {
			errors.email = FieldErrors.MustBeEmail;
			valid = false;
		}

		// Phone
		if (valPhone.trim().length === 0) {
			errors.phone = FieldErrors.Empty;
			valid = false;
		} else if (!valPhone.trim().match(/^(\+\d{1,3} )?(\d{3}[ ,-]?){2}\d{3}$/s)) {
			errors.phone = FieldErrors.MustBePhoneNumber;
			valid = false;
		}

		return valid;
	}
</script>

<fieldset {form}>
	<h1>Personal info</h1>
	<p>Please provide your name, email address, and phone number.</p>

	<TextField
		label="Name"
		placeholder="e.g. Stephen King"
		error={errors.name}
		bind:value={valName}
		on:input={() => {
			errors.name = '';
		}}
	></TextField>
	<TextField
		label="Email Address"
		placeholder="e.g. stephenking@lorem.com"
		error={errors.email}
		bind:value={valEmail}
		on:input={() => {
			errors.email = '';
		}}
	></TextField>
	<TextField
		label="Phone Number"
		placeholder="e.g. +1 234 567 890"
		error={errors.phone}
		bind:value={valPhone}
		on:input={() => {
			errors.phone = '';
		}}
	></TextField>
</fieldset>

<style>
	fieldset {
		border: none;
	}

	p {
		color: var(--clr-text-shaded);
	}
</style>
