document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
      li.classList.toggle("completed");
    });

    const span = document.createElement("span");
    span.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");

    const deleteIcon = document.createElement("img");
    deleteIcon.src = "remove.png";
    deleteIcon.alt = "Delete";
    deleteIcon.style.width = "20px";
    deleteIcon.style.cursor = "pointer";

    removeBtn.appendChild(deleteIcon);
    removeBtn.addEventListener("click", () => {
      taskList.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = "";
  }

  document.querySelector("button").addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
