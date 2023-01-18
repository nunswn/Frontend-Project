const btn = document.querySelector(".btn")
const container = document.querySelector(".container")
const messages = [
    "Hello World","Godd Morning","Good Night","สวัสดีตอนเช้า","ราตรีสวัสดิ์"
]

btn.addEventListener("click",()=>createNotification())

function createNotification(){
    const notificationEl = document.createElement("div")
    notificationEl.classList.add("notification")
    notificationEl.innerText=randomMassage()
    container.appendChild(notificationEl)
    setTimeout(()=>{
        notificationEl.remove()
    },3000)
}

function randomMassage(){
  return messages[Math.floor(Math.random()*messages.length)]
}