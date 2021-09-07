import { dev } from '$app/env'

/**
 *  Debug logger with optional theming.  Dev env only.
 *
 * @param msg - A message to log (objects are logged without theming)
 * @param color - Any CSS ( named | hex | rgb | hsl ) color value
 * @param fontSize - Any number
 * @param bgColor - Same as {@link color}
 * @param css - Optional additional CSS
 *
 * @remarks
 * The dev variable inherits the sveltekit {@link https://kit.svelte.dev/docs#modules-$app-env | $app/env} variable.
 *
 */

class Logger {
	static log(msg: string | unknown, color = 'lightblue', fontSize = 15, bgColor = 'transparent'): void {
		dev
			? typeof msg === 'string'
				? console.log(`%c${msg}`, `size:${fontSize}px;color:${color};background: ${bgColor};border:1px solid ${color};padding:5px;`)
				: console.log(msg)
			: null
	}
}

export default Logger
