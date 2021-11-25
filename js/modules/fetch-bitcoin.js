export default function initFetchBitCoin() {
  fetch('https://blockchain.info/ticker')
    .then((res) => res.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector('.btc-preco');
      // A quantidade dividida é a que vai ser doada
      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    }).catch((error) => {
      console.erro(error);
    });
}
