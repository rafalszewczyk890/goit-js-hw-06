const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length >= validationInput.dataset.length) {
    validationInput.classList.replace("invalid", "valid");
  } else if (event.currentTarget.value.length === 0) {
    validationInput.classList.remove("valid", "invalid");
  } else {
    validationInput.classList.add("invalid");
  }
});
