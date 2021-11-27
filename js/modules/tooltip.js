export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bind do objeto das classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }
 
  // vai sempre atualizar a possição do mouse
  onMouseMove(event) { // passo o event para pegar as cordemadas do mouse.
    // possição ezatamente onde o mouse esta passando, mais 20px para dar uma distáncia
    this.tooltipBox.style.top = `${event.pageY + 20}'px'`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}'px'`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}'px'`;
    }
  }

  // Remove a tooltip e os eventos de mousemove e mouseleave
  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener('mousemove', this.onMouseMove);
    event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);// vai remover a função.
  }

  // cria a tooltip box e coloca no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');// vai pegar o texto da aria-label.
  
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);// vai adicionar no final da página.
    
    this.tooltipBox = tooltipBox;
  }

  // Cria a tooltip e adiciona os eventos
  // de mousemove e mouseleave ao target
  onMouseOver(event) {
    // cria a tooltipbox e colocar em uma propriedade
    this.criarTooltipBox(event.currentTarget); // o THIS aqui faz referencia ao item do forEach acima
  
    event.currentTarget.addEventListener('mousemove', this.onMouseMove);// tooltip vai seguir a seta do mouse.
    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);// quando o mouse passa em cima dele 
  }

  // Adiciona os eventos de mouseover a cada tooltip
  addToolpsEvent() { 
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);// quando passa o mouse por cima.
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addToolpsEvent();
    }
    return this;
  }
}
