function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector("body"),
  widgetColorValue: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color"),
};

refs.changeColorBtn.addEventListener("click", onChangeColor);

function onChangeColor(event) {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.widgetColorValue.textContent = refs.body.style.backgroundColor;
}
