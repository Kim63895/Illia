import "../scss/style.scss";
("use strict");

function updateTaskList() {
  var ul = $("#taskList");
  ul.empty();
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(function (task) {
    var newTask = $(`
      <li class="list-group-item d-flex justify-content-between align-items-center">
        ${task.text}
        <button class="btn btn-danger btn-sm">View Task</button>
      </li>
    `);
    ul.append(newTask);
  });
}

$(document).ready(function () {
  updateTaskList();
});

$(document).on("click", ".btn-danger", function (event) {
  var currentItem = $(event.currentTarget).closest("li");
  var taskText = currentItem.text().replace("View Task", "");
  $(".modal .modal-title").text("Task Details");
  $(".modal .modal-body").text(taskText);
  $(".modal").css("display", "block").fadeTo(1000, 1);
});

$(".btn-secondary, .close").on("click", function () {
  $(".modal").fadeTo(1000, 0, function () {
    $(this).css("display", "none");
  });
});

var ul = $("#taskList");
var form = $("form");
var input = $("#taskInput");

form.on("submit", function (event) {
  event.preventDefault();
  var newTaskText = input.val().trim();
  if (newTaskText === "") return;

  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.push({ text: newTaskText });

  localStorage.setItem("tasks", JSON.stringify(tasks));

  updateTaskList();

  input.val("");
});
