const canvas = document.getElementById('canvas');
const colorE = document.getElementById('color');
const dec = document.querySelector('.decrease');
const inc = document.querySelector('.increase');
const sizeEl = document.querySelector('.size');

let ctx = canvas.getContext('2d');
let isPress = false;
let size = 20;
let color = 'black';
let x;
let y;
function draw(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

canvas.addEventListener('mousedown', e => {
    isPress = true;
    x = e.offsetX;
    y = e.offsetY;
})
canvas.addEventListener('mouseup', e => {
    isPress = false;
    x = undefined;
    y = undefined;
})
canvas.addEventListener('mousemove', e => {
    if (isPress) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        draw(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
})
colorE.addEventListener('change', e => color = e.target.value)
dec.addEventListener('click', () => {
    size <= 5 ? size = 5 : size-=5;
    sizeEl.innerText = size;
});
inc.addEventListener('click', () => {
    size >= 50 ? size = 50 : size+=5;
    sizeEl.innerText = size;
});