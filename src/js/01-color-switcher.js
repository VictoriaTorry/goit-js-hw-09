const start = document.querySelector('[data-start');
const stoped = document.querySelector('[data-stop');
const body = document.querySelector('body');

let bodyChangeColorTimeinterval = null;

stoped.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

start.addEventListener('click', () => {
  start.disabled = true;
  if (stoped.disabled === true) {
    stoped.disabled = false;
  }
  
  body.style.backgroundColor = getRandomHexColor();

  bodyChangeColorTimeinterval = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
})

stoped.addEventListener('click', () => {
  if (start.disabled === true) {
    start.disabled = false;
  }

  stoped.disabled = true;

  clearInterval(bodyChangeColorTimeinterval);
})