<script>
	import { highlightSpecialChars, drawSelection, highlightActiveLine, keymap } from '@codemirror/view'
	import { EditorView } from '@codemirror/view'
	import { EditorState } from '@codemirror/state'
	import { history, historyKeymap } from '@codemirror/history'
	import { foldGutter, foldKeymap } from '@codemirror/fold'
	import { indentOnInput } from '@codemirror/language'
	import { lineNumbers, highlightActiveLineGutter } from '@codemirror/gutter'
	import { defaultKeymap, indentWithTab } from '@codemirror/commands'
	import { bracketMatching } from '@codemirror/matchbrackets'
	import { closeBrackets, closeBracketsKeymap } from '@codemirror/closebrackets'
	import { highlightSelectionMatches, searchKeymap } from '@codemirror/search'
	import { autocompletion, completionKeymap } from '@codemirror/autocomplete'
	import { commentKeymap } from '@codemirror/comment'
	import { rectangularSelection } from '@codemirror/rectangular-selection'
	import { defaultHighlightStyle } from '@codemirror/highlight'
	import { lintKeymap } from '@codemirror/lint'
	import { css } from '@codemirror/lang-css'
	import { onMount } from 'svelte'
	import { code } from './stores/code'

	const config = [
		// lineNumbers(),
		// highlightActiveLineGutter(),
		highlightSpecialChars(),
		history(),
		// foldGutter(),
		drawSelection(),
		EditorState.allowMultipleSelections.of(true),
		indentOnInput(),
		defaultHighlightStyle.extension,
		// bracketMatching(),
		closeBrackets(),
		autocompletion(),
		// rectangularSelection(),
		// highlightActiveLine(),
		highlightSelectionMatches(),
		keymap.of([
			indentWithTab,
			...closeBracketsKeymap,
			...defaultKeymap,
			...searchKeymap,
			...historyKeymap,
			...foldKeymap,
			...commentKeymap,
			...completionKeymap,
			...lintKeymap
		])
	]

	let editor, parent

	onMount(() => {
		editor = new EditorView({
			state: EditorState.create({
				doc: `display: flex;\n`,
				extensions: [
					config,
					css(),
					EditorView.updateListener.of((e) => {
						if (e.docChanged) {
							console.log(e)
							$code = e.state.doc.toString().replace('display: flex;\n', '')
						}
					})
				]
			}),
			parent
		})
	})
</script>

<template lang="pug">

	.card(bind:this='{parent}')
		h2 Jim wants to go to his happy place

</template>

<style lang="scss">
	.card {
		max-width: 800px;
		height: max-content;

		padding: 2rem;

		border-radius: 1rem;

		background: rgba(var(--light-a-rgb), 0.75);
		color: var(--dark-a) !important;

		& h2 {
			text-align: center;
			font-size: 1.5rem;
			font-family: var(--font-secondary);
		}
	}

	:global(.cm-focused) {
		outline: none !important;
	}
</style>
