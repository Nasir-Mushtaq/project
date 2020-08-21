//Global variable declarations

const list = document.getElementById('taskList')
let saveButton = document.getElementById ("saveTaskButton")
let modalTitle = document.getElementById ("modalTitle")
let modalButton = document.getElementById ("modalButton")
let closeButton = document.getElementById("close")
let addButton = document.getElementById("addTaskButton")

let name = document.querySelector("#taskName")
let description = document.querySelector("#taskDescription")
let date = document.querySelector("#dueDate")
let startTime = document.querySelector("#startTime")
let assignedTo = document.querySelector("#assignedTo")
let category = document.querySelector("#category")
let status = document.querySelector("#status")
// let id

// State declaration
let tasksArray = []

//class Task 
class Task{
  constructor(name, description, date, startTime, assignedTo, category, status, id) {
      this.name = name
      this.description = description
      this.date = date
      this.startTime = startTime
      this.assignedTo = assignedTo
      this.category = category
      this.status = status
      this.id = id
  }
}

//class TaskManager containing add task to storage, get task from storage, add task to page, 
//update task, delete task, validate form functions
class TaskManager{
  constructor() {
}

//Creation of task cards 
addTaskToList(task) {
    const html = tasksArray
  .map( task =>
    `
    <div id = "task${task.id}" class = "task ${task.status}">
    <div class="card time pt-0 mb-2">
    <div class="card-title p-1 ">
    <h5 class ="d-inline ml-1">${task.startTime} - ${task.name} - ${task.category}</h5>
    <a href="#" class="card-link float-right p-0 ml-1 mr-1"><option value="${task.id}"class = "fa fa-trash fa-2x delete"></option></a>
    <a href="#" class="card-link float-right p-0 mr-1" data-toggle="modal" data-target="#abc"><option value="${task.id}" class ="fa fa-edit fa-2x edit"></option></a>
    </div>
    <div class="card-body ml-1 ">
    <p class="card-subtitle ml-1">${task.description}</p>
    </div>
    <div class="card-footer p-1">
    <h6 class="card-subtitle d-inline ml-1 taskDate" value="${task.date}" >${task.date}</h6>
    <h6 class="card-subtitle d-inline ml-4" >Assigned to: ${task.assignedTo}</h6>
    <h6 class="card-subtitle d-inline float-right mr-1" >Status: ${task.status}</h6>
    </div>
    </div>
    </div>
    
     `)
     .join('')
     list.innerHTML = html
}

// Display task on page
displayTasks() {
  const tasks = this.getTasks()
  tasks.forEach((task) => this.addTaskToList(task))
}
// Clear modal form fields
clearFields() {
  document.getElementById("taskName").value = ''
  document.getElementById("taskDescription").value = ''
  document.getElementById("dueDate").value = ''
  document.getElementById("startTime").value = ''
  document.getElementById("assignedTo").value = ''
  document.getElementById("category").value = ''
  document.getElementById("status").value = ''
  }

// Get tasks form storage
getTasks() {
  if(localStorage.getItem('tasks') == null) {
        tasksArray = []
      } else {
        tasksArray = JSON.parse(localStorage.getItem('tasks'))
      }
    return tasksArray
}

// Add tasks to storage
 addTask(task) {
    const tasks = tasksArray
    tasks.push(task)
    localStorage.setItem('tasks',JSON.stringify(tasks))
}

// Update tasks in storage after edit
updateTask(task) {
  const tasks = tasksArray
  localStorage.setItem('tasks',JSON.stringify(tasks))
}

// Delete tasks 
removeTask(id) {
  tasksArray = tasksArray.filter(task => task.id !== id)
  localStorage.setItem('tasks',JSON.stringify(tasksArray))
}
}


// TaskManager class instantiated
taskManager = new TaskManager()

// Function to handle adding of tasks
addButton.onclick = function(e) {
  e.preventDefault()
  let taskName = name.value
  let taskDescription = description.value
  let taskDate = date.value
  let taskStartTime = startTime.value
  let taskAssignedTo = assignedTo.value
  let taskCategory = category.value
  let taskStatus = status.value
  let taskId = Date.now()

// Tasks class instantiated
const task = new Task(taskName,taskDescription,taskDate,taskStartTime,taskAssignedTo,taskCategory,taskStatus,taskId)

taskManager.addTask(task)
taskManager.addTaskToList(task)
taskManager.clearFields()
location.reload()
}

// Function to run when add new task button is clicked
  modalButton.onclick = function() {
  addButton.style.display="block"
  saveButton.style.display="none"
  modalTitle.innerText = "Add new Task"
}

// Functions for adding, editing and deleting tasks when relevant buttons are clicked
list.addEventListener('click', function(e) {
  let clickedId = parseInt(e.target.value)
// Delete button
  if (e.target.closest('.delete')) {
    taskManager.removeTask(clickedId)
    // taskManager.displayTasks()
    location.reload()
  }
  // Edit button
  if (e.target.closest('.edit')) {
    const clickedTask = tasksArray.find((t) => clickedId == t.id)
    
    addButton.style.display="none"
    saveButton.style.display="block"
    modalTitle.innerText = "Update Task"

    name.value = clickedTask.name
    description.value = clickedTask.description
    date.value = clickedTask.date
    startTime.value = clickedTask.startTime
    assignedTo.value = clickedTask.assignedTo
    category.value = clickedTask.category
    status.value = clickedTask.status
    id = clickedTask.id

    // Save button
    saveButton.onclick = function(){

      updatedTask = {
        name: name.value,
        description: description.value,
        date: date.value,
        startTime: startTime.value,
        assignedTo: assignedTo.value,
        category: category.value,
        status: status.value,
        id: clickedId
      }
      // Find array index to update
      let index = tasksArray.map(function(el) {
        return el.id
      }).indexOf(id)
      tasksArray.splice(index, 1, updatedTask)
      taskManager.updateTask()
      taskManager.clearFields()
      taskManager.displayTasks()
  }
  }  
})

closeButton.onclick = function(){
  taskManager.clearFields()
  // clearValidation()
  location.reload()
}


const toDoButton = document.querySelector(".b1")
toDoButton.onclick = function() {

  taskManager.displayTasks()

  progressTasks = document.querySelectorAll(".progress")
  reviewTasks = document.querySelectorAll(".Review")
  completedTasks = document.querySelectorAll(".Completed")
  
  for (let i = 0; i < reviewTasks.length; i++) {
    reviewTasks[i].style.display = "none"
  }  
        for (let i = 0; i < completedTasks.length; i++) {
          completedTasks[i].style.display = "none"
        } 
          for (let i = 0; i < progressTasks.length; i++) {
            progressTasks[i].style.display = "none"
          }
}

const progressButton = document.querySelector(".b2")
progressButton.onclick = function() {

  taskManager.displayTasks()

  toDoTasks = document.querySelectorAll(".do")
  reviewTasks = document.querySelectorAll(".Review")
  completedTasks = document.querySelectorAll(".Completed")

  for (let i = 0; i < reviewTasks.length; i++) {
    reviewTasks[i].style.display = "none"
  }  
        for (let i = 0; i < completedTasks.length; i++) {
          completedTasks[i].style.display = "none"
        } 
          for (let i = 0; i < toDoTasks.length; i++) {
            toDoTasks[i].style.display = "none"
          }
}

const reviewButton = document.querySelector(".b3")
reviewButton.onclick = function() {

  taskManager.displayTasks()

  toDoTasks = document.querySelectorAll(".do")
  progressTasks = document.querySelectorAll(".progress")
  completedTasks = document.querySelectorAll(".Completed")

  for (let i = 0; i < progressTasks.length; i++) {
    progressTasks[i].style.display = "none"
  }  
        for (let i = 0; i < completedTasks.length; i++) {
          completedTasks[i].style.display = "none"
        } 
          for (let i = 0; i < toDoTasks.length; i++) {
            toDoTasks[i].style.display = "none"
          }
}

const completeButton = document.querySelector(".b4")
completeButton.onclick = function() {

  taskManager.displayTasks()

  toDoTasks = document.querySelectorAll(".do")
  reviewTasks = document.querySelectorAll(".Review")
  progressTasks = document.querySelectorAll(".progress")

  for (let i = 0; i < reviewTasks.length; i++) {
    reviewTasks[i].style.display = "none"
  }  
        for (let i = 0; i < progressTasks.length; i++) {
          progressTasks[i].style.display = "none"
        } 
          for (let i = 0; i < toDoTasks.length; i++) {
            toDoTasks[i].style.display = "none"
          }
}

const allButton = document.querySelector(".b0")
allButton.onclick = function() {
  taskManager.displayTasks()
}

// const tmrwButton = document.querySelector(".b5")
// tmrwButton.onclick = function () {
//   taskDate = document.querySelectorAll(".taskDate").textContent
//   date = taskDate.toString
//   console.log(date.toString())
// }
// Load tasks from storage on page load
document.addEventListener('DOMContentLoaded', taskManager.displayTasks())







       
