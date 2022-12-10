function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeButton = document.querySelector("button");

const documentBody = document.querySelector("body");

const spanColor = document.querySelector(".color");

changeButton.addEventListener("click", () => {
  let randomColor = getRandomHexColor();
  documentBody.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
  console.log(documentBody);
});
