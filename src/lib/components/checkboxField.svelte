<script lang="ts">
	export let checked = false;
	export let off: string = '';
	export let on = '';

	const id =
		'ID' + off.replaceAll(' ', '').toLowerCase() + '-' + on.replaceAll(' ', '').toLowerCase();
</script>

<div class="field">
	<p class="off">{off}</p>

	<input type="checkbox" {id} bind:checked />
	<label for={id}></label>

	<p class="on">{on}</p>
</div>

<style>
	.field {
		width: 100%;
		background-color: var(--clr-section-bg);
		padding: 0.75rem;
		border-radius: 0.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin-top: 0.5rem;
	}

	input {
		display: none;
	}

	label {
		width: 2.25rem;
		height: 1.25rem;
		display: block;
		background-color: var(--clr-text);
		border-radius: 1rem;
		cursor: pointer;
		position: relative;
	}

	label::before {
		position: absolute;
		left: 0;
		top: 50%;
		translate: 20% -50%;
		display: block;
		content: '';
		height: 75%;
		aspect-ratio: 1;
		border-radius: 100%;
		background-color: var(--clr-text-light);
		transition: translate 200ms ease-in-out;
	}

	input:checked + label::before {
		translate: 120% -50%;
	}

	p {
		color: var(--clr-text-shaded);
		font-weight: 500;
		margin: 0;
		transition: color 200ms ease-out;
	}

	.field:has(input:not(:checked)) .off,
	.field:has(input:checked) .on {
		color: var(--clr-text);
	}
</style>
