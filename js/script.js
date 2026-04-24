const email = document.getElementById("email")
const password = document.getElementById("password")
const msg = document.getElementById("msg")
const btn = document.getElementById("btn")


btn.addEventListener("click", ()=>{
    event.preventDefault()
    if(email.value === "" || password.value === ""){
        msg.innerText = "All Feild Required"
        msg.style.color = "tomato"
    }
})