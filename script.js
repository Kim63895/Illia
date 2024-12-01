$(document).on("click", ".btn-danger", function (event) {
  const currentItem = $(event.currentTarget).closest("li");

  const taskText = currentItem.text().replace("View Task", "");

  $(".modal .modal-title").text("Task Details");
  $(".modal .modal-body").text(taskText);

  $(".modal").css("display", "block").fadeTo(1000, 1);
});

$(".btn-secondary, .close").on("click", function () {
  $(".modal").fadeTo(1000, 0, function () {
    $(this).css("display", "none");
  });
});

const ul = $("#taskList");
const form = $("form");
const input = $("#taskInput");

form.on("submit", function (event) {
  event.preventDefault();

  const newTaskText = input.val().trim(); 
  if (newTaskText === "") return;

  const newTask = $(`
    <li class="list-group-item d-flex justify-content-between align-items-center">
      ${newTaskText}
      <button class="btn btn-danger btn-sm">View Task</button>
    </li>`);

  ul.append(newTask);
  input.val(""); 
});
