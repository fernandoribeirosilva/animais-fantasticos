export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  // O split vai tirar a virgula é transformar em uma array, e o map vai transformar em numeros.
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);
  
  const dataAgora = new Date(); 
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();
  
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);
  
  // Só se for ingual a true
  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}
