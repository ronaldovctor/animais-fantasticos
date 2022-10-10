export default class Accordion {
	constructor(list) {
		this.accordionList = document.querySelectorAll(list)
	}

	toggleAccordion() {
		this.classList.toggle('active')
		this.nextElementSibling.classList.toggle('active')
	}

	addAccordionEvent() {
		this.accordionList.forEach((item) => {
			item.addEventListener('click', this.toggleAccordion)
		})
	}

	init() {
		if (this.accordionList.length) {
			this.addAccordionEvent()
		}
		return this
	}
}
