function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const imputNumber = createBtn.previousElementSibling;
const boxesContainer = document.querySelector("#boxes");

let amount = 0;

imputNumber.addEventListener("input", (event) => {
  amount = Number(event.currentTarget.value);
});

createBtn.addEventListener("click", () => {
  if (amount !== 0) {
    createBoxes(amount);
  }
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const boxes = [];
  let boxSize = 30;
  for (let i = 0; i <= amount; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    boxes.push(box);
    boxSize += 10;
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
