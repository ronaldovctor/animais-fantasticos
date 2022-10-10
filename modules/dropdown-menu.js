import outsideClick from './outsideclick.js'

export default class DropdownMenu {
	constructor(dropdownsMenus, events) {
		this.dropdownMenus = document.querySelectorAll(dropdownsMenus)

		this.events = events || ['touchstart', 'click']
		this.handleClick = this.handleClick.bind(this)
	}

	addDropdownMenuEvent() {
		this.dropdownMenus.forEach((menu) => {
			this.events.forEach((userEvent) => {
				menu.addEventListener(userEvent, this.handleClick)
			})
		})
	}

	handleClick(event) {
		event.preventDefault()
		const element = event.currentTarget
		element.classList.add('active')
		outsideClick(element, this.events, () => {
			element.classList.remove('active')
		})
	}

	init() {
		this.dropdownMenus.length && this.addDropdownMenuEvent()
		return this
	}
}
