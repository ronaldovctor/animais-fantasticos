import outsideClick from './outsideclick.js'

export default function initDropdownMenu() {
	const dropdownMenus = document.querySelectorAll('[data-dropdown]')

	dropdownMenus.forEach((menu) => {
		const events = ['touchstart', 'click']
		events.forEach((userEvent) => {
			menu.addEventListener(userEvent, handleClick)
		})
	})

	function handleClick(event) {
		event.preventDefault()
		this.classList.add('active')
		outsideClick(this, ['touchstart', 'click'], () => {
			this.classList.remove('active')
		})
	}
}
