export default class ScrollAnimation {
	constructor(sections) {
		this.sections = document.querySelectorAll(sections)
		this.windowHeight = window.innerHeight * 0.65

		this.addAnimaScroll = this.addAnimaScroll.bind(this)
	}

	static animaScroll(element) {
		element.classList.add('active')
	}

	static removeAnimaScroll(element) {
		if (element.classList.contains('active')) element.classList.remove('active')
	}

	addAnimaScroll() {
		this.sections.forEach((section) => {
			const sectionTop = section.getBoundingClientRect().top
			sectionTop < this.windowHeight
				? this.constructor.animaScroll(section)
				: this.constructor.removeAnimaScroll(section)
		})
	}

	init() {
		if (this.sections.length) {
			this.addAnimaScroll()
			window.addEventListener('scroll', this.addAnimaScroll)
		}
		return this
	}
}
