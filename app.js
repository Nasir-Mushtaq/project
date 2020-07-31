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
  <div class="card-body pt-3">
  <h5 class="card-title">${startTime} - ${name}</h5>
  <h6 class="card-subtitle d-inline" >${description}</h6>
  <h6 class="card-subtitle d-inline ml-2" >${assignedTo}</h6>
  <h6 class="card-subtitle d-inline ml-2" >${dueDate}</h6>
  <h6 class="card-subtitle d-inline ml-2" >${finishTime}</h6>
  <h6 class="card-subtitle d-inline ml-2" >${status}</h6>
  <a href="#" class="card-link float-right p-0 ml-1"><i class="fa fa-trash fa-2x"></i></a>
  <a href="#" class="card-link float-right p-0 mr-1"><i class="fa fa-edit fa-2x"></i></a>
  </div>
</div>`;

const taskElement = document.createRange().createContextualFragment(html);
taskContainer.append(taskElement);
}
newTask(
  name = "Daily opening",
  description = "Generation JWD course",
  assignedTo = "",
  dueDate = "",
  startTime = "9 AM",
  finishTime = "",
);
newTask(
  name = "Async task",
  description = "Generation JWD course",
  assignedTo = "",
  dueDate = "",
  startTime = "9:15 AM",
  finishTime = "",
);
newTask(
  name = "Zoom with Anindha",
  description = "Generation JWD course",
  assignedTo = "",
  dueDate = "",
  startTime = "11 AM",
  finishTime = "",
);
newTask(
  name = "Lunch",
  description = "Generation JWD course",
  assignedTo = "",
  dueDate = "",
  startTime = "12:30 PM",
  finishTime = "",
);
newTask(
  name = "Async task",
  description = "Generation JWD course",
  assignedTo = "",
  dueDate = "",
  startTime = "1:00 PM",
  finishTime = "",
);newTask(
  name = "Zoom with Anindha",
  description = "Generation JWD course",
  assignedTo = "",
  dueDate = "",
  startTime = "3 PM",
  finishTime = "",
);newTask(
  name = "Async task",
  description = "Generation JWD course",
  assignedTo = "",
  dueDate = "",
  startTime = "4 PM",
  finishTime = "",
);newTask(
  name = "Daily reflection",
  description = "Generation JWD course",
  assignedTo = "",
  dueDate = "",
  startTime = "4:45 PM",
  finishTime = "",
);

/* <ul class="list-inline float-right"> 
      <li class="list-inline-item">
      <button class="btn btn-success btn-sm" type="button" data-toggle="tooltip"  title="Edit"><i class="fa fa-edit"></i></button>
      </li>
      <li class="list-inline-item">
      <button class="btn btn-danger btn-sm" type="button" data-toggle="tooltip"  title="Delete"><i class="fa fa-trash"></i></button>
      </li>
      </ul>*/