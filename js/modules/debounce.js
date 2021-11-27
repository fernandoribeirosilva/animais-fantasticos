export default function debounce(callback, delay) {
  let timer;

  return (...args) => {
    // Só vai limpar o timer com clearTimeout so se tiver algua coisa no timer
    if (timer) {
      clearTimeout(timer);
    } 
    timer = setTimeout(() => {
      callback(...args);
      timer = null;// em quanto a função estiver com null ele não vai limpar
    }, delay);
  };
}
