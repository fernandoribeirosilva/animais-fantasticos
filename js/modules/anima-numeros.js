export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');
    
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      // Math.floor vai aredondar os numeros
      const incremento = Math.floor(total / 100);
    
      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);// vai limpar o intervalo
        }
      }, 25 * Math.random());
    });
  }
  
  let observer;

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }
  
  observer = new MutationObserver(handleMutation);
  const observerTarget = document.querySelector('.numeros');// este é o alvo que ele vai ficar obsevando
  // vai ficar obsevando os atributos dele
  observer.observe(observerTarget, { attributes: true });
}
