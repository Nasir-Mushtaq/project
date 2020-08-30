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
  
 validateName() {
  let input = this.name.value
  let error = document. querySelector("#name_error")
  const successIcon = document.getElementById("nameSuccessIcon")
  const errorIcon = document.getElementById("nameErrorIcon")
  
    if (input == "" || input.length <= 6 || input.length >= 25) {
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

  validateDescription() {

      let input = this.description.value
      let error = document. querySelector("#description_error")
      const successIcon = document.getElementById("descriptionSuccessIcon")
      const errorIcon = document.getElementById("descriptionErrorIcon")
      
        if (input == "" || input.length <= 6 || input.length >= 100) {
          error.innerText = "Please enter between 6 & 100 letters"
          this.description.classList.add("error")
          this.description.classList.remove("success")
          errorIcon.style.display = "block"
          successIcon.style.display = "none"
          console.log(error.innerText)
          return false
        }
        if (input.length >= 6 || input.lenght <= 100) {
          error.innerHTML = ""
          this.description.classList.add("success")
          this.description.classList.remove("error")
          successIcon.style.display = "block"
          errorIcon.style.display = "none"
          return true
        }
      }

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

      validateAssignedTo() {
        console.log("assigned")
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

        validateCategory() {
          let error = document. querySelector("#category_error")
          const successIcon = document.querySelector("#categorySuccessIcon")
          const errorIcon = document.querySelector("#categoryErrorIcon")
          
            if (this.category.value == "") {
              console.log("hello")
              error.innerText = "Please choose a category"
              this.category.classList.add("error")
              this.category.classList.remove("success")
              errorIcon.style.display = "block"
              successIcon.style.display = "none"
              return false
            }
           else {
              console.log("hi")
              error.innerHTML = ""
              this.category.classList.add("success")
              this.category.classList.remove("error")
              successIcon.style.display = "block"
              errorIcon.style.display = "none"
              return true
            }
          }

           validateStatus() {
            let error = document. querySelector("#status_error")
            const successIcon = document.querySelector("#statusSuccessIcon")
            console.log(successIcon)
            const errorIcon = document.querySelector("#statusErrorIcon")
           
            if (this.status.value === "N/A") {
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

            validateFields() {

              console.log("frog")
  
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
        }
  
         