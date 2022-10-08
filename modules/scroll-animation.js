export default function initScrollAnimation() {
	const sections = document.querySelectorAll('[data-anime="scroll"]')

	function animaScroll(element) {
		element.classList.add('active')
	}

	function removeAnima(element) {
		if (element.classList.contains('active')) element.classList.remove('active')
	}

	sections.forEach((section) => {
		const windowHeight = window.innerHeight * 0.65
		const sectionTop = section.getBoundingClientRect().top
		sectionTop < windowHeight ? animaScroll(section) : removeAnima(section)
	})
}
