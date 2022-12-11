function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElem = document.querySelector("input");

const boxesDiv = document.querySelector("#boxes");

const createButton = document.querySelector("button[data-create]");

const destroyButton = document.querySelector("button[data-destroy]");

createButton.addEventListener("click", (e) => {
  const boxNumber = inputElem.value;
  for (let i = 0; i < boxNumber; i += 1) {
    const increase = 10 * i;
    boxesDiv.insertAdjacentHTML(
      "afterbegin",
      `<div style="background-color: ${getRandomHexColor()}; height: ${
        30 + increase
      }px; width: ${30 + increase}px"></div>`
    );
  }
});

destroyButton.addEventListener("click", (e) => {
  boxesDiv.innerHTML = "";
});
