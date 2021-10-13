const leftSlide = document.querySelector('.left-slide');
const rightSlide = document.querySelector('.right-slide');
const leftItems = document.querySelectorAll('.left-slide .item');
const rightItems = document.querySelectorAll('.right-slide .item');

const itemLenght = document.querySelectorAll('.left-slide .item').length;

const leftBtn = document.querySelector('.left-arrow');
const rightBtn = document.querySelector('.right-arrow');

let activeSlide = 0;
(function () {
    rightItems.forEach(item => {
        item.style.order = item.getAttribute('data');
    })
    leftItems.forEach(item => {
        item.style.order = item.getAttribute('data');
    })
})()

leftSlide.style.top = `-${(itemLenght - 1) * 100}vh`
leftBtn.addEventListener('click', () => {
    activeSlide++;
    if (activeSlide > itemLenght - 1) { activeSlide = 0; }
    scrollSlide();
})
rightBtn.addEventListener('click', () => {
    activeSlide--;
    if (activeSlide < 0) { activeSlide = itemLenght - 1; }
    scrollSlide();
})
function scrollSlide() {
    leftSlide.style.top = `-${(itemLenght - 1 - activeSlide) * 100}vh`;
    rightSlide.style.top = `-${(activeSlide) * 100}vh`;
}