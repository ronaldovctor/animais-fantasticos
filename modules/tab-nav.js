export function initTabNav() {
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
