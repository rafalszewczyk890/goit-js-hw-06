const sizeControl = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

let sizeValue = `${sizeControl.value}px`;
text.style.fontSize = sizeValue;

sizeControl.addEventListener("input", () => {
  let sizeValue = `${sizeControl.value}px`;
  text.style.fontSize = sizeValue;
});
