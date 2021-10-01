const nav = document.querySelector('.container');
const toggleBtn = document.querySelector('.btn');

toggleBtn.addEventListener('click',()=>{
  nav.classList.toggle('active')
})