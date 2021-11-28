import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuBotton, menuList) {
    this.menuBotton = document.querySelector(menuBotton);
    this.menuList = document.querySelector(menuList);

    this.activeClass = 'active';
    this.events = ['click', 'touchstart'];
    this.onpenMenu = this.onpenMenu.bind(this);
  }
  
  onpenMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuBotton.classList.add(this.activeClass);
  
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuBotton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((evento) => this.menuBotton.addEventListener(evento, this.onpenMenu));
    // menuBotton.addEventListener('click', onpenMenu);
  }

  init() {
    if (this.menuBotton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
