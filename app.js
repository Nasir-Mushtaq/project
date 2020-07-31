const taskContainer = document.querySelector('#taskList');
const taskModalAddButton = document.querySelector('#addNewTask');

taskModalAddButton.addEventListener("click", addButtonClicked);

function addButtonClicked() {
    const name = document.querySelector("#taskName").value;
    const description = document.querySelector("#taskDescription").value;
    const dueDate = document.querySelector("#dueDate").value;
    const startTime = document.querySelector("#startTime").value;
    const finishTime = document.querySelector("#finishTime").value;
    const assignedTo = document.querySelector("#assignedTo").value;
    // const category = document.querySelector("#dropdownMenuButton").value;
    // const status = document.querySelector("#status").value;
    

   newTask(name, description, assignedTo, dueDate, startTime, finishTime);
}

function newTask(name, description, assignedTo, dueDate, startTime, finishTime) {
const html = `
<div class="card time pt-0">
  <div class="card-body">
  <h5 class="card-title">${name} - ${startTime}</h5>
  <h6 class="card-subtitle >${description}</h6>
  <h6 class="card-subtitle >${assignedTo}</h6>
  <h6 class="card-subtitle >${dueDate}</h6>
  <h6 class="card-subtitle >${finishTime}</h6>
  <h6 class="card-subtitle >${status}</h6>
  </div>
</div>`;

const taskElement = document.createRange().createContextualFragment(html);
taskContainer.append(taskElement);
}
newTask(
  name = "Daily opening",
  description = "",
  assignedTo = "Nasir",
  dueDate = "",
  startTime = "9 AM",
  finishTime = "",
);
newTask(
  name = "Async task",
  description = "",
  assignedTo = "Nasir",
  dueDate = "",
  startTime = "9:15 AM",
  finishTime = "",
);
newTask(
  name = "Zoom with Anindha",
  description = "",
  assignedTo = "Nasir",
  dueDate = "",
  startTime = "11 AM",
  finishTime = "",
);
newTask(
  name = "Lunch",
  description = "",
  assignedTo = "Nasir",
  dueDate = "",
  startTime = "12:30 PM",
  finishTime = "",
);
newTask(
  name = "Async task",
  description = "",
  assignedTo = "Nasir",
  dueDate = "",
  startTime = "1:00 PM",
  finishTime = "",
);newTask(
  name = "Zoom with Anindha",
  description = "",
  assignedTo = "Nasir",
  dueDate = "",
  startTime = "3 PM",
  finishTime = "",
);newTask(
  name = "Async task",
  description = "",
  assignedTo = "Nasir",
  dueDate = "",
  startTime = "4 PM",
  finishTime = "",
);newTask(
  name = "Daily reflecion",
  description = "",
  assignedTo = "Nasir",
  dueDate = "",
  startTime = "4:45 pM",
  finishTime = "",
);

