const email = document.getElementById("email");
const form = document.getElementById("form");
const error = document.querySelector(".error")
console.log(email);
form.addEventListener ('submit', (e)=>{
    let message=[];
    if(email.value =='' || email.value== null) {
        message.push("Email field is empty")
        
    }
    if (message.length > 0) {
        e.preventDefault();
        error.innerHTML = message.join(", ")
       return error.style.display="flex"
    
    }


  if (!email.value.includes("@")){
    e.preventDefault();
    message.push("email must contain @")
      return error.innerHTML=message;
  }

})
