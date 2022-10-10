export default class Modal {
	constructor(botaoAbrir, botaoFechar, containerModal) {
		this.botaoAbrir = document.querySelector(botaoAbrir)
		this.botaoFechar = document.querySelector(botaoFechar)
		this.containerModal = document.querySelector(containerModal)

		this.eventToggleModal = this.eventToggleModal.bind(this)
		this.clickOutModal = this.clickOutModal.bind(this)
	}

	addModalEvents() {
		this.botaoAbrir.addEventListener('click', this.eventToggleModal)
		this.botaoFechar.addEventListener('click', this.eventToggleModal)
		this.containerModal.addEventListener('click', this.clickOutModal)
	}

	toggleModal() {
		this.containerModal.classList.toggle('active')
	}

	eventToggleModal(event) {
		event.preventDefault()
		this.toggleModal()
	}

	clickOutModal(event) {
		event.target === this.containerModal && this.eventToggleModal(event)
	}

	init() {
		if (this.botaoAbrir && this.botaoFechar && this.containerModal)
			this.addModalEvents()
		return this
	}
}
