const loginForm = document.querySelector(".login-form");

const inputFields = document.querySelectorAll("input");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputFields[0].value === "" || inputFields[1].value === "") {
    alert("All fields must be filled in");
  }
  const dataLog = {
    email: event.target[0].value,
    password: event.target[1].value,
  };
  console.log(dataLog);
  event.target.reset();
});
