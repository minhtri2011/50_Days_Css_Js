const card = document.querySelectorAll('.card');

window.addEventListener('scroll', check);
check();
function check() {
//   console.log(window.innerHeight);
  const height = window.innerHeight/5*4;
  card.forEach(item=>{
      const cardTop = item.getBoundingClientRect().top;
      console.log(cardTop);
      if(cardTop<height){
          item.classList.add('active');
      }else item.classList.remove('active');
  })
}
