<script lang="ts">
	export let label: string;
	export let placeholder = '';
	export let error = '';

	export let value = '';

	const id = 'ID' + label.replaceAll(' ', '').toLowerCase();
</script>

<div class="field">
	<div class="header">
		<label for={id}>{label}</label>
		<div class="error">{error}</div>
	</div>
	<input type="text" {id} {placeholder} bind:value />
</div>

<style>
	.field {
		margin: 1rem 0;
		font-weight: 500;
	}

	input {
		width: 100%;
		font-size: 0.9rem;
		padding: 0.75em 1em;
		border: 1px solid var(--clr-text-shaded);
		border-radius: 0.2rem;
		transition: border-color 200ms ease-out;
	}

	input:hover {
		border-color: var(--clr-highlight);
	}

	input:focus {
		outline: none;
		border-color: var(--clr-highlight);
	}

	.header {
		display: flex;
		justify-content: space-between;
	}

	.error {
		color: var(--clr-error);
		font-size: 0.75rem;
	}

	.error:empty {
		display: none;
	}

	label {
		font-size: 0.75rem;
	}
</style>
