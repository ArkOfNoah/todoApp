const todoContainer = document.querySelector(".todo-container");
const todoForm = document.querySelector("#todoForm");
const todoList = document.querySelector("#todoList");
const todoInput = document.querySelector("#todoInput");

// 로컬 스토리지에 등록할 배열
let todoArr = [];
const TODO_KEY = "todo";

// 디스플레이, 로컬 스토리지에서 삭제
const deleteTodo = function (event) {
  const deleteList = event.target.parentElement;
  deleteList.remove();

  const nowRemain = todoList.children;

  // 로컬 스토리지 업데이트
  (function () {
    if (nowRemain.length > 0) {
      todoArr = [];
      for (let i = 0; i < nowRemain.length; i++) {
        todoArr.push(nowRemain[i].children[0].innerText);
      }
      localStorage.setItem(TODO_KEY, JSON.stringify(todoArr));
    } else {
      localStorage.setItem(TODO_KEY, "");
      todoArr = [];
    }
  })();
};

const registLS = function () {
  localStorage.setItem(TODO_KEY, JSON.stringify(todoArr));
};

// html 생성후 디스플레이 표시
const displayTodo = function (element = 0) {
  const li = document.createElement("li");
  const span = document.createElement("span");

  // 기본으로 element 가 입력되지 않았을 때는 0 falsy값 아니면 truthy

  span.innerText = element !== 0 ? element : todoInput.value;
  const btn = document.createElement("button");
  btn.innerText = "X";
  btn.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
};

// 등록 (디스플레이 및 로컬스토리지)
const registTodo = function (event) {
  event.preventDefault();

  // todoArr 배열에도 추가
  todoArr.push(todoInput.value);
  displayTodo();
  registLS(todoArr);

  // input clear
  todoInput.value = "";
  todoInput.focus();
};

todoForm.addEventListener("submit", registTodo);

// 로컬 스토리지에 todoList 가 저장되어 있으면 표시 해주기

if (localStorage.getItem(TODO_KEY) !== "") {
  const parsedTodo = JSON.parse(localStorage.getItem(TODO_KEY));
  todoArr = JSON.parse(localStorage.getItem(TODO_KEY));
  if (parsedTodo !== null) {
    parsedTodo.forEach((element) => {
      displayTodo(element);
    });
  } else {
    todoArr = [];
  }
}
