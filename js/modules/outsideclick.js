// função para verificar o click do lado de forra
// O callback vai ser ativado como uma função
// O lement vai ser o THIS para verificar se realmente eu estou cliclando do lado de fora

// função de callback
export default function outsideClick(element, events, callback) { 
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleOutsiteClick(event) {
    // vai verificar se é realmente o elemento fora do que eu estou clicando, que esta fora do active adicionado
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);

      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsiteClick);
      });
      callback();
    }
  }

  // O hasAttribute vai verificar se tem o outside, se tiver não faz nada
  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsiteClick);
      });
    });
    element.setAttribute(outside, '');
  }
}
