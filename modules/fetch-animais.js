import AnimaNumeros from './anima-numeros.js'

export default function initFetchAnimais(url, target) {
	async function fetchAnimais() {
		try {
			const animaisResponse = await fetch(url)
			const animaisJSON = await animaisResponse.json()

			const numerosGrid = document.querySelector(target)
			animaisJSON.forEach((animal) => {
				const { div } = createAnimal(animal)
				numerosGrid.appendChild(div)
			})

			const animaNumeros = new AnimaNumeros('[data-numero]', 'active', '.numeros')
			animaNumeros.init()
		} catch (error) {
			throw new Error(error.message)
		}
	}

	return fetchAnimais('./animaisapi.json')

	function createAnimal(animal) {
		const div = document.createElement('div')
		div.classList.add('numero-animal')

		div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`

		return { div }
	}
}
