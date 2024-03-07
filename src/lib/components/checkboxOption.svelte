<script lang="ts">
	export let yearly = false;
	export let heading = '';
	export let subscript = '';
	export let moPrice = 0;
	export let yePrice = 0;
	export let checked = false;

	const id = 'ID' + heading.replaceAll(' ', '').toLowerCase();
</script>

<div class="option">
	<input type="checkbox" {id} bind:checked />
	<label for={id}>
		<div class="checkbox">
			<i class="icon"></i>
		</div>
		<div class="description">
			<p class="heading">{heading}</p>
			<p class="subscript">{subscript}</p>
		</div>
		<div class="price">
			{#if yearly}
				+${yePrice}/ye
			{:else}
				+${moPrice}/mo
			{/if}
		</div>
	</label>
</div>

<style>
	.option {
		width: 100%;
		margin-bottom: 1rem;
	}

	input {
		display: none;
	}

	label {
		display: block;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		width: 100%;
		border: 1px solid var(--clr-body-bg);
		border-radius: 0.5rem;
		padding: 0.75rem;
		transition: all 150ms ease-out;
	}

	label:hover,
	label:focus {
		border-color: var(--clr-highlight);
	}

	.description {
		width: 100%;
	}

	p {
		margin: 0;
	}

	.heading {
		font-weight: 500;
		font-size: 0.95em;
		margin-bottom: 0.25rem;
	}

	.subscript {
		color: var(--clr-text-shaded);
		font-size: 0.8em;
	}

	.price {
		color: var(--clr-highlight);
		font-size: 0.8em;
	}

	.checkbox {
		aspect-ratio: 1;
		width: 1.125rem;
		border: 1px solid var(--clr-body-bg);
		border-radius: 0.2rem;
		transition: all 150ms ease-out;
	}

	.checkbox > i.icon {
		display: block;
		width: 100%;
		aspect-ratio: 1;
		opacity: 0;
		transition: opacity 150ms ease-out;
	}

	input:checked + label {
		border-color: var(--clr-highlight);
		background-color: var(--clr-section-bg);
	}

	input:checked + label > .checkbox {
		border-color: var(--clr-highlight);
		background-color: var(--clr-highlight);
	}

	input:checked + label > .checkbox > i.icon {
		background-image: url('/icon-checkmark.svg');
		background-repeat: no-repeat;
		background-position: center;
		background-size: 75%;
		opacity: 1;
	}
</style>
