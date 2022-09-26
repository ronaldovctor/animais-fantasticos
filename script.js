const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')

function activeTab(index) {
	cleanTab()
	tabContent[index].classList.add('active')
}

function cleanTab() {
	tabContent.forEach((section) => {
		section.classList.remove('active')
	})
}

tabMenu.forEach((item, index) => {
	item.addEventListener('click', () => activeTab(index))
})
