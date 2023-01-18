const scrolBtn = document.querySelector(".top")
const rootEl = document.documentElement
document.addEventListener("scroll",showBtn)
scrolBtn.addEventListener("click",scrollToTop)

function showBtn(){
    const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight
    if(rootEl.scrollTop/scrollTotal>0.3){
        scrolBtn.classList.add("show-btn")
    }else{
        scrolBtn.classList.remove("show-btn")
    }
}
function scrollToTop(){
    rootEl.scrollTo({
        top:0,
        behavior:"smooth"
    })
}