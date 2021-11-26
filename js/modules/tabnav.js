export default class initTabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }
  
  // Ativa a tab de acordo com o index da mesma
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  // Adiciona os eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    // os dois tem que ser maior que 0 para ocorrer o código caso um não atenda a este requicito não acontece nada.
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);// vai colocar o primeiro item com ativo, ou seja vai mostra a descrição.
      this.addTabNavEvent();
    }
    return this;
  }
}
