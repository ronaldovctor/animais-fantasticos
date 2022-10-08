export default function initModal() {
	const botaoAbrir = document.querySelector('[data-modal="open"]')
	const botaoFechar = document.querySelector('[data-modal="close"]')
	const containerModal = document.querySelector('[data-modal="container"]')

	botaoAbrir.addEventListener('click', toggleModal)
	botaoFechar.addEventListener('click', toggleModal)
	containerModal.addEventListener('click', clickOutModal)

	function toggleModal(event) {
		event.preventDefault()
		containerModal.classList.toggle('active')
	}

	function clickOutModal(event) {
		event.target === this && toggleModal(event)
	}
}
