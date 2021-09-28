const container = document.querySelector('.container');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('mouseenter',()=>{
container.classList.add('leftHover');
})
right.addEventListener('mouseenter',()=>{
container.classList.add('rightHover');
})
left.addEventListener('mouseleave',()=>{
container.classList.remove('leftHover');
})
right.addEventListener('mouseleave',()=>{
container.classList.remove('rightHover');
})