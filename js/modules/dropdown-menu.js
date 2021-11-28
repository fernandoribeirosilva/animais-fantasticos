import outsideClick from './outsideclick.js'; 

// função tousch para mobile
export default class DropdownMenu {
  constructor(dropdownMenus) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    this.events = ['touchstart', 'click'];
    this.activeClass = 'active';
    this.activeDropdownMenus = this.activeDropdownMenus.bind(this);
  }
  
  // Ativa o dropdownmenu e adicionar 
  // a função que obsevar o clique fora dele
  activeDropdownMenus(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove('active');
    });
  }

  // adiciona os eventos ao dropdownmenu
  addDropdownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      // o evento click demora 300ms para começar, já o touchstart é imediato
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenus);
      });
    });
  }

  init() {
    if (this.addDropdownMenuEvent.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
}
