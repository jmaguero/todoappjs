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
}