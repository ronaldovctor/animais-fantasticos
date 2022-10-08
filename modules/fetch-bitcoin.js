export default function initFetchBitcoin() {
	async function fetchBitcoin() {
		const btcPreco = document.querySelector('[data-bitcoin="preco"]')

		try {
			const response = await fetch('https://blockchain.info/ticker')
			const json = await response.json()

			btcPreco.innerText = (100 / json.BRL.sell).toFixed(4)
		} catch (error) {
			throw new Error(error.message)
		}
	}

	fetchBitcoin()
}
