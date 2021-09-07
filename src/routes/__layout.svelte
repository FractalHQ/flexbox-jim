<script>
	import { initTheme, applyTheme } from '$lib/theme/themeManager'
	import { theme } from '$lib/theme/theme'
	import '../styles/global.scss'
	import { onMount } from 'svelte'
	import '../app.css'

	onMount(() => {
		initTheme()
		applyTheme('light')
	})
</script>

<template lang="pug">

	svelte:head
		link(rel="preconnect" href="https://fonts.googleapis.com")
		link(rel="preconnect" href="https://fonts.gstatic.com" crossorigin)
		link(href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap" rel="stylesheet")


</template>

<slot />
