const inputBox = document.getElementById('random');
const tags = document.getElementById('tags');

inputBox.focus();

inputBox.addEventListener('keyup', (e) => {
  renderTags(e.target.value);

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);

    randomSelect();
  }
});
const renderTags = (values) => {
  const data = values
    .split(',')
    .filter((v) => v.trim() !== '')
    .map((v) => v.trim());
  tags.innerHTML = '';
  data.forEach((element) => {
    const newTag = document.createElement('p');
    newTag.classList.add('tag');
    newTag.innerHTML = element;
    tags.appendChild(newTag);
  });
};

const randomSelect = () => {
  times = 10;

  const int = setInterval(() => {
    const random = pickRandomSelect();
    highLightTag(random);
    setTimeout(() => {
      unHighLightTag(random);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(int);
    setTimeout(() => {
      const random = pickRandomSelect();
      highLightTag(random);
    }, 100);
  }, times * 100);
};

const pickRandomSelect = () => {
  const tagsRandom = document.querySelectorAll('.tag');
  return tagsRandom[Math.floor(Math.random() * tagsRandom.length)];
};

const highLightTag = (v) => v.classList.add('active');
const unHighLightTag = (v) => v.classList.remove('active');
