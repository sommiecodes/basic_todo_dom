let addTodoButton = document.getElementById("addTodo");
let todoContainer = document.getElementById("todoContainer");
let inputField = document.getElementById("inputField");

addTodoButton.addEventListener("click", function () {
  var list = document.createElement("li");
  list.classList.add("list-styling");
  list.innerText = inputField.value;
  inputField.value = "";

  list.addEventListener("click", function () {
    const decoration = list.style.textDecoration;
    if (decoration == "line-through") {
      list.style.textDecoration = "none";
    } else {
      list.style.textDecoration = "line-through";
    }
  });

  list.addEventListener("dblclick", function () {
    todoContainer.removeChild(list);
  });

  todoContainer.appendChild(list);
});
