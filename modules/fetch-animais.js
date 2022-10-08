import initAnimaNumeros from './anima-numeros.js'

export default function initFetchAnimais() {
	async function fetchAnimais(url) {
		try {
			const animaisResponse = await fetch(url)
			const animaisJSON = await animaisResponse.json()

			const numerosGrid = document.querySelector('.numeros-grid')

			animaisJSON.forEach((animal) => {
				const { div } = createAnimal(animal)
				numerosGrid.appendChild(div)
			})

			initAnimaNumeros()
		} catch (error) {
			throw new Error(error.message)
		}
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
