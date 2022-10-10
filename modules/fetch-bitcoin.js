export default function initFetchBitcoin(url, target) {
	async function fetchBitcoin() {
		const btcPreco = document.querySelector(target)

		try {
			const response = await fetch(url)
			const json = await response.json()

			btcPreco.innerText = (100 / json.BRL.sell).toFixed(4)
		} catch (error) {
			throw new Error(error.message)
		}
	}

	fetchBitcoin()
}
