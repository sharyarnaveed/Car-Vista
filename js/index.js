

//nav 
let burger = document.querySelector('.burger');
let  nav_items_ul = document.querySelector(".nav");

burger.addEventListener('click', () => {
    nav_items_ul.classList.toggle('nav_hide')
    nav_items_ul.classList.toggle('nav_items_ul')
    
})


// pre loader

let preloader=document.getElementById("preloader");
window.addEventListener('load',function(){
  preloader.style.display="none";
})


// slide on home page button
let button_link=document.getElementById("main_pop_a");
let scroll_button=document.getElementById("main_pop_button");
let button_2=document.getElementById("main_button_submit");
let  second_link_2=document.getElementById("main_button_category");
let button_3=document.getElementById("footer_button");
let third_link=document.getElementById("footer_button_link");

function the_click_2()
{
  second_link_2.href="#section_one";

  if(the_click_2)
  {
    button_2.style.display="none";
    second_link_2.style.display="none";
    button_3.style.display="none";
    third_link.style.display="none";
    setTimeout(() => {
  
      scroll_button.style.display="flex";
      button_link.style.display="flex";
      button_3.style.display="none";
      third_link.style.display="none";

    }, 3000);
  }

}

function the_click_3()
{
  third_link.href="#the_footer";
  if(the_click_3)
  {
    button_3.style.display="none";
    third_link.style.display="none";
    setTimeout(() => {
      
      
    }, 3000);
  }

}


    setTimeout(() => {
  
      scroll_button.style.display="flex";
      button_link.style.display="flex";

    }, 3000);
    let the_scroll=()=>{
    button_link.href="#other_section";
    
    if(the_scroll)
  {
  
    scroll_button.style.display="none";
    button_link.style.display="none";
  setTimeout(() => {
    button_2.style.display="flex";
    second_link_2.style.display="flex";
    button_3.style.display="flex";
    third_link.style.display="flex";
  }, 2000);
  
  
  
  }
  else{
    alert("eroro");
  }
  }
 



// button one



// button two
// setTimeout(() => {
//   button_2.style.display="block";
// second_link_2.style.display="block";

// }, 2000);
// let second_button=()=>
// { second_link_2.href="#section_one"
 
 
//   if(second_button)
//   {
//     button_2.style.display="none";
//     second_link_2.style.display="none";
//     the_scroll();
//   }
// }


// button_2.addEventListener('click',second_button);







//about us
 function about_open()
 {
  document.getElementById("about-us").style.display="flex";
  move.href="#about-us"
  
 }

//contact us
 
 function contact_open_button()
 {
//  preventDefault();

    document.getElementById("contact_us_section").style.display="flex";
    
    scrollTo({
      top:0,behavior:"smooth",behavior:"smooth"

    })
    move_contact.href="#contact_us_section";
 
 
 }



//  single page viewer

