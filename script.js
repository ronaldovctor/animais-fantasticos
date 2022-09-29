function initTabNav() {
	const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
	const tabContent = document.querySelectorAll('[data-tab="content"] section')

	function activeTab(index) {
		cleanTab()
		const direction = tabContent[index].dataset.anime
		tabContent[index].classList.add('active', direction)
	}

	function cleanTab() {
		tabContent.forEach((section) => {
			section.classList.remove('active')
		})
	}

	tabMenu.forEach((item, index) => {
		item.addEventListener('click', () => activeTab(index))
	})
}

function initAccordion() {
	const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')
	accordionList.forEach((item) => {
		item.addEventListener('click', activeAccordion)
	})

	function activeAccordion() {
		this.classList.toggle('active')
		this.nextElementSibling.classList.toggle('active')
	}
}

function initScroolToSection() {
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

function initScrollAnimation() {
	const sections = document.querySelectorAll('[data-anime="scroll"]')

	function animaScroll(element) {
		element.classList.add('active')
	}

	sections.forEach((section) => {
		const windowHeight = window.innerHeight * 0.65
		const sectionTop = section.getBoundingClientRect().top
		sectionTop < windowHeight && animaScroll(section)
	})
}

window.addEventListener('load', () => {
	initTabNav()
	initAccordion()
	initScroolToSection()
	initScrollAnimation()
})

window.addEventListener('scroll', initScrollAnimation)
