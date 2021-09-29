const labels = document.querySelectorAll('.form-control label');
labels.forEach((label) => {
  label.innerHTML = label.innerHTML
    .split('')
    .map((key,index) => {
      return `<span
      style="transition-delay:${index*50}ms"
      >${key}</span>`;
    })
    .join('');
});