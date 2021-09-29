const container = document.querySelector('.container');

window.addEventListener('keydown', (e) => {
  console.log(e);
  container.innerHTML = `
        <div class='key'>
        <p>
        Key
        </p>
        <p>
            ${e.key === ' ' ? 'Space' : e.key}
        </p>
        </div>
        <div class='key'>
        <p>
        </p>
        <p>Key code</p>
        <p>
            ${e.keyCode}
        </p>
        </div>
        <div class='key'>
        <p>Code</p>
        <p>
            ${e.code}
        </p>
        </div>

    `;
});
