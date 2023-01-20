(function () {
    const header = document.querySelector(".header")
    window.onscroll=()=>{
        if (window.pageYOffset>50){
            header.classList.add(".header.active")
        }
    }
}())

(function () {
    const burgerItem=document.querySelector(".burger")
    const menu=document.querySelector(".navbar")
    const menuClose=document.querySelector(".header_nav_close")
    burgerItem.addEventListener("click",()=>{
        menu.classList.add("navbar_active")
    })
    menuClose.addEventListener("click",()=>{
        menu.classList.remove("navbar_active")
    })
    
}())