let counterValue = 0;

const value = document.querySelector(`#value`);

const decreaseButton = document.querySelector(
  `button[data-action="decrement"]`
);
const increaseButton = document.querySelector(
  `button[data-action="increment"]`
);

decreaseButton.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

increaseButton.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
