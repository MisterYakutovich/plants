/*window.onload=function () {
    console.log("hello")
    addTagsClickHandler();
}
const addTagsClickHandler = () => {
    document.querySelector('.services_button').addEventListener('click',(e)=>{
      if (e.target.classList.contains('button_item')){
        let clickTag=e.target;
        removeSelectedTags();
        selectClickTag(clickTag)

      }

    })
}
const removeSelectedTags=()=>{
    let tags=document.querySelectorAll('.services_button .button_item');
    tags.forEach(tag=>{
        tag.classList.remove('active')
        tag.classList.add('button_item')
    })
}
const selectClickTag=(clickTag)=>{
    clickTag.classList.add('active')
    clickTag.classList.remove('button_item')
}*/

/*-------------------------------------------------------------*/

//const menu=document.querySelector('.services_button');
//menu.addEventListener('click',(event)=>{
   //if (event.target.classList.contains('button_item')){
   // menu.querySelectorAll('.button_item').forEach((el,index) =>{      
      //  el.classList.toggle('active')  // el.classList.remove('active')      
//});   
   // event.target.classList.toggle('active')// event.target.classList.add('active')
   // filterBySelectorTag(event.target.innerText)
  //  }
//})

/*--------------------------------------------------------------------------*/

/*const items = [...document.querySelectorAll('.button_item')];
items.forEach((el, index) => {
    el.addEventListener('click', function (e) {
        filterBySelectorTag(e.target.innerText)
        if(index === 0 || index === 1) {
            this.classList.toggle('active');
        }
        if(index === 2) {
            let act = items.filter((btn, i) => i !== 2 && btn.classList.contains('active'));
            if(act.length === 2) return;
            this.classList.toggle('active');
        }
       
    });
});*/

/*------------------------------------------------------------------------------*/

const items = [...document.querySelectorAll('.button_item')];
items.forEach(el => {
    el.addEventListener('click', function (e) { 
        filterBySelectorTag(e.target.innerText)  
     if(items.filter(b => b !== this && b.classList.contains('active')).length === 2) return;       
        this.classList.toggle('active');
    });   
});


const filterBySelectorTag=(selectedTag)=>{
    let gardenes=document.querySelectorAll('.services_items .img_items');
    gardenes.forEach(el=>{
         el.classList.add('hidden');
        el.querySelectorAll('.item_title').forEach(item=>{
            if(item.innerText===selectedTag){
                 el.classList.remove('hidden')
            } 
            if(item.innerText==="Garden care" && selectedTag==="Gardens"){
                 el.classList.remove('hidden')
            }
            if(item.innerText==="Lawn care" && selectedTag==="Lawn"){
                 el.classList.remove('hidden')
            }
        })
    })
}

/*-----------------------------------------------------------------------------*/
/*const cards = document.querySelectorAll('.img_items');
cards.forEach(card => {
  const button = card.querySelector('.button_item');
  const image = card.querySelector('.item_title');
  button.addEventListener('click', () => {

    const activeСards = document.querySelectorAll('.img_items .item_title.hidden');
    // Удаляем классы у активных элементов, кроме текущего
    activeСards.forEach(n => n !== image ? n.classList.remove('hidden') : null);

    // Добавляем текущему элементу
    image.classList.toggle('hidden');
  });
});*/
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

function showHide(element_id) {
    if (document.getElementById(element_id)) {    
        var obj = document.getElementById(element_id); 
        if (obj.style.display != "grid") { 
            obj.style.display = "grid";
        }
        else obj.style.display = "none";
    }
}