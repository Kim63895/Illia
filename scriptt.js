const ul = document.querySelector("ul");
const form = document.querySelector("form");
const userInput = document.querySelector("input");

window.addEventListener("load", initTasks);

function initTasks() {
  const tasks = localStorage.getItem("tasks");
  if (tasks) {
    JSON.parse(tasks).forEach((task) =>
      buildRow(task.name, task.uuid, task.completed)
    );
  }
}

function buildRow(name, uuid, completed = false) {
  const li = document.createElement("li");
  li.textContent = name || "Unknown user";
  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  li.style.gap = "50px";
  li.setAttribute("data-uuid", uuid);

  // Create and style delete button
  li.append(buildButton("Delete", "delete"));

  // Create and set up the checkbox
  const newCheckBox = document.createElement("input");
  newCheckBox.type = "checkbox";
  newCheckBox.checked = completed; // Set initial checked state
  li.style.textDecoration = completed ? "line-through" : "none";

  newCheckBox.addEventListener("change", () => {
    li.style.textDecoration = newCheckBox.checked ? "line-through" : "none";
    updateTasksCheckBox(uuid, newCheckBox.checked);
  });

  li.append(newCheckBox);
  ul.appendChild(li);
}

function buildButton(textButton, textAttribute) {
  const button = document.createElement("button");
  button.setAttribute("data-name", textAttribute);
  button.textContent = textButton;
  return button;
}

// Handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = userInput.value;
  const uuid = +new Date();

  buildRow(value, uuid);

  // Retrieve tasks from local storage, add the new task, and update storage
  const tasksFromLocalStorage = localStorage.getItem("tasks");
  const updatedTasks = tasksFromLocalStorage
    ? [
        ...JSON.parse(tasksFromLocalStorage),
        { name: value || "Unknown user", uuid: uuid, completed: false },
      ]
    : [{ name: value || "Unknown user", uuid: uuid, completed: false }];

  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  form.reset();
});

// Update task completion state in local storage
function updateTasksCheckBox(uuid, completed) {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const updatedTasks = tasks.map((task) =>
    task.uuid === uuid ? { ...task, completed: completed } : task
  );
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

// Handle delete button click
ul.addEventListener("click", (event) => {
  const targetButton = event.target.getAttribute("data-name");
  const targetRow = event.target.closest("li");
  const targetRowUuid = targetRow.getAttribute("data-uuid");

  if (targetButton === "delete") {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const updatedTasks = tasks.filter((task) => task.uuid !== +targetRowUuid);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    targetRow.remove();
  }
});
