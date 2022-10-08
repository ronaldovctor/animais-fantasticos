export default function initScroolToSection() {
	const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]')

	function scrollToSection(event) {
		event.preventDefaul()
		const href = event.currentTarget.getAttribute('href')
		const section = document.querySelector(href)

		// window.scrollTo({
		// 	top: section.offsetTop.accordionList,
		// 	behavior: 'smooth',
		// })

		// alternative
		section.scrollinToView({
			behavior: 'smooth',
			block: 'start',
		})
	}

	internalLinks.forEach((link) => {
		link.addEventListener('click', scrollToSection)
	})
}
