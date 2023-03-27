

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
/*const serviceButtons = document.querySelectorAll('.button_item');
const serviceItems = document.querySelectorAll('.img_items');

function filterChange() {
	const activeButtons = getActiveButtons();
	const activeServices = activeButtons.map(item => item.innerHTML.toLowerCase());

	serviceItems.forEach(item => {
		const serviceItem = item.dataset.service;

		if (!activeServices.length || activeServices.indexOf(serviceItem) >= 0) {
			item.classList.remove('hidden');
		} else {
			item.classList.add('hidden');
		}
	});
}

const getActiveButtons = () => [...document.querySelectorAll('.button_item.active')];

serviceButtons.forEach(btn => {
	btn.addEventListener('click', (e) => {
		e.target.classList.toggle('active');

		const activeButtons = getActiveButtons();

		if (activeButtons.length > serviceButtons.length - 1) {
			activeButtons.forEach(btn => btn.classList.remove('active'));
		}

		filterChange();
  });
});*/
const items = document.querySelectorAll('.button_item');

items.forEach(el => {  
    el.addEventListener('click', function (e) {       
        filterBySelectorTag(e.target.id)// filterBySelectorTag(e.target.innerText)
        e.target.classList.toggle('active');
        removeItems()
     //if(items.filter(b => b !== this && b.classList.contains('active')).length === 2) return;       
      //  this.classList.toggle('active');
    });   
});
 function removeItems() {
    let activeItems = document.querySelectorAll('.active');
    
  if (activeItems.length > 2) {
    for (let item of items) {
      item.classList.remove('active');
    }
  //  for (let item of cardsItems) {
    //  item.classList.remove('cards__item-blur');
   // }
  }
 // if (activeItems.length === 0) {
  //  for (let item of cardsItems) {
  //    item.classList.remove('cards__item-blur');
  //  }
 // }
      
    

 }

/*const filterBySelectorTag=(selectedTag)=>{
    var obj_garden = document.getElementById('garden_care');
    var obj_garden_1 = document.getElementById('garden_care_1');
    var obj_planting = document.getElementById('planting');
    var obj_planting_1 = document.getElementById('planting_1');
    var obj_planting_2 = document.getElementById('planting_2');
    var obj_lawn = document.getElementById('lawn_care');
    let gardenes=document.querySelectorAll('.services_items .img_items');
    
    gardenes.forEach(el=>{
         el.classList.add('hidden_blur');
         
        el.querySelectorAll('.item_title').forEach(item=>{
       document.querySelectorAll('.item_title').forEach(item=>{
            if(item.innerText==="Planting"){
                 obj_lawn.classList.toggle('hidden_blur')
                 obj_garden.classList.toggle('hidden_blur')
                 obj_garden_1.classList.toggle('hidden_blur')
                 obj_planting.classList.remove('hidden_blur')
                 obj_planting_1.classList.remove('hidden_blur')
                 obj_planting_2.classList.remove('hidden_blur')
            }
            if(item.innerText==="Garden care" && selectedTag==="Gardens" ){// if(item.innerText==="Garden care" && selectedTag==="Gardens" ){
               // el.classList.remove('hidden_blur')
               obj_planting.classList.toggle('hidden_blur')
               obj_planting_1.classList.toggle('hidden_blur')
               obj_planting_2.classList.toggle('hidden_blur')
              // obj_lawn.classList.toggle('hidden_blur')
               obj_garden_1.classList.remove('hidden_blur')
               obj_garden.classList.remove('hidden_blur')
              
            }
           
        if(item.innerText==="Lawn care" && selectedTag==="Lawn"){
                 el.classList.remove('hidden_blur')
            }
       })
        })
    })
}*/
function filterBySelectorTag(id) {
    var btn_garden = document.getElementById('btn_gardens');
    var btn_lawn = document.getElementById('btn_lawn');
    var btn_planting = document.getElementById('btn_planting');
    let activeItems = [...document.querySelectorAll('.active')];
    var obj_garden = document.getElementById('garden_care');
    var obj_garden_1 = document.getElementById('garden_care_1');
    var obj_planting = document.getElementById('planting');
    var obj_planting_1 = document.getElementById('planting_1');
    var obj_planting_2 = document.getElementById('planting_2');
    var obj_lawn = document.getElementById('lawn_care');
    let btn_activeItems =[document.querySelectorAll('.button_item')];

  // for (let i=0;i<btn_activeItems.length;i++){
    
   console.log(activeItems)
  
 if(id==='btn_planting' && document.querySelectorAll('.button_item active') ){
    obj_garden.classList.toggle('hidden_blur')
    obj_garden_1.classList.toggle('hidden_blur')
    obj_lawn.classList.toggle('hidden_blur')
  //  obj_planting.classList.remove('hidden_blur')
   // obj_planting_1.classList.remove('hidden_blur')
  //  obj_planting_2.classList.remove('hidden_blur')
       
   }
   if(id==='btn_gardens' &&  document.querySelectorAll('.button_item active')){ 
    obj_planting.classList.add('hidden_blur')
    obj_planting_1.classList.add('hidden_blur')
    obj_planting_2.classList.add('hidden_blur')
    obj_lawn.classList.add('hidden_blur')
    obj_garden.classList.remove('hidden_blur')
   obj_garden_1.classList.remove('hidden_blur')
         
}else if (!document.querySelectorAll('.button_item active')){
    obj_garden.classList.remove('hidden_blur')
    obj_garden_1.classList.remove('hidden_blur')
    obj_planting.classList.remove('hidden_blur')
    obj_planting_1.classList.remove('hidden_blur')
    obj_planting_2.classList.remove('hidden_blur')
}
//if(id==='btn_lawn' && btn_activeItems[1]){
    
  //  obj_planting.classList.toggle('hidden_blur')
   /// obj_planting_1.classList.toggle('hidden_blur')
  // obj_planting_2.classList.toggle('hidden_blur')
  //  obj_garden.classList.toggle('hidden_blur')
   // obj_garden_1.classList.toggle('hidden_blur')
   // obj_lawn.classList.remove('hidden_blur')
//}
 //if((id==='btn_gardens' && id==='btn_planting') && (btn_activeItems[0] && btn_activeItems[2]) ){ 
   // obj_lawn.classList.toggle('hidden_blur')
  //  obj_planting.classList.remove('hidden_blur')
   // obj_planting_1.classList.remove('hidden_blur')
   // obj_planting_2.classList.remove('hidden_blur')
  //  obj_garden.classList.remove('hidden_blur')
   // obj_garden_1.classList.remove('hidden_blur')
        
//}
}
//}

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

/*function showHide(element_id) {
    if (document.getElementById(element_id)) {    
        var obj = document.getElementById(element_id); 
       
        if (obj.style.display != "grid") { 
           obj.style.display = "grid";
          
        }
        else obj.style.display = "none";
   }
}*/

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


