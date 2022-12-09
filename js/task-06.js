const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length >= 6) {
    validationInput.classList.replace("invalid", "valid");
  } else {
    validationInput.classList.add("invalid");
  }
});
