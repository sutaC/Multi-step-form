<script lang="ts">
	export let btnStyle: 'default' | 'confirm' = 'default';
</script>

<footer>
	{#if btnStyle === 'default'}
		<button on:click class="deafult">Next step</button>
	{:else if btnStyle === 'confirm'}
		<button on:click class="confirm">Confirm</button>
	{/if}
</footer>

<style>
	footer {
		width: 100%;
		background-color: var(--clr-main-bg);
		position: fixed;
		left: 0;
		bottom: 0;
		text-align: right;
		padding: 1rem;
	}

	button.deafult {
		--_bg: var(--clr-text);
	}

	button.confirm {
		--_bg: var(--clr-highlight);
	}

	button {
		padding: 1em;
		border: none;
		border-radius: 0.25rem;
		background-color: var(--_bg, var(--clr-text));
		color: var(--clr-text-light);
		font-size: 0.9rem;
	}

	button:hover,
	button:focus {
		background-color: color-mix(in srgb, var(--_bg) 100%, var(--clr-base) 20%);
	}
</style>
