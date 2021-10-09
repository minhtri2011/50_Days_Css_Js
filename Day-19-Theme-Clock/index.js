const darkModeBtn = document.querySelector('.dark-mode');
const hoursNeedle = document.querySelector('.hours');
const minutesNeedle = document.querySelector('.minutes');
const secondsNeedle = document.querySelector('.seconds');
const timeContent = document.querySelector('.time');
const dateContent = document.querySelector('.date');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
darkModeBtn.addEventListener('click', () => {
    document.querySelector('html').classList.toggle('dark');
})
setInterval(() => {
    setTime();
}, 1000);
setTime();
function setTime() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    hoursNeedle.style.transform = `translate(-50%,-100%) rotate(${hours % 12 * 30}deg)`;
    minutesNeedle.style.transform = `translate(-50%,-100%) rotate(${minutes * 6}deg)`;
    secondsNeedle.style.transform = `translate(-50%,-100%) rotate(${seconds * 6}deg)`;
    timeContent.innerHTML = `${hours % 12}:${minutes} ${getAmPm(hours)}`;
    dateContent.innerHTML=`${days[time.getDay()]}, ${months[time.getMonth()]}
    <span class='circle'>${time.getDay()+1}</span>
    `
}
function getAmPm(h) {
    return h > 12 ? 'PM' : 'AM';
}