export default function fetchBitCoin(url, target) {
  fetch(url)
    .then((res) => res.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(target);
      // A quantidade dividida é a que vai ser doada
      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    }).catch((error) => {
      console.erro(error);
    });
}
