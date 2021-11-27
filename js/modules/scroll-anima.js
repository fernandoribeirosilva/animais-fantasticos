export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;// vai pegar á altura da tela é multipliacar 0.6 que é 6%

    this.checkDistance = this.checkDistance.bind(this);
  }

  // Pega a distância de cada item em relação ao topo do site 
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop; 
      return { 
        element: section, 
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // verifica a distância em cada objeto
  // em relação ao scroll do site 
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) { // casso se eu quiser remover esta classe para ativa ela denovo
        item.element.classList.remove('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  // Remove o event de scroll
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
