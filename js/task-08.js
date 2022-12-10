const loginForm = document.querySelector(".login-form");

const inputFields = document.querySelectorAll("input");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputFields[0].value === "" || inputFields[1].value === "") {
    alert("All fields must be filled in");
  }
  const dataLog = {
    [event.target[0].name]: event.target[0].value,
    [event.target[1].name]: event.target[1].value,
  };
  console.log(dataLog);
  event.target.reset();
});
