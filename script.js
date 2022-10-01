import { initTabNav } from './modules/tab-nav.js'
import { initAccordion } from './modules/accordion.js'
import { initScroolToSection } from './modules/scroll-to-section.js'
import { initScrollAnimation } from './modules/scroll-animation.js'
import { initModal } from './modules/modal.js'

window.addEventListener('load', () => {
	initTabNav()
	initAccordion()
	initScroolToSection()
	initScrollAnimation()
	initModal()
})

window.addEventListener('scroll', initScrollAnimation)
