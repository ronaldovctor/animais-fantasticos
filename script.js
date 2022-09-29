import { initTabNav } from './modules/tab-nav.js'
import { initAccordion } from './modules/accordion.js'
import { initScroolToSection } from './modules/scroll-to-section.js'
import { initScrollAnimation } from './modules/scroll-animation.js'

window.addEventListener('load', () => {
	initTabNav()
	initAccordion()
	initScroolToSection()
	initScrollAnimation()
})

window.addEventListener('scroll', initScrollAnimation)
