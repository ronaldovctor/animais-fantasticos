export default function initTooltip() {
	const tooltips = document.querySelectorAll('[data-tooltip]')

	tooltips.forEach((item) => {
		item.addEventListener('mouseover', onMouseOver)
	})

	function onMouseOver(event) {
		const tooltipBox = createToolTipBox(this)
		tooltipBox.style.top = `${event.pageY}px`
		tooltipBox.style.left = `${event.pageX}px`

		onMouseLeave.tooltipBox = tooltipBox
		this.addEventListener('mousemove', onMouseMove)

		onMouseMove.tooltipBox = tooltipBox
		onMouseLeave.element = this
		this.addEventListener('mouseleave', onMouseLeave)
	}

	const onMouseLeave = {
		handleEvent() {
			this.tooltipBox.remove()
			this.element.removeEventListener('mouseleave', onMouseLeave)
			this.element.removeEventListener('mousemove', onMouseMove)
		},
	}

	const onMouseMove = {
		handleEvent(event) {
			// function called handleEvent inside object runs as function to an eventListener like a normal function
			this.tooltipBox.style.top = `${event.pageY + 20}px` // add 20px on top to make tooltip not be under the mouse and run the mouseLeave function
			this.tooltipBox.style.left = `${event.pageX}px`
		},
	}

	function createToolTipBox(element) {
		const tooltipBox = document.createElement('div')
		const text = element.getAttribute('aria-label')

		tooltipBox.classList.add('tooltip')
		tooltipBox.innerText = text

		document.body.appendChild(tooltipBox)

		return tooltipBox
	}
}
