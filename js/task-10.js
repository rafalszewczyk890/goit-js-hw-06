function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElem = document.querySelector("input");

const boxesDiv = document.querySelector("#boxes");

const createButton = document.querySelector("button[data-create]");

const destroyButton = document.querySelector("button[data-destroy]");

let boxSize = 30;

const createBox = () => {
  const boxNumber = inputElem.value;
  for (let i = 0; i < boxNumber; i += 1) {
    boxesDiv.insertAdjacentHTML(
      "beforeend",
      `<div style="background-color: ${getRandomHexColor()}; height: ${boxSize}px; width: ${boxSize}px"></div>`
    );
    boxSize += 10;
  }
};

const destroyBox = () => {
  boxesDiv.innerHTML = "";
  boxSize = 30;
};

createButton.addEventListener("click", createBox);

destroyButton.addEventListener("click", destroyBox);
