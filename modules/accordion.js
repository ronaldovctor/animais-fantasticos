export default function initAccordion() {
	function activeAccordion() {
		this.classList.toggle('active')
		this.nextElementSibling.classList.toggle('active')
	}

	const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')
	accordionList.forEach((item) => {
		item.addEventListener('click', activeAccordion)
	})
}
