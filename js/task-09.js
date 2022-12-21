function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChange = document.querySelector('.change-color');

const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');


buttonChange.addEventListener('click', onClickButton);


function onClickButton () {
  // console.log("клік");
  getRandomHexColor();
  console.log(getRandomHexColor());
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
};