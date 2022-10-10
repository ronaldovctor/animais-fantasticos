import TabNav from '../modules/tab-nav.js'
import Accordion from '../modules/accordion.js'
import ScrollToSection from '../modules/scroll-to-section.js'
import initScrollAnimation from '../modules/scroll-animation.js'
import Modal from '../modules/modal.js'
import Tooltip from '../modules/tooltip.js'
import initDropdownMenu from '../modules/dropdown-menu.js'
import initMenuMobile from '../modules/menu-mobile.js'
import initFuncionamento from '../modules/funcionamento.js'
import initFetchAnimais from '../modules/fetch-animais.js'
import initFetchBitcoin from '../modules/fetch-bitcoin.js'

window.addEventListener('load', () => {
	const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section')
	tabNav.init()

	const scrollToSection = new ScrollToSection('.js .menu a[href^="#"]')
	scrollToSection.init()

	const accordion = new Accordion('[data-anime="accordion"] dt')
	accordion.init()

	initScrollAnimation()

	const modal = new Modal(
		'[data-modal="open"]',
		'[data-modal="close"]',
		'[data-modal="container"]'
	)
	modal.init()

	const tooltip = new Tooltip('[data-tooltip]')
	tooltip.init()

	initDropdownMenu()
	initMenuMobile()
	initFuncionamento()
	initFetchAnimais()
	initFetchBitcoin()
})

window.addEventListener('scroll', initScrollAnimation)
