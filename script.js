import { initTabNav } from './modules/tab-nav.js'
import { initAccordion } from './modules/accordion.js'
import { initScroolToSection } from './modules/scroll-to-section.js'
import { initScrollAnimation } from './modules/scroll-animation.js'
import { initModal } from './modules/modal.js'
import { initTooltip } from './modules/tooltip.js'
import { initDropdownMenu } from './modules/dropdown-menu.js'

window.addEventListener('load', () => {
	initTabNav()
	initAccordion()
	initScroolToSection()
	initScrollAnimation()
	initModal()
	initTooltip()
	initDropdownMenu()
})

window.addEventListener('scroll', initScrollAnimation)
