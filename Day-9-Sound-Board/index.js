const sounds = ['1', '2', '3', '4', '5'];

sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
  btn.addEventListener('click', () => {
    stopSound();
    document.getElementById(sound).play();
  });
  document.getElementById('buttons').appendChild(btn);
});

const stopSound = () => {
  sounds.forEach((sound) => {
    const id = document.getElementById(sound);
    id.pause();
    id.currentTime = 0;
  });
};
