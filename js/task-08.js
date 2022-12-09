const loginForm = document.querySelector(".login-form");

const inputFields = document.querySelectorAll("input");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputFields[0].value === "" || inputFields[1].value === "") {
    alert("All fields must be filled in");
  }
});

const {
  email = loginForm.elements.email,
  password = loginForm.elements.password,
} = valuesObject;
console.log(valuesObject);
