import { initAnimaNumeros } from './anima-numeros.js'

export function initFetchAnimais() {
	async function fetchAnimais(url) {
		const animaisResponse = await fetch(url)
		const animaisJSON = await animaisResponse.json()

		const numerosGrid = document.querySelector('.numeros-grid')

		animaisJSON.forEach((animal) => {
			const { div } = createAnimal(animal)
			numerosGrid.appendChild(div)
		})

		initAnimaNumeros()
	}

	fetchAnimais('./animaisapi.json')

	function createAnimal(animal) {
		const div = document.createElement('div')
		div.classList.add('numero-animal')

		div.innerHTML = `
      <h3>${animal.specie}</h3>
      <span data-numero>${animal.total}</span>`

		return { div }
	}
}
