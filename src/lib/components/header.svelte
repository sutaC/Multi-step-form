<script lang="ts">
	export let selected: number = 1;

	$: if (selected < 1 || selected > 4) throw new Error(`Selected out of bounds: ${selected}`);
</script>

<header>
	<div class="step" class:selected={selected === 1}>1</div>
	<div class="step" class:selected={selected === 2}>2</div>
	<div class="step" class:selected={selected === 3}>3</div>
	<div class="step" class:selected={selected === 4}>4</div>
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
		aspect-ratio: 1;
		border-radius: 100%;
		font-weight: 500;
	}

	.step.selected {
		background-color: var(--clr-step);
		border-color: var(--clr-step);
		color: var(--clr-text);
	}
</style>
