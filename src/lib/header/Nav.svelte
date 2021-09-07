<script lang="ts">
	import OnMount from '$utils/OnMount.svelte'
	import { quintOut } from 'svelte/easing'
	import { fly } from 'svelte/transition'
	import { page } from '$app/stores'
</script>

<template lang="pug">

	OnMount
		nav
			ul
				li
					a(
						href='/repl'
						sveltekit:prefetch
						class:active!='{$page.path === "/repl"}'
						in:fly='{{ x: -30, delay: 100, duration: 1250, easing: quintOut }}'
					) REPL

				.dot(
					class:active!='{$page.path === "/"}'
					in:fly='{{ y: -50, delay: 0, duration: 1500, easing: quintOut }}'
				) ·

				li
					a(
						href="/hub"
						sveltekit:prefetch
						class:active!='{$page.path === "/hub"}'
						in:fly='{{ x: 10, delay: 200, duration: 1250, easing: quintOut }}'
					) Hub

</template>

<style lang="scss">
	nav {
		display: flex;
		position: absolute;
		top: 0;
		right: 0;
		left: 0;

		justify-content: center;

		width: max-content;
		height: 4rem;
		margin: 0 auto;

		transform: translateX(max(-3vw, -7%));

		pointer-events: all;
	}

	ul {
		display: flex;
		position: relative;

		z-index: 50;
		align-items: center;
		justify-content: center;

		margin: 0;
		padding: 0;
	}

	li {
		position: relative;

		height: 100%;

		list-style: none;

		a {
			display: flex;
			align-items: center;

			height: 100%;
			padding: 0 1em;

			font-weight: 500;
			font-size: 1.5rem;
			letter-spacing: 10%;
			text-decoration: none;
			text-transform: uppercase;

			&:hover {
				color: var(--brand-a) !important;
			}
		}
	}

	.dot {
		font-size: 1.5rem;

		color: var(--dark-d);

		cursor: default;
		user-select: none;
	}

	.active {
		color: var(--brand-a);
	}
</style>
