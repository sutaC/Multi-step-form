<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let btnStyle: 'default' | 'confirm' = 'default';
	export let btnBefore = true;

	const dispach = createEventDispatcher();
</script>

<footer>
	<button class="back" class:hidden={!btnBefore} on:click={() => dispach('back')} type="button"
		>Go back</button
	>
	<button class="next {btnStyle}" on:click={() => dispach('next')} type="button"
		>{btnStyle === 'default' ? 'Next step' : 'Confirm'}</button
	>
</footer>

<style>
	footer {
		width: 100%;
		background-color: var(--clr-base);
		position: fixed;
		left: 0;
		bottom: 0;
		text-align: right;
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	footer:has(.hidden) {
		justify-content: end;
	}

	button {
		padding: 1em;
		font-weight: 500;
		font-size: 0.9rem;
		border: none;
		cursor: pointer;
		transition: all 150ms ease-out;
	}

	button.next.deafult {
		--_bg: var(--clr-text);
	}

	button.next.confirm {
		--_bg: var(--clr-highlight);
	}

	button.next {
		border-radius: 0.25rem;
		background-color: var(--_bg, var(--clr-text));
		color: var(--clr-text-light);
		align-self: end;
	}

	button.next:hover,
	button.next:focus {
		background-color: color-mix(in srgb, var(--_bg, var(--clr-text)) 100%, var(--clr-base) 20%);
	}

	button.back {
		background-color: transparent;
		color: var(--clr-text-shaded);
		font-weight: 500;
	}

	button.back:hover,
	button.back:focus {
		color: var(--clr-text);
	}

	.hidden {
		display: none;
	}

	@media (width >= 700px) {
		footer {
			position: relative;
		}
	}
</style>
