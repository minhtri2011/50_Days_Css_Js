const cups = document.querySelectorAll('.cup-small');
const remained = document.querySelector('.remained');
const percent = document.querySelector('.percent');
const liters = document.getElementById('liters');

update();
cups.forEach((cup, index) => {
  cup.addEventListener('click', () => {
    highLightCup(index);
  });
});

function highLightCup(idx) {
  if (
    cups[idx].classList.contains('full') &&
    !cups[idx].nextElementSibling.classList.contains('full')
  ) {
    idx--;
  }
  cups.forEach((cup, index) => {
    if (index <= idx) cup.classList.add('full');
    else cup.classList.remove('full');
  });
  update();
}
function update() {
  const fullCups = document.querySelectorAll('.cup.full').length;
  const totalCups = cups.length;
  console.log(totalCups);
  if (fullCups === 0) {
    percent.style.visibility = 'hidden';
    percent.style.height = 0;
  } else {
    percent.style.visibility = 'visible';
    percent.style.height = `${(fullCups / totalCups) * 250}px`;
    percent.innerHTML = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    // 1l = 1000ml
    liters.innerHTML = `${2 - (250 * fullCups) / 1000}L`;
  }
}
