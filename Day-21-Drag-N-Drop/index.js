const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for (empty of empties) {
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('drop', dragDrop)
}
function dragStart() {
   setTimeout(() => {
    this.className+= ' hold'
   }, 0);
}
function dragEnd() {
   this.className='fill'
}
function dragDrop() {
    this.className = 'empty';
    this.append(fill);
}
function dragOver(e) {
    e.preventDefault();
}
function dragLeave() {
    this.className='empty'
}
function dragEnter(e) {
    e.preventDefault();
    this.className +=' hover'
}