import outsideClick from './outsideclick.js'

export default function initMenuMobile() {
	const menuButton = document.querySelector('[data-menu="button"]')
	const menuList = document.querySelector('[data-menu="list"]')
	const events = ['touchstart', 'click']

	events.forEach((evt) => menuButton.addEventListener(evt, openMenu))

	function openMenu() {
		menuList.classList.add('active')
		menuButton.classList.add('active')
		outsideClick(menuList, events, () => {
			menuList.classList.remove('active')
			menuButton.classList.remove('active')
		})
	}
}
