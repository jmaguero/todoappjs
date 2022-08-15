function updateCounters() {
  //get total todos element
  const total = document.querySelector(".total-count");
  //count #class todo
  const todosCount = document.querySelectorAll(".todo").length;
  //shows total on document.
  total.innerHTML = todosCount;

  //Completed todos
  const completedCounter = document.getElementById("completed-count");
  const completedTodos = document.getElementsByClassName("completed").length;
  completedCounter.innerHTML = completedTodos;

  //Uncompleted todos
  const todosNotdone = document.getElementById("todo-count");
  const uncompletedTodos = todosCount - completedTodos;
  todosNotdone.innerHTML = uncompletedTodos;

};

updateCounters();

function toggleDone(event) {
  const checkbox = event.currentTarget;

  //add checked checkboxes to count
  if (checkbox.checked) {
    checkbox.parentElement.parentElement.className = "todo completed";
  } else {
    checkbox.parentElement.parentElement.className = "todo";
  }

  updateCounters();
}

const checkboxes = document.querySelectorAll(".todo input");

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("change", toggleDone);
};

function createTodo(title) {
  // create a label
  const label = document.createElement("label");
  // create a checkbox
  const checkbox = document.createElement("input")
  checkbox.type = "checkbox";
  checkbox.checked = false;
  // add the "change" event listener to the checkbox
  checkbox.addEventListener('change', toggleDone);
  // and append the checkbox to the label
  label.appendChild(checkbox);
  // create a text node with the given title
  const labelText = document.createTextNode(" " + title);
  // and append the text node to the label
  label.appendChild(labelText);

  // create a list item
  const listItem = document.createElement("li");
  listItem.className = "todo"
  // and append the label to list item
  listItem.appendChild(label);
  // append the list item to the todo list
  const list = document.getElementById("todolist");
  list.appendChild(listItem);
}

document
  .querySelector("form")
  .addEventListener("submit", function addNewTodo(event) {
    event.preventDefault();

    const inputField = document.querySelector("#new-todo");
    const newTodoTitle = inputField.value;
    createTodo(newTodoTitle);

    // reset the value of the inputField to make it empty and
    // ready to create new todos
    inputField.value = null;

    updateCounters();
  });

function cleanUpDoneTodos() {
  // get all the "done" items
  const doneItems = document.querySelectorAll(".completed");
  // loop through the "done" todo items
  for (let i = 0; i < doneItems.length; i++) {
    // and remove them from the DOM
    doneItems[i].remove();

  }

  // update the counters
  updateCounters();
}

// add an event listener for a click on the link to the cleanUpDoneTodos function
document.getElementById("clean-up").addEventListener("click", cleanUpDoneTodos);