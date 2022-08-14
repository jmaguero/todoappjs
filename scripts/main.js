function updateCounters() {
  //get total todos element
  const total = document.querySelector(".total-count")
  //count #class todo
  const todosCount = document.querySelectorAll(".todo").length
  //shows total on document.
  total.innerHTML = todosCount;
}

updateCounters();