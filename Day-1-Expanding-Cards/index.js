const cards = document.querySelectorAll('.card');

const handleRemoveActiveCard = () => {
  cards.forEach((card) => {
    card.classList.remove('active');
  });
};

cards.forEach((element) => {
  element.addEventListener('click', () => {
    handleRemoveActiveCard();
    element.classList.add('active');
  });
});
