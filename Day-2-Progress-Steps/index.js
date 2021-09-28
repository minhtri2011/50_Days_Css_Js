const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const percentBar = document.querySelector('.percentBar');
const circle = document.querySelectorAll('.circle');

current = 1;
next.addEventListener('click', () => {
  current++;
  if (current > circle.length) {
    current = circle.length;
  }
  update();
});
prev.addEventListener('click', () => {
  current--;
  if (current === 1) {
    current = 1;
  }
  update();
});
const update = () => {
  circle.forEach((item, index) => {
    if (index < current) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  percentBar.style.width = ((current - 1) / (circle.length - 1)) * 100 + '%';

  if (current === 1) {
    prev.disabled = true;
  } else if (current === circle.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
