export default class TaskManager{
    constructor(list) {
        this.tasksArray = []
        this.list = list
  }
  
  //Creation of task cards 
  addTaskToList(task) {
      const html = this.tasksArray.map( task =>
      `
      <div id = "task${task.id}" class = "${task.status}" task >
      <div class="time card">
      <div>
      <div class="header">
      <h6 class="d-inline">${task.startTime} </h6>
      <h6 class="d-inline taskDate">${task.date}</h6>
      </div>
      <div class ="cardName ml-1"><h1 >${task.name}</h1></div>
      <div class ="desc"> 
      <p>${task.description}</p>
      </div>
      <div class="assigned"><h5 class="d-inline">Assigned to: ${task.assignedTo}</h5>
      </div>
      <h5 class="zoom d-inline mb-3 taskStatus">Status: ${task.status}</h5>
      <div class= "editDelete">
      <a href="#" data-toggle="modal" data-target="#abc"><option value="${task.id}" class ="fa fa-edit fa-2x edit"></option></a>
      <a href="#" ><option value="${task.id}"class = "fa fa-trash fa-2x delete"></option></a>
      </div>
      <div class ="taskCategory">${task.category}</div>
      </div>
      </div>
      </div>
       `
       )
       .join('')
       
       this.list.innerHTML = html
  }
  
  // Display task on page
  displayTasks() {
    const tasks = this.getTasks()
    tasks.forEach((task) => this.addTaskToList(task))
    this.addImage()
 }

  addImage () {
  
    const card = document.querySelectorAll(".taskCategory")
    let entr = Object.values(card).filter(task => task.innerHTML == "Entertainment")
    let work = Object.values(card).filter(task => task.innerHTML == "Work")
    let family = Object.values(card).filter(task => task.innerHTML == "Family")
    let social = Object.values(card).filter(task => task.innerHTML == "Social")
  
    for (let i = 0; i < entr.length; i++) {
      entr[i].parentElement.parentElement.classList.add("entertainment")
    }
      for (let i = 0; i < work.length; i++) {
        work[i].parentElement.parentElement.classList.add("work")
      }
        for (let i = 0; i < family.length; i++) {
          family[i].parentElement.parentElement.classList.add("family")
        }
          for (let i = 0; i < social.length; i++) {
            social[i].parentElement.parentElement.classList.add("social")
          }
  }

  // Clear modal form fields
  clearFields() {
    document.getElementById("taskName").value = ''
    document.getElementById("taskDescription").value = ''
    document.getElementById("dueDate").value = ''
    document.getElementById("startTime").value = '09:00'
    document.getElementById("assignedTo").value = ''
    document.getElementById("category").value = ''
    document.getElementById("status").value = ''
    }
  
  // Get tasks form storage
  getTasks() {
    if(localStorage.getItem('tasks') === null) {
          this.tasksArray = []
        } else {
          this.tasksArray = JSON.parse(localStorage.getItem('tasks'))
        }
      return this.tasksArray
  }
  
  // Add tasks to storage
   addTask(task) {
      const tasks = this.tasksArray
      tasks.push(task)
      localStorage.setItem('tasks',JSON.stringify(tasks))
  }
  
  // Update tasks in storage after edit
  updateTask() {
    const tasks = this.tasksArray
    localStorage.setItem('tasks',JSON.stringify(tasks))
  }
  
  // Delete tasks 
  removeTask(id) {
    this.tasksArray = this.tasksArray.filter(task => task.id !== id)
    localStorage.setItem('tasks',JSON.stringify(this.tasksArray))
  }
  }
  