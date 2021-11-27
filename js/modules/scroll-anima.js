export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;// vai pegar á altura da tela é multipliacar 0.6 que é 6%

    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      // getBoundingClientRect().top vai pegar á altura que o elemento esta do topo da pánigina
      const sectionTop = section.getBoundingClientRect().top; 
      const isSectionVisible = (sectionTop - this.windowMetade) < 0;

      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) { // casso se eu quiser remover esta classe para ativa ela denovo
        section.classList.remove('ativo');
      }
    });
  }

  init() {
    this.animaScroll();
    window.addEventListener('scroll', this.animaScroll);
    return this;
  }
}
