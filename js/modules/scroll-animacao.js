export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowMetade = window.innerHeight * 0.6;// vai pegar á altura da tela é multipliacar 0.6 que é 6%

  function animaScroll() {
    sections.forEach((section) => {
      // getBoundingClientRect().top vai pegar á altura que o elemento esta do topo da pánigina
      const sectionTop = section.getBoundingClientRect().top; 
      const isSectionVisible = (sectionTop - windowMetade) < 0;

      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) { // casso se eu quiser remover esta classe para ativa ela denovo
        section.classList.remove('ativo');
      }
    });
  }

  if (sections.length) { // caso essita esta classe acontece o codigo abaixo.
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
