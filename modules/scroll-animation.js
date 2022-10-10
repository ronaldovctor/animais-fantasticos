import debounce from './debounce'

export default class ScrollAnimation {
	constructor(sections) {
		this.sections = document.querySelectorAll(sections)
		this.windowHeight = window.innerHeight * 0.65

		this.checkDistance = debounce(this.checkDistance.bind(this), 100)
	}

	static animaScroll(element) {
		element.classList.add('active')
	}

	static removeAnimaScroll(element) {
		if (element.classList.contains('active')) element.classList.remove('active')
	}

	getDistance() {
		this.distance = [...this.sections].map((item) => {
			const offset = Math.floor(item.offsetTop - this.windowHeight)
			return {
				element: item,
				offset,
			}
		})
	}

	checkDistance() {
		this.distance.forEach((item) => {
			window.scrollY > item.offset
				? this.constructor.animaScroll(item.element)
				: this.constructor.removeAnimaScroll(item.element)
		})
	}

	init() {
		if (this.sections.length) {
			this.getDistance()
			this.checkDistance()
			window.addEventListener('scroll', this.checkDistance)
		}
		return this
	}

	stop() {
		window.removeEventListener('scroll', this.checkDistance)
	}
}
