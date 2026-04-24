const email = document.getElementById("email")
const password = document.getElementById("password")
const msg = document.getElementById("msg")
const btn = document.getElementById("btn")


btn.addEventListener("click", ()=>{
    event.preventDefault()
    if(email.value === "" || password.value === ""){
        msg.innerText = "All Feild Required"
        msg.style.color = "tomato"
    }else if(!email.value.includes("@")){
        msg.innerText = "@ must be use"
        msg.style.color = "tomato"
    }else if(password.value.length <= 6){
        msg.innerText = "password is too short"
        msg.style.color = "tomato"
    }
    else if(password.value.length >= 6 && password.value.length <= 10){
        msg.innerText = "Medium Password"
        msg.style.color = "orange"
    }else if(!/[A-Z]/.test(password.value)){
        msg.innerText = "At least one charecter use UperCase"
        msg.style.color = "tomato"
    }else if(!/[0-9]/.test(password.value)){
        msg.innerText = "At least one charecter use Number"
        msg.style.color = "tomato"
    }else{
         msg.innerText = "Sucessfully login"
        msg.style.color = "green"
    }
})