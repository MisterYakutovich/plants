
//scroll
(function () {
    const header = document.querySelector(".header")
    window.onscroll=()=>{
        if (window.pageYOffset>50){
            header.classList.add(".header.active")
        }
    }
}());

(function () {
    const burgerItem=document.querySelector(".burger")
    const menu=document.querySelector(".navbar")
    const menuClose=document.querySelector(".header_nav_close")
    const menuLinks=document.querySelectorAll(".header_link,.header_link_home")
    burgerItem.addEventListener("click",()=>{
        menu.classList.add("navbar_active")
    })
    menuClose.addEventListener("click",()=>{
        menu.classList.remove("navbar_active")
    })
    if (window.innerWidth <= 767){
        for (let i=0;i<menuLinks.length;i++){
            menuLinks[i].addEventListener("click",()=>{
                menu.classList.remove("navbar_active")
            })
        }
    }
}());
//scroll
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);
    };
    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());
//end
function Selected(a) {
    var label = a.value;
    if (label=="canandaigua") {
       document.getElementById("Block1").style.display='block';
       document.getElementById("Block2").style.display='none';
       document.getElementById("Block3").style.display='none';
       document.getElementById("Block4").style.display='none';

    } else if (label=="newyork") {
       document.getElementById("Block1").style.display='none';
        document.getElementById("Block2").style.display='block';
        document.getElementById("Block3").style.display='none';
        document.getElementById("Block4").style.display='none';
    } else if (label=="yonkers") {
        document.getElementById("Block1").style.display='none';
        document.getElementById("Block2").style.display='none';
        document.getElementById("Block3").style.display='block';
        document.getElementById("Block4").style.display='none';
    }else if (label=="sherrill"){
        document.getElementById("Block1").style.display='none';
        document.getElementById("Block2").style.display='none';
        document.getElementById("Block3").style.display='none';
        document.getElementById("Block4").style.display='block';
    }else {
        document.getElementById("Block1").style.display='none';
        document.getElementById("Block2").style.display='none';
        document.getElementById("Block3").style.display='none';
        document.getElementById("Block4").style.display='none';
    }   
}


function showHide(id) {
    var obj_basics = document.getElementById('basics');
    var obj_standard = document.getElementById('standard');
    var obj_pro_care = document.getElementById('pro_care');
    if(id=='basics'){   
        obj_basics.classList.toggle('rectangle_basics')
        obj_standard.classList.remove('rectangle_standard')
        obj_pro_care.classList.remove('rectangle_pro_care')       
    }
    if(id=="standard"){
      obj_standard.classList.toggle('rectangle_standard')
      obj_basics.classList.remove('rectangle_basics')
      obj_pro_care.classList.remove('rectangle_pro_care')             
    }
    if(id=="pro_care"){
        obj_pro_care.classList.toggle('rectangle_pro_care')
        obj_standard.classList.remove('rectangle_standard')
        obj_basics.classList.remove('rectangle_basics')
   }
}


