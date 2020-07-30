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
<div class="card time">
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


