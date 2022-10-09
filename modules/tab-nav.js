export default class TabNav {
	constructor(menu, content) {
		this.tabMenu = document.querySelectorAll(menu)
		this.tabContent = document.querySelectorAll(content)
	}

	activeTab(index) {
		this.cleanTab()
		const direction = this.tabContent[index].dataset.anime
		this.tabContent[index].classList.add('active', direction)
	}

	cleanTab() {
		this.tabContent.forEach((section) => {
			section.classList.remove('active')
		})
	}

	addTabNavEvent() {
		this.tabMenu.forEach((item, index) => {
			item.addEventListener('click', () => this.activeTab(index))
		})
	}

	init() {
		if (this.menu) this.addTabNavEvent()
	}
}
