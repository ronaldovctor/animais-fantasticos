import initTabNav from '../modules/tab-nav.js'
import Accordion from '../modules/accordion.js'
import ScrollToSection from '../modules/scroll-to-section.js'
import initScrollAnimation from '../modules/scroll-animation.js'
import initModal from '../modules/modal.js'
import initTooltip from '../modules/tooltip.js'
import initDropdownMenu from '../modules/dropdown-menu.js'
import initMenuMobile from '../modules/menu-mobile.js'
import initFuncionamento from '../modules/funcionamento.js'
import initFetchAnimais from '../modules/fetch-animais.js'
import initFetchBitcoin from '../modules/fetch-bitcoin.js'

window.addEventListener('load', () => {
	initTabNav()

	const scrollToSection = new ScrollToSection('.js .menu a[href^="#"]')
	scrollToSection.init()

	const accordion = new Accordion('[data-anime="accordion"] dt')
	accordion.init()

	initScrollAnimation()
	initModal()
	initTooltip()
	initDropdownMenu()
	initMenuMobile()
	initFuncionamento()
	initFetchAnimais()
	initFetchBitcoin()
})

window.addEventListener('scroll', initScrollAnimation)
