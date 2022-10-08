export default function initAnimaNumeros() {
	function startCount() {
		const numeros = document.querySelectorAll('[data-numero]')
		numeros.forEach((num) => {
			const total = +num.innerText
			const incremento = Math.floor(total / 100)

			let start = 0
			const timer = setInterval(() => {
				start += incremento
				num.innerText = start
				if (start > total) {
					num.innerText = total
					clearInterval(timer)
				}
			}, 10 * Math.random())
		})
	}

	function handleMutation(mutation) {
		if (mutation[0].target.classList.contains('active')) {
			observer.disconnect()
			startCount()
		}
	}

	const observer = new MutationObserver(handleMutation)
	const observerTarget = document.querySelector('.numeros')

	observer.observe(observerTarget, {
		attributes: true,
	})
}
