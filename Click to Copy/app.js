const coupon = document.querySelector(".coupon")
const btn = document.querySelector(".btn")

btn.addEventListener("click",(e)=>{
    coupon.select()
    coupon.setSelectionRange(0,999999)
    navigator.clipboard.writeText(coupon.value)
    btn.textContent="คัดลอกคูปองแล้ว!!"
    setTimeout(()=>{
        btn.textContent="คัดลอก"
    },1000)
})