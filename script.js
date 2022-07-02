//vars
let newTask = document.querySelector("#new-task");
let form = document.querySelector("form");
let todoUl = document.querySelector("#items");
let completeUl = document.querySelector(".complete-list ul");

//functions
let createTask = function (task) {
  let listItem = document.createElement("li");
  let checkBox = document.createElement("input");
  let label = document.createElement("label");

  label.innerText = task;
  checkBox.type = "checkbox";
  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  return listItem;
};

let addTask = function (event) {
  event.preventDefault();
  let listItem = createTask(newTask.value);
  todoUl.appendChild(listItem);
  newTask.value = "";
  inCompleteItem(listItem, completeTask);
};

let inCompleteItem = function (taskItem, checkBoxChilck) {
  let checkBox = taskItem.querySelector('input[type="checkbox"]');
  checkBox.onchange = checkBoxChilck;
};

let completeTask = function () {
  let listItem = this.parentNode;
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);

  let checkBox = listItem.querySelector('input[type="checkbox"]');
  checkBox.remove();

  completeUl.appendChild(listItem);
  CompleteItem(listItem, deleteTask);
};

let CompleteItem = function (taskItem, deleteBtnClick) {
  let deletebtn = taskItem.querySelector(".delete");
  deletebtn.onclick = deleteBtnClick;
};

let deleteTask = function () {
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
};

for (let i = 0; i < todoUl.children.length; i++) {
  inCompleteItem(todoUl.children[i], completeTask);
}

for (let i = 0; i < completeUl.children.length; i++) {
  CompleteItem(completeUl.children[i], deleteTask);
}

form.addEventListener("submit", addTask);
