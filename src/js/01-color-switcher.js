const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let idInterval = null;
startBtn.disabled = false;

startBtn.addEventListener('click', changeColor);
stopBtn.addEventListener('click', ClearChangeColor);

function changeColor() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  idInterval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function ClearChangeColor() {
  stopBtn.disabled = true;
  startBtn.disabled = false;
  clearInterval(idInterval);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
