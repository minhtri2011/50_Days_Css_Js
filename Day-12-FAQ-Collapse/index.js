const btn = document.querySelectorAll('.toggle');

btn.forEach(e => {
    e.addEventListener('click',()=>{
        e.parentNode.classList.toggle('active');
    })
});