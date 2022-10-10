import TabNav from '../modules/tab-nav.js'
import Accordion from '../modules/accordion.js'
import ScrollToSection from '../modules/scroll-to-section.js'
import ScrollAnimation from '../modules/scroll-animation.js'
import Modal from '../modules/modal.js'
import Tooltip from '../modules/tooltip.js'
import DropdownMenu from '../modules/dropdown-menu.js'
import MenuMobile from '../modules/menu-mobile.js'
import Funcionamento from '../modules/funcionamento.js'
import initFetchAnimais from '../modules/fetch-animais.js'
import initFetchBitcoin from '../modules/fetch-bitcoin.js'

window.addEventListener('load', () => {
	const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section')
	tabNav.init()

	const scrollToSection = new ScrollToSection('.js .menu a[href^="#"]')
	scrollToSection.init()

	const accordion = new Accordion('[data-anime="accordion"] dt')
	accordion.init()

	const scrollAnima = new ScrollAnimation('[data-anime="scroll"]')
	scrollAnima.init()

	const modal = new Modal(
		'[data-modal="open"]',
		'[data-modal="close"]',
		'[data-modal="container"]'
	)
	modal.init()

	const tooltip = new Tooltip('[data-tooltip]')
	tooltip.init()

	const dropdownMenu = new DropdownMenu('[data-dropdown]')
	dropdownMenu.init()

	const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]')
	menuMobile.init()

	const funcionamento = new Funcionamento('[data-semana]')
	funcionamento.init()

	initFetchAnimais('./animaisapi.json', '.numeros-grid')

	initFetchBitcoin('https://blockchain.info/ticker', '[data-bitcoin="preco"]')
})
