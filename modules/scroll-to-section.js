export default class ScrollToSection {
	constructor(links, options) {
		this.internalLinks = document.querySelectorAll(links)
		if (!options) this.options = { behavior: 'smooth', block: 'start' }
		else this.options = options

		this.scrollToSection = this.scrollToSection.bind(this)
	}

	scrollToSection(event) {
		event.preventDefault()
		const href = event.currentTarget.getAttribute('href')
		const section = document.querySelector(href)

		// window.scrollTo({
		// 	top: section.offsetTop.accordionList,
		// 	behavior: 'smooth',
		// })

		// alternative
		section.scrollIntoView(this.options)
	}

	addScrollToSectionEvent() {
		this.internalLinks.forEach((link) => {
			link.addEventListener('click', (event) => {
				this.scrollToSection(event)
			})
		})
	}

	init() {
		if (this.internalLinks.length) this.addScrollToSectionEvent()
		return this
	}
}
