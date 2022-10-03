export function initFuncionamento() {
	const funcionamento = document.querySelector('[data-semana]')
	const diasSemana = funcionamento.dataset.semana.split(',').map(Number)
	const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)

	const dataAgora = new Date()
	const diaAgora = dataAgora.getDay()
	const horarioAgora = dataAgora.getHours()
	console.log(horarioAgora)

	const semanaAberto = diasSemana.indexOf(diaAgora) !== -1
	console.log(semanaAberto)
	const horarioAberto =
		horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]
	console.log(horarioAberto)
	if (semanaAberto && horarioAberto) funcionamento.classList.add('open')
}
