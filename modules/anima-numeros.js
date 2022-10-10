export default class AnimaNumeros {
	constructor(numeros, observerClass, observerTarget) {
		this.numeros = document.querySelectorAll(numeros)
		this.observerClass = observerClass
		this.observerTarget = document.querySelector(observerTarget)

		this.handleMutation = this.handleMutation.bind(this)
	}

	static increaseValue(num) {
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
	}

	startCount() {
		this.numeros.forEach((num) => this.constructor.increaseValue(num))
	}

	handleMutation(mutation) {
		if (mutation[0].target.classList.contains(this.observerClass)) {
			this.observer.disconnect()
			this.startCount()
		}
	}

	addMutationObserver() {
		this.observer = new MutationObserver(this.handleMutation)
		this.observer.observe(this.observerTarget, {
			attributes: true,
		})
	}

	init() {
		if (this.numeros.length && this.observerClass && this.observerTarget)
			this.addMutationObserver()
		return this
	}
}
