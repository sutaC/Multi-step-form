<script lang="ts">
	export let label: string;
	export let name: string;
	export let checked = false;
	export let subscript = '';
	export let icon = '';
	export let discount = '';

	const id = 'ID' + label.replaceAll(' ', '').toLowerCase();
</script>

<input type="radio" {name} {id} {checked} on:click />
<label for={id}>
	<i class="icon" style="--_src: url({icon})"></i>
	<div class="header">
		<p>{label}</p>
		<p class="subscript">{subscript}</p>
		<p class="discount">{discount}</p>
	</div>
</label>

<style>
	input {
		display: none;
	}

	label {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.75rem;
		border: 1px solid var(--clr-text-shaded);
		border-radius: 0.5rem;
		margin: 0.5rem 0;
	}

	input:checked + label {
		border-color: var(--clr-highlight);
		background-color: var(--clr-text-light);
	}

	.icon {
		background-image: var(--_src);
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		display: block;
		width: 2.5rem;
		aspect-ratio: 1;
	}

	p {
		margin: 0.25rem 0;
		font-weight: 500;
	}

	p.subscript {
		font-weight: 400;
		color: var(--clr-text-shaded);
	}

	p.discount {
		font-size: 0.75rem;
		font-weight: 400;
	}

	p.discount:empty {
		display: none;
	}

	@media (width >= 700px) {
		label {
			flex: 1;
			flex-direction: column;
			align-items: start;
			gap: 2.5rem;
			padding: 1rem 1.5rem;
		}
	}
</style>
