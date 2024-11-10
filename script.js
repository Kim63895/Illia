const ul = document.querySelector("ul");
const form = document.querySelector("form");
const userInput = document.querySelector("input");

window.addEventListener("load", initTasks);

function initTasks() {
  const tasks = localStorage.getItem("tasks");

  if (tasks) {
    JSON.parse(tasks).forEach((task) => buildRow(task.name, task.uuid));
  }
}
function buildRow(name, uuid) {
  const li = document.createElement("li");
  li.textContent = name || "Unknown user";
  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  li.style.gap = "50px";
  li.setAttribute("data-uuid", uuid);



  li.append(buildButton("Delete", "delete"));
  const newCheckBox = document.createElement("input");
  newCheckBox.type = "checkbox";
  newCheckBox.addEventListener("change", () => {
    li.style.textDecoration = newCheckBox.checked ? "line-through" : "none";
    updateTasksCheckBox(uuid, newCheckBox.checked)
  });

  ul.appendChild(li);
  li.append(newCheckBox);
}

function buildButton(textButton, textAttribute) {
  const button = document.createElement("button");
  button.setAttribute("data-name", textAttribute);
  button.textContent = textButton;
  return button;
}
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = userInput.value;
  const uuid = +new Date();

  buildRow(value, uuid);
  const updatTaskFromLocalStoreg = localStorage.getItem();
  const tasksFromLocalStorage = localStorage.getItem("tasks");
  localStorage.setItem(
    "tasks",
    usersFromLocalStorage
      ? JSON.stringify([
          ...JSON.parse(tasksFromLocalStorage),
          { name: value || "Unknown user", uuid: uuid },
        ])
      : JSON.stringify([{ name: value || "Unknown user", uuid: uuid }])
  );
  form.reset();
});

ul.addEventListener('click', event => {
    const targetButton = event.target.getAttribute('data-name');
    const targetRow = event.target.closest("li");
    const targetRowUuid = targetRow.getAttribute("data-uuid");
    switch (targetButton) {
        case "delete":
      const localStorageTasks = JSON.parse(localStorage.getItem('tasks'));
      const localStorageTasksWithoutDeleted = localStorageTasks.filter(element => element.uuid !== +targetRowUuid)
      localStorage.setItem('tasks', JSON.stringify(localStorageTasksWithoutDeleted));
      targetRow.remove();
      break;
    default:
      break;
  
    }
})

