export default class Validate {

  constructor(name, description, date, startTime, assignedTo, category, status){
    this.name = name
    this.description = description
    this.date = date
    this.startTime = startTime
    this.assignedTo = assignedTo
    this.category = category
    this.status = status
  }
// Validate name field
 validateName() {
  let input = this.name.value
  let error = document. querySelector("#name_error")
  const successIcon = document.getElementById("nameSuccessIcon")
  const errorIcon = document.getElementById("nameErrorIcon")
  
    if (input == "" || input.length < 6 || input.length > 25) {
      error.innerText = "Please enter between 6 & 25 letters"
      this.name.classList.add("error")
      this.name.classList.remove("success")
      errorIcon.style.display = "block"
      successIcon.style.display = "none"
      return false
    }
    if (input.length >= 6 || input.length <= 25) {
      error.innerHTML = ""
      this.name.classList.add("success")
      this.name.classList.remove("error")
      successIcon.style.display = "block"
      errorIcon.style.display = "none"
      return true
    }
  }
// Validate description field
validateDescription() {

      let input = this.description.value
      let error = document. querySelector("#description_error")
      const successIcon = document.getElementById("descriptionSuccessIcon")
      const errorIcon = document.getElementById("descriptionErrorIcon")
      
        if (input == "" || input.length < 6 || input.length > 50) {
          error.innerText = "Please enter between 6 & 50 letters"
          this.description.classList.add("error")
          this.description.classList.remove("success")
          errorIcon.style.display = "block"
          successIcon.style.display = "none"
          return false
        }
        if (input.length >= 6 || input.lenght <= 50) {
          error.innerHTML = ""
          this.description.classList.add("success")
          this.description.classList.remove("error")
          successIcon.style.display = "block"
          errorIcon.style.display = "none"
          return true
        }
      }
// Validate date field
validateDate() {
    let input = this.date.value
    let error = document. querySelector("#date_error")
    const successIcon = document.querySelector("#dateSuccessIcon")
    const errorIcon = document.querySelector("#dateErrorIcon")
    
      if (input == "") {
        error.innerText = "Please choose a date"
        this.date.classList.add("error")
        this.date.classList.remove("success")
        errorIcon.style.display = "block"
        successIcon.style.display = "none"
        return false
      }
      else {
        error.innerHTML = ""
        this.date.classList.add("success")
        this.date.classList.remove("error")
        successIcon.style.display = "block"
        errorIcon.style.display = "none"
        return true
      }
    }
// Validate time field
validateTime() {
      let input = this.startTime.value
      let error = document. querySelector("#time_error")
      const successIcon = document.querySelector("#timeSuccessIcon")
      const errorIcon = document.querySelector("#timeErrorIcon")
      
        if (input == "") {
          error.innerText = "Please choose a time"
          this.startTime.classList.add("error")
          this.startTime.classList.remove("success")
          errorIcon.style.display = "block"
          successIcon.style.display = "none"
          return false
        }
        else {
          error.innerHTML = ""
          this.startTime.classList.add("success")
          this.startTime.classList.remove("error")
          successIcon.style.display = "block"
          errorIcon.style.display = "none"
          return true
        }
      }
// Validate assigned to field
validateAssignedTo() {
        let input = this.assignedTo.value
        let error = document. querySelector("#assigned_error")
        const successIcon = document.querySelector("#assignedSuccessIcon")
        const errorIcon = document.querySelector("#assignedErrorIcon")
        
          if (input == "" || input <= 3) {
            error.innerText = "Please choose task assignee"
            this.assignedTo.classList.add("error")
            this.assignedTo.classList.remove("success")
            errorIcon.style.display = "block"
            successIcon.style.display = "none"
            return false
          }
          else {
            error.innerHTML = ""
            this.assignedTo.classList.add("success")
            this.assignedTo.classList.remove("error")
            successIcon.style.display = "block"
            errorIcon.style.display = "none"
            return true
          }
        }
// Validate category field
validateCategory() {
          let error = document. querySelector("#category_error")
          const successIcon = document.querySelector("#categorySuccessIcon")
          const errorIcon = document.querySelector("#categoryErrorIcon")
          
            if (this.category.value == "") {
              error.innerText = "Please choose a category"
              this.category.classList.add("error")
              this.category.classList.remove("success")
              errorIcon.style.display = "block"
              successIcon.style.display = "none"
              return false
            }
           else {
              error.innerHTML = ""
              this.category.classList.add("success")
              this.category.classList.remove("error")
              successIcon.style.display = "block"
              errorIcon.style.display = "none"
              return true
            }
          }
// Validate status field
validateStatus() {
            let error = document. querySelector("#status_error")
            const successIcon = document.querySelector("#statusSuccessIcon")
            const errorIcon = document.querySelector("#statusErrorIcon")
           
            if (this.status.value === "") {
              error.innerText = "Please choose task status"
              this.status.classList.add("error")
              this.status.classList.remove("success")
              errorIcon.style.display = "block"
              successIcon.style.display = "none"
              return false
            }

            else {
                error.innerHTML = ""
                this.status.classList.add("success")
                this.status.classList.remove("error")
                successIcon.style.display = "block"
                errorIcon.style.display = "none"
                return true
              }
            }
            // Vaildate all fields
          validateFields() {

              this.name.addEventListener("blur", () => {
                this.validateName()
              })
              this.description.addEventListener("blur", () => {
                this.validateDescription()
              }) 
              this.date.addEventListener("blur", () => {
                this.validateDate()
              })
              this.startTime.addEventListener("blur", () => {
                this.validateTime()
              })
              this.assignedTo.addEventListener("blur", () => {
                this.validateAssignedTo()
              })
              this.category.addEventListener("blur", () => {
                this.validateCategory()
              })
              this.status.addEventListener("blur", () => {
                const newLocal = this.validateStatus()
              })
            }
            // Validate form
            validateForm() {
              if(
              this.validateName()  && 
              this.validateDescription() && 
              this.validateDate() && 
              this.validateTime() && 
              this.validateAssignedTo() && 
              this.validateCategory() && 
              this.validateStatus()
              ) {
                return true
              }
              else {
                return false
              }
            }

            clearValidation() {

              let input = document.querySelectorAll(".input")
              let icon = document.querySelectorAll(".icon")
              let message = document.getElementsByTagName("SMALL")

              for (let i = 0; i < input.length; i++) {
                input[i].classList.remove("error", "success")
              }
              for (let j = 0; j < icon.length; j++) {
                icon[j].style.display = "none"
              }
              for (let h = 0; h < message.length; h++) {
                message[h].innerText= ""
              }      
            }
        }