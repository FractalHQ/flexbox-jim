<script>
	import AngryJim from '$lib/jims/AngryJim.svelte'
	import LoveJim from '$lib/jims/LoveJim.svelte'
	import SadJim from '$lib/jims/SadJim.svelte'
	import { code } from './stores/code'

	const jims = [
		{ jim: SadJim, state: 'unhappy' },
		{ jim: LoveJim, state: 'happy' },
		{ jim: AngryJim, state: 'angry' }
	]
	let level = 0

	$: success = $code.includes(stages[level].answer)

	$: activeJim = success ? 1 : 0

	const stages = [
		{
			portals: 1,
			answer: ['justify-content: flex-end'],
			defaults: []
		}
	]

	const portals = [stages[level].portals]
</script>

<template lang="pug">

	.stage
		.jim-container.container(style="{$code}")
			.jim-wrapper.wrapper
				.jim
					+key('success')
						svelte:component(this='{jims[activeJim].jim}')
		.portal-container.container(style='{stages[level].answer.toString()}')
			+each('portals as portal')
				.portal-wrapper.wrapper
					.portal

</template>

<style lang="scss">
	* {
		transition: 0.2s;
	}
	.stage {
		--stage-size: 800px;
		--jim-wrapper-size: 100%;
		--cell-size: 8em;
		--jim-size: 6em;
		--padding: 2rem;
		display: flex;
		position: relative;

		min-width: var(--stage-size);
		max-width: var(--stage-size);

		min-height: var(--stage-size);
		max-height: var(--stage-size);

		border: 5px solid rgba(var(--light-a-rgb), 0.75);
	}
	.stage,
	.jim-container,
	.jim-wrapper {
		display: flex;

		color: var(--dark-a) !important;
		border-radius: 1rem;
	}

	.portal-container {
		width: 100%;
		padding: var(--padding);
	}

	.container {
		position: absolute;
		display: flex;

		padding: var(--padding);

		inset: 0;

		.wrapper {
			align-items: center;
			justify-content: center;

			width: var(--cell-size);
			height: var(--cell-size);

			.portal,
			.jim-wrapper {
				width: var(--cell-size);
				height: var(--cell-size);

				border: 3px solid var(--light-a);

				border-radius: 100%;
			}

			.jim {
				position: absolute;
				z-index: 10;

				width: var(--jim-size);
			}
		}
	}
</style>
