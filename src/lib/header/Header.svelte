<script lang="ts">
	import ThemeToggle from '$lib/theme/ThemeToggle.svelte'
	import Logo from '$graphics/Logo.svelte'
	import Hamburger from 'svelte-hamburgers'
	import { mobile } from '$stores/mobile'
	import Nav from './Nav.svelte'
</script>

<template lang="pug">

	header.flex
		a.logo(href="/")
			Logo

		+if('$mobile')
			Hamburger(--color="var(--dark-a)")

			+else
				Nav

				.switch
					ThemeToggle

</template>

<style lang="scss">
	@use 'styles/vendor/rfs';

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 0.75rem 1.5rem 0 0.85rem;

		font-family: 'Rubik';
		font-variation-settings: 'wght' 100;

		.logo {
			flex: 1;

			max-width: 35px;
		}

		.switch {
			flex: 1;

			max-width: 120px;
		}
	}
</style>
