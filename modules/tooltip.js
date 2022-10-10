export default class Tooltip {
	constructor(tooltips) {
		this.tooltips = document.querySelectorAll(tooltips)

		this.onMouseMove = this.onMouseMove.bind(this)
		this.onMouseLeave = this.onMouseLeave.bind(this)
		this.onMouseOver = this.onMouseOver.bind(this)
	}

	onMouseOver({ currentTarget }) {
		this.createToolTipBox(currentTarget)

		currentTarget.addEventListener('mousemove', this.onMouseMove)
		currentTarget.addEventListener('mouseleave', this.onMouseLeave)
	}

	onMouseLeave({ currentTarget }) {
		this.tooltipBox.remove()
		currentTarget.removeEventListener('mouseleave', this.onMouseLeave)
		currentTarget.removeEventListener('mousemove', this.onMouseMove)
	}

	onMouseMove(event) {
		// function called handleEvent inside object runs as function to an eventListener like a normal function
		this.tooltipBox.style.top = `${event.pageY + 20}px` // add 20px on top to make tooltip not be under the mouse and run the mouseLeave function

		if (event.pageX + 240 > window.innerWidth)
			this.tooltipBox.style.left = `${event.pageX - 150}px`
		else this.tooltipBox.style.left = `${event.pageX}px`
	}

	addTooltipEvents() {
		this.tooltips.forEach((item) => {
			item.addEventListener('mouseover', this.onMouseOver)
		})
	}

	createToolTipBox(element) {
		const tooltipBox = document.createElement('div')
		const text = element.getAttribute('aria-label')

		tooltipBox.classList.add('tooltip')
		tooltipBox.innerText = text

		document.body.appendChild(tooltipBox)

		this.tooltipBox = tooltipBox
	}

	init() {
		if (this.tooltips.length) this.addTooltipEvents()
		return this
	}
}
