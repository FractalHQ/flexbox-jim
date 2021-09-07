<script>
	import JimsWorld from '$lib/JimsWorld.svelte'
	import Editor from '$lib/Editor.svelte'
	import { onMount } from 'svelte'
</script>

<template lang="pug">

	h1 flexbox Jim

	.container
		Editor
		JimsWorld

</template>

<!-- REPL -->
<style lang="scss">
	h1 {
		font-size: 2em;

		text-transform: uppercase;
		font-family: var(--font-secondary);
	}

	.container {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;

		width: 100%;
		height: 100%;
	}
</style>
