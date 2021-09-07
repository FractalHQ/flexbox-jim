<script>
	import AngryJim from './jims/AngryJim.svelte'
	import { code } from './stores/code'

	const jims = [{ jim: AngryJim, state: 'unhappy' }]
	let activeJim = 0

	const places = []
	const happyPlaces = [0, 1, 2]
</script>

<template lang="pug">

	.jims-world
		.jim
			svelte:component(this='{jims[activeJim].jim}')
		+each('happyPlaces as place')
			.place

</template>

<style lang="scss">
	.jims-world {
		display: flex;

		width: 800px;
		height: 500px;

		padding: 2rem;

		font-family: var(--font-secondary);

		color: var(--dark-a) !important;

		border-radius: 1rem;

		background: rgba(var(--light-a-rgb), 0.75);
	}

	.jim {
		width: 15%;
	}

	:global(.cm-focused) {
		outline: none !important;
	}
</style>
