// function clearValidation() {
//   let input = document.querySelectorAll(".input")
//   let error = document.querySelectorAll(".errr")
//   console.log(error)
//   let successIcon = document.querySelectorAll(".fa-check-circle")
//   console.log(successIcon)
//   let errorIcon = document.querySelectorAll(".fa-exclamation-circle")
//   console.log(successIcon)



 
//   let a
//   for (a = 0; a < input.length; a++) {
//     input[a].style.borderStyle = "none"
//   }
//   let x
//   for (x = 0; x < successIcon.length; x++) {
//     successIcon[x].style.display = "none"
//   }
//   let y
//   for (y = 0; y < errorIcon.length; y++) {
//     errorIcon[y].style.display = "none"
//   }
//   let z
//   for (z = 0; y < error.length; y++) {
//     error[z].innerText = ""
//     console.log(z)
//   }
// }

function validateName(min, max) {
    let input = name.value
    let error = document. querySelector("#name_error")
    const successIcon = document.getElementById("nameSuccessIcon")
    const errorIcon = document.getElementById("nameErrorIcon")
    
      if (input == "" || input.length <= min || input.length >= max) {
        error.innerText = "Please enter between "+min+" & "+max+" letters"
        name.classList.add("error")
        name.classList.remove("success")
        errorIcon.style.display = "block"
        successIcon.style.display = "none"
        console.log(error.innerText)
        return false
      }
      if (input.length >= min || input.length <= max) {
        error.innerHTML = ""
        name.classList.add("success")
        console.log(name.classList)
        name.classList.remove("error")
        successIcon.style.display = "block"
        errorIcon.style.display = "none"
        console.log("hi")
        return true

      }
        // else {
        //   error.innerHTML = ""
        //   name.classList.remove("error")
        //   name.classList.remove("success")
        //   successIcon.style.display = "none"
        //   errorIcon.style.display = "none"
        // }
        
    }

    function validateDescription(min, max) {

        let input = description.value
        let error = document. querySelector("#description_error")
        const successIcon = document.getElementById("descriptionSuccessIcon")
        const errorIcon = document.getElementById("descriptionErrorIcon")
        
          if (input == "" || input.length <= min || input.length >= max) {
            error.innerText = "Please enter between "+min+" & "+max+" letters"
            description.classList.add("error")
            description.classList.remove("success")

            errorIcon.style.display = "block"
            successIcon.style.display = "none"
            console.log(error.innerText)
            return false
          }
          if (input.length >= min || input.lenght <= max) {
            error.innerHTML = ""
            description.classList.add("success")
            console.log(description.classList)
            description.classList.remove("error")
            successIcon.style.display = "block"
            errorIcon.style.display = "none"
            return true
          }
            // else {
            //   error.innerHTML = ""
            //   console.log(hi)
            //   description.classList.remove("error")
            //   description.classList.remove("success")
            //   successIcon.style.display = "none"
            //   errorIcon.style.display = "none"
              
            // }
        }

    function validateDate() {
      console.log("date")
      let input = date.value
      let error = document. querySelector("#date_error")
      const successIcon = document.querySelector("#dateSuccessIcon")
      const errorIcon = document.querySelector("#dateErrorIcon")
      
        if (input == "") {
          error.innerText = "Please choose a date"
          date.classList.add("error")
          date.classList.remove("success")
          errorIcon.style.display = "block"
          successIcon.style.display = "none"
          console.log(error.innerText)
          return false
        }
        else {
          error.innerHTML = ""
          date.classList.add("success")
          console.log(description.classList)
          description.classList.remove("error")
          successIcon.style.display = "block"
          errorIcon.style.display = "none"
          return true
        }
      }

      function validateTime() {
        console.log("startTime")
        let input = startTime.value
        let error = document. querySelector("#time_error")
        const successIcon = document.querySelector("#timeSuccessIcon")
        const errorIcon = document.querySelector("#timeErrorIcon")
        
          if (input == "") {
            error.innerText = "Please choose a time"
            startTime.classList.add("error")
            startTime.classList.remove("success")
            errorIcon.style.display = "block"
            successIcon.style.display = "none"
            console.log(error.innerText)
            return false
          }
          else {
            error.innerHTML = ""
            startTime.classList.add("success")
            console.log(description.classList)
            description.classList.remove("error")
            successIcon.style.display = "block"
            errorIcon.style.display = "none"
            return true
          }
        }

        function validateAssignedTo() {
          console.log("assigned")
          let input = assignedTo.value
          let error = document. querySelector("#assigned_error")
          const successIcon = document.querySelector("#assignedSuccessIcon")
          const errorIcon = document.querySelector("#assignedErrorIcon")
          
            if (input == "" || input <= 3) {
              error.innerText = "Please choose assignee"
              assignedTo.classList.add("error")
              assignedTo.classList.remove("success")
              errorIcon.style.display = "block"
              successIcon.style.display = "none"
              console.log(error.innerText)
              return false
            }
            else {
              error.innerHTML = ""
              assignedTo.classList.add("success")
              assignedTo.classList.remove("error")
              successIcon.style.display = "block"
              errorIcon.style.display = "none"
              return true
            }
          }

          function validateCategory() {
            let input = category
            console.log(input.options[2].value)
            let error = document. querySelector("#category_error")
            const successIcon = document.querySelector("#categorySuccessIcon")
            const errorIcon = document.querySelector("#categoryErrorIcon")
            
              if (input.options[0].value == "") {
                console.log("hello")
                error.innerText = "Please choose a category"
                category.classList.add("error")
                category.classList.remove("success")
                errorIcon.style.display = "block"
                successIcon.style.display = "none"
                return false
              }
             if (input.options[1].value == "Call"){
                console.log("hi")
                error.innerHTML = ""
                category.classList.add("success")
                category.classList.remove("error")
                successIcon.style.display = "block"
                errorIcon.style.display = "none"
                return true
              }
            }