function initTabNav() {
	const tabMenu = document.querySelectorAll('.js-tabmenu li')
	const tabContent = document.querySelectorAll('.js-tabcontent section')

	function activeTab(index) {
		cleanTab()
		tabContent[index].classList.add('active')
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
	const accordionList = document.querySelectorAll('.js-accordion dt')
	accordionList.forEach((item) => {
		item.addEventListener('click', activeAccordion)
	})

	function activeAccordion() {
		this.classList.toggle('active')
		this.nextElementSibling.classList.toggle('active')
	}
}

window.addEventListener('load', () => {
	initTabNav()
	initAccordion()
})
