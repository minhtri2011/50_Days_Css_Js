const btn = document.querySelector('.ripple');
btn.addEventListener('click', (e) => {
    const newAnimation = document.createElement('span');
    const x = e.clientX;
    const y = e.clientY;
    const top = e.target.offsetTop;
    const left = e.target.offsetLeft;
    newAnimation.classList.add('circle');
    newAnimation.style.left = `${x - left}px`;
    newAnimation.style.top = `${y - top}px`;
    btn.appendChild(newAnimation);
    setTimeout(() => {
        newAnimation.remove();
    }, 550);
})