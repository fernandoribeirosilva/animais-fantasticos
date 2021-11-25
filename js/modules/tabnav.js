export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add('ativo', direcao);
  }

  // os dois tem que ser maior que 0 para ocorrer o código caso um não atenda a este requicito não acontece nada.
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');// vai colocar o primeiro item com ativo, ou seja vai mostra a descrição.
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
