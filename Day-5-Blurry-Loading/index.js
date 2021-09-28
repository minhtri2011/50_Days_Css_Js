const bg = document.querySelector('.background');
const loading = document.querySelector('.loading');

let load = 0;
let int = setInterval(() => {
  blurring();
}, 50);
function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  loading.innerHTML = `${load}%`;
  loading.style.opacity = `${1 - load / 100}`;
  bg.style.filter = `blur(${70 - (70 / 100) * load}px)`;
}
