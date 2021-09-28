const container = document.querySelector('.circleContainer');
const toggleCircle = document.querySelector('.circle');
const nav = document.querySelector('.navbar');
const circle = document.querySelector('.circle');

toggleCircle.addEventListener('click', () => {
  const toggleRotage = container.classList.contains('rotage');
  if (toggleRotage) {
    container.classList.remove('rotage');
    nav.classList.remove('active');
    circle.classList.remove('active');
} else {
    container.classList.add('rotage');
    nav.classList.add('active');
    circle.classList.add('active');
  }
});
