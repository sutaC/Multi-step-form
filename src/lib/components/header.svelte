<script lang="ts">
	export let selected: number = 1;

	$: if (selected < 1 || selected > 4) throw new Error(`Selected out of bounds: ${selected}`);
</script>

<header>
	<div class="stepCard">
		<div class="step" class:selected={selected === 1}>1</div>
		<div class="description desktop">
			<p class="caption">Step 1</p>
			<p class="name">Your info</p>
		</div>
	</div>
	<div class="stepCard">
		<div class="step" class:selected={selected === 2}>2</div>
		<div class="description desktop">
			<p class="caption">Step 2</p>
			<p class="name">Selected plan</p>
		</div>
	</div>
	<div class="stepCard">
		<div class="step" class:selected={selected === 3}>3</div>
		<div class="description desktop">
			<p class="caption">Step 3</p>
			<p class="name">Add-ons</p>
		</div>
	</div>
	<div class="stepCard">
		<div class="step" class:selected={selected === 4}>4</div>
		<div class="description desktop">
			<p class="caption">Step 4</p>
			<p class="name">Summary</p>
		</div>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
		align-content: center;
		gap: 1rem;
	}

	.step {
		color: var(--clr-text-light);
		border: 1px solid var(--clr-text-light);
		padding: 0.25em 0.5em;
		margin: auto;
		aspect-ratio: 1;
		border-radius: 100%;
		font-weight: 500;
		transition: all 300ms ease-out;
	}

	.step.selected {
		background-color: var(--clr-step);
		border-color: var(--clr-step);
		color: var(--clr-text);
	}

	.stepCard {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.description {
		text-transform: uppercase;
	}

	.description > p {
		margin: 0;
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--clr-text-light);
	}

	p.caption {
		font-size: 0.65rem;
		color: var(--clr-text-shaded);
		margin-bottom: 0.1rem;
	}

	.desktop {
		display: none;
	}

	@media (width >= 700px) {
		.desktop {
			display: block;
		}

		header {
			flex-direction: column;
			justify-content: start;
			align-items: center;
			padding: 2rem;
		}

		.step {
			margin: 0;
		}
	}
</style>
