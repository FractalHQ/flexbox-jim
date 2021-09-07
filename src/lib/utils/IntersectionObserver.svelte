<script lang="ts">
	type Entry = null | IntersectionObserverEntry

	/**
	 * @typedef {null | IntersectionObserverEntry} Entry
	 * @event {Entry} observe
	 * @event {Entry} intersect
	 * @slot {{ intersecting: boolean; entry: Entry; observer: IntersectionObserver }}
	 */

	/**
	 * The HTML Element to observe
	 */
	export let element: HTMLElement | null = null

	/**
	 * Set to `true` to unobserve the element after it intersects the viewport
	 */
	export let once = false

	/**
	 * Containing element
	 * Defaults to the browser viewport
	 */
	export let root: HTMLElement | null = null

	/** Margin offset of the containing element */
	export let rootMargin = '0px'

	/**
	 * Percentage of element visibility to trigger an event
	 * Value must be between 0 and 1
	 */
	export let threshold = 0

	export let entry: Entry | null = null

	/**
	 * `true` is the observed element is intersecting the element
	 */
	export let intersecting = false

	export let observer: IntersectionObserver | null = null

	import { tick, createEventDispatcher, afterUpdate, onMount } from 'svelte'
	const dispatch = createEventDispatcher()
	let prevRootMargin: string | null = null
	let prevElement: HTMLElement | null = null

	const init = () => {
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((_entry) => {
					entry = _entry
					intersecting = _entry.isIntersecting
				})
			},
			{ root, rootMargin, threshold }
		)
	}

	onMount(() => {
		init()
		return () => {
			if (observer) observer.disconnect()
		}
	})

	afterUpdate(async () => {
		if (entry !== null) {
			dispatch('observe', entry)
			if (entry.isIntersecting) {
				dispatch('intersect', entry)
				if (once) observer?.unobserve(element as Element)
			}
		}
		await tick()
		if (element !== null && element !== prevElement) {
			observer?.observe(element)
			if (prevElement !== null) observer?.unobserve(prevElement)
			prevElement = element
		}
		if (prevRootMargin && rootMargin !== prevRootMargin) {
			observer?.disconnect()
			prevElement = null
			init()
		}
		prevRootMargin = rootMargin
	})
</script>

<!-- <pre>
	element: {JSON.stringify(element)}
	intersecting: {JSON.stringify(intersecting)}
	entry: {JSON.stringify(entry)}
	observer: {JSON.stringify(observer)}
</pre> -->
<slot {intersecting} {entry} {observer} />
