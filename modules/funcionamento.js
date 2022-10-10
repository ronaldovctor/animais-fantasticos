export default class Funcionamento {
	constructor(funcionamento) {
		this.funcionamento = document.querySelector(funcionamento)
	}

	dadosFuncionamento() {
		this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number)
		this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number)
	}

	dadosAgora() {
		this.dataAgora = new Date()
		this.diaAgora = this.dataAgora.getDay()
		this.horarioAgora = this.dataAgora.getUTCHours() - 3
	}

	isAberto() {
		this.semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1
		this.horarioAberto =
			this.horarioAgora >= this.horarioSemana[0] &&
			this.horarioAgora < this.horarioSemana[1]

		return this.semanaAberto && this.horarioAberto
	}

	activeAberto() {
		this.isAberto() && this.funcionamento.classList.add('open')
	}

	init() {
		if (this.funcionamento) {
			this.dadosFuncionamento()
			this.dadosAgora()
			this.activeAberto()
		}
		return this
	}
}
