<script>
	import JimsWorld from '$lib/JimsWorld.svelte'
	import Editor from '$lib/Editor.svelte'
	import { code } from '$lib/stores/code'
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
		padding-top: 2rem;

		font-family: var(--font-secondary);
		font-size: 3rem;

		text-transform: uppercase;
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
