<script>
	import Github from '$lib/graphics/icons/Github.svelte'
	import Vercel from '$lib/graphics/Vercel.svelte'
	import Logo from '$lib/graphics/Logo.svelte'
	import { mobile } from '$lib/stores/mobile'
</script>

<template lang="pug">

	footer
		.code
			a.github(href='https://github.com/fractalhq/club')
				Github
			Vercel

		.links
				.row(style='justify-content: center; gap: 8px;')
					a(href='/privacy') Privacy
					| |
					a(href='/terms') Terms

				.copyright FlexBox Jim

</template>

<style lang="scss">
	@import 'styles/vendor/media';

	footer {
		display: flex;

		align-items: center;
		justify-content: space-between;

		width: 100%;

		padding: 18px 32px;

		@include media('<=md') {
			flex-direction: column-reverse;
			gap: 16px;
		}

		.code {
			display: flex;
			align-items: center;

			grid-area: code;
			justify-self: start;
			gap: 16px;

			.github {
				width: 100%;

				max-width: 32px;
				height: auto;
			}
		}

		.links {
			display: flex;
			flex-direction: column;

			justify-content: center;
			justify-self: end;
			grid-area: links;
			gap: 8px;

			color: var(--dark-c);

			.copyright {
				color: var(--light-d);
			}

			@include media('<=md') {
				gap: 12px;
			}
		}
	}
</style>
