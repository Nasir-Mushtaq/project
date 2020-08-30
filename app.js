//Global variable declarations

import TaskManager from "./taskmanager.js"
import Validate from "./validation.js"
import image from "/images/empty.png"

const list = document.getElementById('taskList')
const saveButton = document.getElementById ("saveTaskButton")
const modalTitle = document.getElementById ("modalTitle")
const modalButton = document.getElementById ("modalButton")
const closeButton = document.getElementById("close")
const addButton = document.getElementById("addTaskButton")

let name = document.querySelector("#taskName")
let description = document.querySelector("#taskDescription")
let date = document.querySelector("#dueDate")
let startTime = document.querySelector("#startTime")
let assignedTo = document.querySelector("#assignedTo")
let category = document.querySelector("#category")
let status = document.querySelector("#status")

const toDoButton = document.querySelector(".b1")
const progressButton = document.querySelector(".b2")
const reviewButton = document.querySelector(".b3")
const completeButton = document.querySelector(".b4")
const todayButton = document.querySelector(".b5")
const tomorrowButton = document.querySelector(".b6")
const plus2Button = document.querySelector(".b7")
const plus3Button = document.querySelector(".b8")
const allButton = document.querySelector(".b0")

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

// TaskManager class instantiated
const taskManager = new TaskManager(list)
const validate = new Validate(name, description, date, startTime, assignedTo, category, status)



// Function to handle adding of tasks
addButton.onclick = function(e) {
  e.preventDefault()
  let error = document. querySelector("#add-error")
  if(!validate.validateForm()) {
    addButton.setAttribute("data-dismiss", "")
    error.innerHTML = "All fields are required!!"
    console.log("stuck")
  }
  else {  
    addButton.setAttribute("data-dismiss", "modal")

  console.log("form validation")
  
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
}

// Function to run when add new task button is clicked
modalButton.onclick = function() {
  addButton.style.display="block"
  saveButton.style.display="none"
  modalTitle.innerText = "Add new Task"

  name.addEventListener("blur", function () {
    validate.validateName()
  }) 
  description.addEventListener("blur", function () {
    validate.validateDescription()
  }) 
  date.addEventListener("blur", function () {
    validate.validateDate()
  })
  startTime.addEventListener("blur", function () {
    validate.validateTime()
  })
  assignedTo.addEventListener("blur", function () {
    validate.validateAssignedTo()
  })
  category.addEventListener("blur", function () {
    validate.validateCategory()
  })
  status.addEventListener("blur", function () {
    validate.validateStatus()
  })
}
// Functions for adding, editing and deleting tasks when relevant buttons are clicked
taskManager.list.addEventListener('click', function(e) {
  let clickedId = parseInt(e.target.value)
// Delete button
  if (e.target.closest('.delete')) {
    taskManager.removeTask(clickedId)
    // taskManager.displayTasks()
    location.reload()
  }
  // Edit button
  if (e.target.closest('.edit')) {
    const clickedTask = taskManager.tasksArray.find((t) => clickedId == t.id)
    
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
    let id = clickedTask.id

    // Save button
    saveButton.onclick = () => {

      if(!validate.validateForm()) {
        saveButton.setAttribute("data-dismiss", "")
        console.log("stuck")
      }
      else {  
        saveButton.setAttribute("data-dismiss", "modal")
        console.log("hello")

     let updatedTask = {
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
      let index = taskManager.tasksArray.map(function(el) {
        return el.id
      }).indexOf(id)
      taskManager.tasksArray.splice(index, 1, updatedTask)
      taskManager.updateTask()
      taskManager.clearFields()
      taskManager.displayTasks()
      location.reload()

    }
  }
  }  
})

//Close button 
closeButton.onclick = () => {  
  taskManager.clearFields()
  location.reload()
}

// Filter by status
toDoButton.onclick = () => {
  taskManager.displayTasks()
  
    const taskStatus = document.querySelectorAll(".taskStatus")
    console.log(taskStatus)
    let status = Object.values(taskStatus).filter(task => task.innerHTML == "Status: To do")
    let remaining = Object.values(taskStatus).filter(task => !status.includes(task))

    for (let i = 0; i < remaining.length; i++) {
      remaining[i].parentElement.parentElement.style.display = "none"
}
}

//Tasks in progress
progressButton.onclick = () => {
  taskManager.displayTasks()
  const taskStatus = document.querySelectorAll(".taskStatus")

  let status = Object.values(taskStatus).filter(task => task.innerHTML == "Status: In Progress")
  let remaining = Object.values(taskStatus).filter(task => !status.includes(task))

  for (let i = 0; i < remaining.length; i++) {
    remaining[i].parentElement.parentElement.style.display = "none"
}
}

//Tasks in review
reviewButton.onclick = () => {
  taskManager.displayTasks()
  const taskStatus = document.querySelectorAll(".taskStatus")

  let status = Object.values(taskStatus).filter(task => task.innerHTML == "Status: Review")
  let remaining = Object.values(taskStatus).filter(task => !status.includes(task))

  for (let i = 0; i < remaining.length; i++) {
    remaining[i].parentElement.parentElement.style.display = "none"
}
}

//Tasks completed
completeButton.onclick = () => {
  taskManager.displayTasks()
  const taskStatus = document.querySelectorAll(".taskStatus")

  let status = Object.values(taskStatus).filter(task => task.innerHTML == "Status: Completed")
  let remaining = Object.values(taskStatus).filter(task => !status.includes(task))

  for (let i = 0; i < remaining.length; i++) {
    remaining[i].parentElement.parentElement.style.display = "none"
}
}

// Display all tasks
allButton.onclick = () => {
  taskManager.displayTasks()
}

// Date filter
// Get today's date
let todaysDate = () => {
let today = new Date()
let day = today.getDate() 
let month = today.getMonth() + 1
let yyyy = today.getFullYear()

if (day < 10) { 
    day = '0' + day; 
} 
if (month < 10) { 
    month = '0' + month; 
} 
today = yyyy + '-' + month + '-' + day; 
return today
} 

// get tomorrows date
let tmrwsDate = () => {
  let tomorrow = new Date();
  tomorrow.setDate(new Date().getDate()+1);
  let day = tomorrow.getDate() 
  let month = tomorrow.getMonth() + 1
  let yyyy = tomorrow.getFullYear()

  if (day < 10) { 
    day = '0' + day; 
  } 
  if (month < 10) { 
    month = '0' + month; 
  } 
  tomorrow = yyyy + '-' + month + '-' + day; 
  return tomorrow
}

// get plus 2 days date
let plus2Days = () => {
  let tomorrow = new Date();
  tomorrow.setDate(new Date().getDate()+2);
  let day = tomorrow.getDate() 
  let month = tomorrow.getMonth() + 1
  let yyyy = tomorrow.getFullYear()

  if (day < 10) { 
    day = '0' + day; 
  } 
  if (month < 10) { 
    month = '0' + month; 
  } 
  tomorrow = yyyy + '-' + month + '-' + day; 
  return tomorrow
}

// get plus 3 days date 
let plus3Days = () => {
  let tomorrow = new Date();
  tomorrow.setDate(new Date().getDate()+3);
  let day = tomorrow.getDate() 
  let month = tomorrow.getMonth() + 1
  let yyyy = tomorrow.getFullYear()

  if (day < 10) { 
    day = '0' + day; 
  } 
  if (month < 10) { 
    month = '0' + month; 
  } 
  tomorrow = yyyy + '-' + month + '-' + day; 
  return tomorrow
}

//Today's tasks

todayButton.onclick = () => {
    taskManager.displayTasks()
    const taskDate = document.querySelectorAll(".taskDate")

    let date = Object.values(taskDate).filter(task => task.innerHTML == todaysDate())
    let remaining = Object.values(taskDate).filter(task => !date.includes(task))

    for (let i = 0; i < remaining.length; i++) {
      remaining[i].parentElement.parentElement.parentElement.style.display = "none"
  }  
}

// //Tomorrows tasks
tomorrowButton.onclick = () => {
  taskManager.displayTasks()
  const taskDate = document.querySelectorAll(".taskDate")

  let date = Object.values(taskDate).filter(task => task.innerHTML == tmrwsDate())
  let remaining = Object.values(taskDate).filter(task => !date.includes(task))

  for (let i = 0; i < remaining.length; i++) {
    remaining[i].parentElement.parentElement.parentElement.style.display = "none"
}  
}

plus2Button.onclick = () => {
  taskManager.displayTasks()
  const taskDate = document.querySelectorAll(".taskDate")

  let date = Object.values(taskDate).filter(task => task.innerHTML == plus2Days())
  let remaining = Object.values(taskDate).filter(task => !date.includes(task))

  for (let i = 0; i < remaining.length; i++) {
    remaining[i].parentElement.parentElement.parentElement.style.display = "none"
}  
}

plus3Button.onclick = () => {
  taskManager.displayTasks()
  const taskDate = document.querySelectorAll(".taskDate")

  let date = Object.values(taskDate).filter(task => task.innerHTML == plus3Days())
  let remaining = Object.values(taskDate).filter(task => !date.includes(task))

  for (let i = 0; i < remaining.length; i++) {
    remaining[i].parentElement.parentElement.parentElement.style.display = "none"
}  
}

let findDay = () => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
  const todayPlus2 = days[new Date(plus2Days()).getDay()]
  const todayPlus3 = days[new Date(plus3Days()).getDay()]
  plus2Button.innerText = todayPlus2
  plus3Button.innerText = todayPlus3
}

 // Display image when there are no tasks in Array

let emptyList = () => {
  
  let html = `
  <div>
  <img src="${image}">
  </div>`
  if(list.innerHTML === ""){
    list.innerHTML = html
  }
}
// Load tasks from storage on page load
document.addEventListener('DOMContentLoaded', findDay(), emptyList(), taskManager.displayTasks())

