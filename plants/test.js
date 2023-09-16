const items = document.querySelectorAll('.button_item');
items.forEach(el => {  
    el.addEventListener('click', function (e) {       
        filterBySelectorTag(e.target.id)
       e.target.classList.toggle('active');
       removeItems()
          
    });   
});
 function removeItems() {
   let activeItems = document.querySelectorAll('.active');    
   console.log(activeItems)    
  if (activeItems.length > 2) {
    for (let item of items) {
      item.classList.remove('active');
    } 
  }
}

function filterBySelectorTag(id) {
    var btn_garden = document.getElementById('btn_gardens');
    var btn_lawn = document.getElementById('btn_lawn');
    var btn_planting = document.getElementById('btn_planting');
   // let activeItems = [...document.querySelectorAll('.active')];
    let activeItems = document.querySelectorAll('.active');
    var obj_garden = document.getElementById('garden_care');
    var obj_garden_1 = document.getElementById('garden_care_1');
    var obj_planting = document.getElementById('planting');
    var obj_planting_1 = document.getElementById('planting_1');
    var obj_planting_2 = document.getElementById('planting_2');
    var obj_lawn = document.getElementById('lawn_care');
    let btn_activeItems =[document.querySelectorAll('.button_item')];
  
    console.log(activeItems)
  
 if(id==='btn_planting'){
    console.log(id)
    obj_garden.classList.toggle('hidden_blur')
    obj_garden_1.classList.toggle('hidden_blur')
    obj_lawn.classList.toggle('hidden_blur')
    
   }

   if(id==='btn_gardens'){ 
    console.log(id)
    obj_planting.classList.toggle('hidden_blur')
    obj_planting_1.classList.toggle('hidden_blur')
    obj_planting_2.classList.toggle('hidden_blur')
    obj_lawn.classList.toggle('hidden_blur')
  //  obj_garden.classList.remove('hidden_blur')
 //   obj_garden_1.classList.remove('hidden_blur')
         
}
if(id==='btn_lawn'){    
    obj_planting.classList.toggle('hidden_blur')
    obj_planting_1.classList.toggle('hidden_blur')
    obj_planting_2.classList.toggle('hidden_blur')
    obj_garden.classList.toggle('hidden_blur')
    obj_garden_1.classList.toggle('hidden_blur')  
}
}