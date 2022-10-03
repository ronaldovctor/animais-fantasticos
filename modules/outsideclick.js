export function outsideClick(element, events, callback) {
	const html = document.documentElement
	const outside = 'data-outside'

	if (!element.hasAttribute(outside)) {
		events.forEach((userEvent) => {
			setTimeout(() => html.addEventListener(userEvent, handleOutsideClick), 0)
			// due the bubble behavior this eventListener does not occur instantly, preventing the menu to be closed even before the user see it
		})
		element.setAttribute(outside, '')
	}

	function handleOutsideClick(event) {
		console.log('outside event...')
		if (!element.contains(event.target)) {
			events.forEach((userEvent) => {
				html.removeEventListener(userEvent, handleOutsideClick)
			})
			element.removeAttribute(outside)
			callback()
		}
	}
}
