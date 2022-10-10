import outsideClick from './outsideclick.js'

export default class MenuMobile {
	constructor(menuButton, menuList, events) {
		this.menuButton = document.querySelector(menuButton)
		this.menuList = document.querySelector(menuList)
		this.events = events || ['touchstart', 'click']

		this.openMenu = this.openMenu.bind(this)
	}

	addMenuMobileEvent() {
		this.events.forEach((evt) => this.menuButton.addEventListener(evt, this.openMenu))
	}

	openMenu() {
		this.menuList.classList.add('active')
		this.menuButton.classList.add('active')
		outsideClick(this.menuList, this.events, () => {
			this.menuList.classList.remove('active')
			this.menuButton.classList.remove('active')
		})
	}

	init() {
		this.menuButton && this.menuList && this.events && this.addMenuMobileEvent()
		return this
	}
}
