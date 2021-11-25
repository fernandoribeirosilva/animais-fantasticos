export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  // vai sempre atualizar a possição do mouse
  const onMouseMove = {
    handleEvent(event) { // passo o event para pegar as cordemadas do mouse.
      // possição ezatamente onde o mouse esta passando, mais 20px para dar uma distáncia
      this.tooltipBox.style.top = `${event.pageY + 20}'px'`;
      this.tooltipBox.style.left = `${event.pageX + 20}'px'`;
    },
  };

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);// vai remover a função.
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');// vai pegar o texto da aria-label.
  
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);// vai adicionar no final da página.
    
    return tooltipBox;
  }

  function onMouseOver() {
    const tooltipBox = criarTooltipBox(this); // o THIS aqui faz referencia ao item do forEach acima
  
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);// tooltip vai seguir a seta do mouse.
  
    onMouseLeave.tooltipBox = tooltipBox;// vai colocar a tooltipBox que foi criado ao objeto
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);// quando o mouse passa em cima dele 
  }

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);// quando passa o mouse por cima.
  });
}
