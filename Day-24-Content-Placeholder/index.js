const animationText = document.querySelectorAll('.animation-text');
const animationBG = document.querySelectorAll('.animation-bg');
const cardHeader = document.querySelector('.card-header');
const cardTitle = document.querySelector('.card-title');
const cardIcon = document.querySelector('.profile-avatar');
const cardExcerpt = document.querySelector('.card-excerpt');
const nameEl = document.querySelector('.name');
const dateEl = document.querySelector('.date');

function loadData() {
    cardHeader.innerHTML = `<img src="./img/1130246.jpg" alt="" /> `;
    cardExcerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
          itaque.`;
    cardTitle.innerText = 'Title';
    cardIcon.innerHTML = '<div class="avatar-icon">T</div>';
    nameEl.innerText = 'Minh Trí';
    dateEl.innerText = 'Oct 04, 2021';
    animationBG.forEach(e => e.classList.remove('animation-bg'));
    animationText.forEach(e => e.classList.remove('animation-text'));
}
setTimeout(() => {
    loadData();
}, 2500);