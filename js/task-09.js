function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChange = document.querySelector('.change-color');

const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

// getRandomHexColor();
// console.log(getRandomHexColor());
buttonChange.addEventListener('klick', onClickButton);
// let a = getRandomHexColor();
// console.log(getRandomHexColor());

function onClickButton () {
  // getRandomHexColor();
  console.log(getRandomHexColor());
  bodyEl.style.backgroundColor = `${getRandomHexColor().value}` ;
  spanEl.textContent = getRandomHexColor();
};