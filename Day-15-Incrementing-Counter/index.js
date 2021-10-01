const number = document.querySelectorAll('.counterNumber');

  number.forEach((num) => {
    num.innerText = '0';
    const updateCounter = () => {
      const target = Number(num.getAttribute('data-counter'));
      const numberCounterHtml = Number(num.innerText);
      const increment = target / 1000;
      if (numberCounterHtml < target) {
        num.innerText = `${Math.ceil(numberCounterHtml + increment)}`;
        setTimeout(updateCounter, 1);
      }
    };
    updateCounter();
  })
