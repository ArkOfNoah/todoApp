const nameInput = document.querySelector("#name");
const loginForm = document.querySelector(".loginForm");
const nameScreen = document.querySelector(".nameForm h2:nth-child(2)");
const nameResetBtn = document.querySelector(".nameForm button");
const nameForm = document.querySelector(".nameForm");
const todoContainerD = document.querySelector(".todo-container");

const USER_NAME = "username";
const HIDDEN_CLASS = "hidden";

const printName = function () {
  loginForm.classList.add(HIDDEN_CLASS);

  const name = localStorage.getItem(USER_NAME);
  nameScreen.innerHTML = `${name}`;

  nameForm.classList.remove(HIDDEN_CLASS);
  todoContainerD.classList.remove(HIDDEN_CLASS);
};

const submitLS = function (event) {
  event.preventDefault();

  localStorage.setItem(USER_NAME, nameInput.value);
  printName();
};

if (localStorage.getItem(USER_NAME) === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
} else {
  printName();
}

loginForm.addEventListener("submit", submitLS);

// name reset

const resetName = function (event) {
  event.preventDefault();

  todoContainerD.classList.add(HIDDEN_CLASS);
  localStorage.removeItem(USER_NAME);
  loginForm.classList.remove(HIDDEN_CLASS);
  nameForm.classList.add(HIDDEN_CLASS);
};

nameResetBtn.addEventListener("click", resetName);
