/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/tab-nav.js */ \"./modules/tab-nav.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/accordion.js */ \"./modules/accordion.js\");\n/* harmony import */ var _modules_scroll_to_section_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/scroll-to-section.js */ \"./modules/scroll-to-section.js\");\n/* harmony import */ var _modules_scroll_animation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/scroll-animation.js */ \"./modules/scroll-animation.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/modal.js */ \"./modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/tooltip.js */ \"./modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/dropdown-menu.js */ \"./modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/menu-mobile.js */ \"./modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/funcionamento.js */ \"./modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/fetch-animais.js */ \"./modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modules/fetch-bitcoin.js */ \"./modules/fetch-bitcoin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('load', () => {\r\n\t(0,_modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n\t;(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\t;(0,_modules_scroll_to_section_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n\t;(0,_modules_scroll_animation_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n\t;(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n\t;(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n\t;(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n\t;(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n\t;(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()\r\n\t;(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])()\r\n\t;(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])()\r\n})\r\n\r\nwindow.addEventListener('scroll', _modules_scroll_animation_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

/***/ }),

/***/ "./modules/accordion.js":
/*!******************************!*\
  !*** ./modules/accordion.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\r\n\tfunction activeAccordion() {\r\n\t\tthis.classList.toggle('active')\r\n\t\tthis.nextElementSibling.classList.toggle('active')\r\n\t}\r\n\r\n\tconst accordionList = document.querySelectorAll('[data-anime=\"accordion\"] dt')\r\n\taccordionList.forEach((item) => {\r\n\t\titem.addEventListener('click', activeAccordion)\r\n\t})\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./modules/accordion.js?");

/***/ }),

/***/ "./modules/anima-numeros.js":
/*!**********************************!*\
  !*** ./modules/anima-numeros.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\r\n\tfunction startCount() {\r\n\t\tconst numeros = document.querySelectorAll('[data-numero]')\r\n\t\tnumeros.forEach((num) => {\r\n\t\t\tconst total = +num.innerText\r\n\t\t\tconst incremento = Math.floor(total / 100)\r\n\r\n\t\t\tlet start = 0\r\n\t\t\tconst timer = setInterval(() => {\r\n\t\t\t\tstart += incremento\r\n\t\t\t\tnum.innerText = start\r\n\t\t\t\tif (start > total) {\r\n\t\t\t\t\tnum.innerText = total\r\n\t\t\t\t\tclearInterval(timer)\r\n\t\t\t\t}\r\n\t\t\t}, 10 * Math.random())\r\n\t\t})\r\n\t}\r\n\r\n\tfunction handleMutation(mutation) {\r\n\t\tif (mutation[0].target.classList.contains('active')) {\r\n\t\t\tobserver.disconnect()\r\n\t\t\tstartCount()\r\n\t\t}\r\n\t}\r\n\r\n\tconst observer = new MutationObserver(handleMutation)\r\n\tconst observerTarget = document.querySelector('.numeros')\r\n\r\n\tobserver.observe(observerTarget, {\r\n\t\tattributes: true,\r\n\t})\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./modules/anima-numeros.js?");

/***/ }),

/***/ "./modules/dropdown-menu.js":
/*!**********************************!*\
  !*** ./modules/dropdown-menu.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./modules/outsideclick.js\");\n\r\n\r\nfunction initDropdownMenu() {\r\n\tconst dropdownMenus = document.querySelectorAll('[data-dropdown]')\r\n\r\n\tdropdownMenus.forEach((menu) => {\r\n\t\tconst events = ['touchstart', 'click']\r\n\t\tevents.forEach((userEvent) => {\r\n\t\t\tmenu.addEventListener(userEvent, handleClick)\r\n\t\t})\r\n\t})\r\n\r\n\tfunction handleClick(event) {\r\n\t\tevent.preventDefault()\r\n\t\tthis.classList.add('active')\r\n\t\t;(0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], () => {\r\n\t\t\tthis.classList.remove('active')\r\n\t\t})\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./modules/dropdown-menu.js?");

/***/ }),

/***/ "./modules/fetch-animais.js":
/*!**********************************!*\
  !*** ./modules/fetch-animais.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./modules/anima-numeros.js\");\n\r\n\r\nfunction initFetchAnimais() {\r\n\tasync function fetchAnimais(url) {\r\n\t\ttry {\r\n\t\t\tconst animaisResponse = await fetch(url)\r\n\t\t\tconst animaisJSON = await animaisResponse.json()\r\n\r\n\t\t\tconst numerosGrid = document.querySelector('.numeros-grid')\r\n\r\n\t\t\tanimaisJSON.forEach((animal) => {\r\n\t\t\t\tconst { div } = createAnimal(animal)\r\n\t\t\t\tnumerosGrid.appendChild(div)\r\n\t\t\t})\r\n\r\n\t\t\t;(0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n\t\t} catch (error) {\r\n\t\t\tthrow new Error(error.message)\r\n\t\t}\r\n\t}\r\n\r\n\tfetchAnimais('./animaisapi.json')\r\n\r\n\tfunction createAnimal(animal) {\r\n\t\tconst div = document.createElement('div')\r\n\t\tdiv.classList.add('numero-animal')\r\n\r\n\t\tdiv.innerHTML = `\r\n      <h3>${animal.specie}</h3>\r\n      <span data-numero>${animal.total}</span>`\r\n\r\n\t\treturn { div }\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./modules/fetch-animais.js?");

/***/ }),

/***/ "./modules/fetch-bitcoin.js":
/*!**********************************!*\
  !*** ./modules/fetch-bitcoin.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\r\n\tasync function fetchBitcoin() {\r\n\t\tconst btcPreco = document.querySelector('[data-bitcoin=\"preco\"]')\r\n\r\n\t\ttry {\r\n\t\t\tconst response = await fetch('https://blockchain.info/ticker')\r\n\t\t\tconst json = await response.json()\r\n\r\n\t\t\tbtcPreco.innerText = (100 / json.BRL.sell).toFixed(4)\r\n\t\t} catch (error) {\r\n\t\t\tthrow new Error(error.message)\r\n\t\t}\r\n\t}\r\n\r\n\tfetchBitcoin()\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./modules/funcionamento.js":
/*!**********************************!*\
  !*** ./modules/funcionamento.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\r\n\tconst funcionamento = document.querySelector('[data-semana]')\r\n\tconst diasSemana = funcionamento.dataset.semana.split(',').map(Number)\r\n\tconst horarioSemana = funcionamento.dataset.horario.split(',').map(Number)\r\n\r\n\tconst dataAgora = new Date()\r\n\tconst diaAgora = dataAgora.getDay()\r\n\tconst horarioAgora = dataAgora.getHours()\r\n\r\n\tconst semanaAberto = diasSemana.indexOf(diaAgora) !== -1\r\n\tconst horarioAberto =\r\n\t\thorarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]\r\n\r\n\tif (semanaAberto && horarioAberto) funcionamento.classList.add('open')\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./modules/funcionamento.js?");

/***/ }),

/***/ "./modules/menu-mobile.js":
/*!********************************!*\
  !*** ./modules/menu-mobile.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./modules/outsideclick.js\");\n\r\n\r\nfunction initMenuMobile() {\r\n\tconst menuButton = document.querySelector('[data-menu=\"button\"]')\r\n\tconst menuList = document.querySelector('[data-menu=\"list\"]')\r\n\tconst events = ['touchstart', 'click']\r\n\r\n\tevents.forEach((evt) => menuButton.addEventListener(evt, openMenu))\r\n\r\n\tfunction openMenu() {\r\n\t\tmenuList.classList.add('active')\r\n\t\tmenuButton.classList.add('active')\r\n\t\t;(0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, events, () => {\r\n\t\t\tmenuList.classList.remove('active')\r\n\t\t\tmenuButton.classList.remove('active')\r\n\t\t})\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./modules/menu-mobile.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\r\n\tconst botaoAbrir = document.querySelector('[data-modal=\"open\"]')\r\n\tconst botaoFechar = document.querySelector('[data-modal=\"close\"]')\r\n\tconst containerModal = document.querySelector('[data-modal=\"container\"]')\r\n\r\n\tbotaoAbrir.addEventListener('click', toggleModal)\r\n\tbotaoFechar.addEventListener('click', toggleModal)\r\n\tcontainerModal.addEventListener('click', clickOutModal)\r\n\r\n\tfunction toggleModal(event) {\r\n\t\tevent.preventDefault()\r\n\t\tcontainerModal.classList.toggle('active')\r\n\t}\r\n\r\n\tfunction clickOutModal(event) {\r\n\t\tevent.target === this && toggleModal(event)\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./modules/modal.js?");

/***/ }),

/***/ "./modules/outsideclick.js":
/*!*********************************!*\
  !*** ./modules/outsideclick.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\r\n\tconst html = document.documentElement\r\n\tconst outside = 'data-outside'\r\n\r\n\tif (!element.hasAttribute(outside)) {\r\n\t\tevents.forEach((userEvent) => {\r\n\t\t\tsetTimeout(() => html.addEventListener(userEvent, handleOutsideClick), 0)\r\n\t\t\t// due the bubble behavior this eventListener does not occur instantly, preventing the menu to be closed even before the user see it\r\n\t\t})\r\n\t\telement.setAttribute(outside, '')\r\n\t}\r\n\r\n\tfunction handleOutsideClick(event) {\r\n\t\tif (!element.contains(event.target)) {\r\n\t\t\tevents.forEach((userEvent) => {\r\n\t\t\t\thtml.removeEventListener(userEvent, handleOutsideClick)\r\n\t\t\t})\r\n\t\t\telement.removeAttribute(outside)\r\n\t\t\tcallback()\r\n\t\t}\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./modules/outsideclick.js?");

/***/ }),

/***/ "./modules/scroll-animation.js":
/*!*************************************!*\
  !*** ./modules/scroll-animation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollAnimation)\n/* harmony export */ });\nfunction initScrollAnimation() {\r\n\tconst sections = document.querySelectorAll('[data-anime=\"scroll\"]')\r\n\r\n\tfunction animaScroll(element) {\r\n\t\telement.classList.add('active')\r\n\t}\r\n\r\n\tfunction removeAnima(element) {\r\n\t\tif (element.classList.contains('active')) element.classList.remove('active')\r\n\t}\r\n\r\n\tsections.forEach((section) => {\r\n\t\tconst windowHeight = window.innerHeight * 0.65\r\n\t\tconst sectionTop = section.getBoundingClientRect().top\r\n\t\tsectionTop < windowHeight ? animaScroll(section) : removeAnima(section)\r\n\t})\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./modules/scroll-animation.js?");

/***/ }),

/***/ "./modules/scroll-to-section.js":
/*!**************************************!*\
  !*** ./modules/scroll-to-section.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScroolToSection)\n/* harmony export */ });\nfunction initScroolToSection() {\r\n\tconst internalLinks = document.querySelectorAll('.js-menu a[href^=\"#\"]')\r\n\r\n\tfunction scrollToSection(event) {\r\n\t\tevent.preventDefaul()\r\n\t\tconst href = event.currentTarget.getAttribute('href')\r\n\t\tconst section = document.querySelector(href)\r\n\r\n\t\t// window.scrollTo({\r\n\t\t// \ttop: section.offsetTop.accordionList,\r\n\t\t// \tbehavior: 'smooth',\r\n\t\t// })\r\n\r\n\t\t// alternative\r\n\t\tsection.scrollinToView({\r\n\t\t\tbehavior: 'smooth',\r\n\t\t\tblock: 'start',\r\n\t\t})\r\n\t}\r\n\r\n\tinternalLinks.forEach((link) => {\r\n\t\tlink.addEventListener('click', scrollToSection)\r\n\t})\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./modules/scroll-to-section.js?");

/***/ }),

/***/ "./modules/tab-nav.js":
/*!****************************!*\
  !*** ./modules/tab-nav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\r\n\tconst tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li')\r\n\tconst tabContent = document.querySelectorAll('[data-tab=\"content\"] section')\r\n\r\n\tfunction activeTab(index) {\r\n\t\tcleanTab()\r\n\t\tconst direction = tabContent[index].dataset.anime\r\n\t\ttabContent[index].classList.add('active', direction)\r\n\t}\r\n\r\n\tfunction cleanTab() {\r\n\t\ttabContent.forEach((section) => {\r\n\t\t\tsection.classList.remove('active')\r\n\t\t})\r\n\t}\r\n\r\n\ttabMenu.forEach((item, index) => {\r\n\t\titem.addEventListener('click', () => activeTab(index))\r\n\t})\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./modules/tab-nav.js?");

/***/ }),

/***/ "./modules/tooltip.js":
/*!****************************!*\
  !*** ./modules/tooltip.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\r\n\tconst tooltips = document.querySelectorAll('[data-tooltip]')\r\n\r\n\ttooltips.forEach((item) => {\r\n\t\titem.addEventListener('mouseover', onMouseOver)\r\n\t})\r\n\r\n\tfunction onMouseOver(event) {\r\n\t\tconst tooltipBox = createToolTipBox(this)\r\n\t\ttooltipBox.style.top = `${event.pageY}px`\r\n\t\ttooltipBox.style.left = `${event.pageX}px`\r\n\r\n\t\tonMouseLeave.tooltipBox = tooltipBox\r\n\t\tthis.addEventListener('mousemove', onMouseMove)\r\n\r\n\t\tonMouseMove.tooltipBox = tooltipBox\r\n\t\tonMouseLeave.element = this\r\n\t\tthis.addEventListener('mouseleave', onMouseLeave)\r\n\t}\r\n\r\n\tconst onMouseLeave = {\r\n\t\thandleEvent() {\r\n\t\t\tthis.tooltipBox.remove()\r\n\t\t\tthis.element.removeEventListener('mouseleave', onMouseLeave)\r\n\t\t\tthis.element.removeEventListener('mousemove', onMouseMove)\r\n\t\t},\r\n\t}\r\n\r\n\tconst onMouseMove = {\r\n\t\thandleEvent(event) {\r\n\t\t\t// function called handleEvent inside object runs as function to an eventListener like a normal function\r\n\t\t\tthis.tooltipBox.style.top = `${event.pageY + 20}px` // add 20px on top to make tooltip not be under the mouse and run the mouseLeave function\r\n\t\t\tthis.tooltipBox.style.left = `${event.pageX}px`\r\n\t\t},\r\n\t}\r\n\r\n\tfunction createToolTipBox(element) {\r\n\t\tconst tooltipBox = document.createElement('div')\r\n\t\tconst text = element.getAttribute('aria-label')\r\n\r\n\t\ttooltipBox.classList.add('tooltip')\r\n\t\ttooltipBox.innerText = text\r\n\r\n\t\tdocument.body.appendChild(tooltipBox)\r\n\r\n\t\treturn tooltipBox\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./modules/tooltip.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;