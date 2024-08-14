let burger = document.querySelector('.burger');
let  nav_items_ul = document.querySelector(".nav");

burger.addEventListener('click', () => {
    nav_items_ul.classList.toggle('nav_hide')
    nav_items_ul.classList.toggle('nav_items_ul')
    
})


let preloader=document.getElementById("preloader");
window.addEventListener('load',function(){
  preloader.style.display="none";
})




const slideContainer = document.querySelector('.slide-container');
const leftSlider = document.querySelector('.left-slider')
const rightSlider=document.querySelector('.right-slider')
const downbutton=document.querySelector('.down_button');
const upbutton=document.querySelector('.up_button');  
const slideslength=rightSlider.querySelectorAll('div').length;

let activeslideindex=0;

leftSlider.style.top=`-${(slideslength-1)*100}vh`;
upbutton.addEventListener('click',()=>changeslide('up'));

downbutton.addEventListener('click',()=>changeslide('down'));

changeslide=(direction)=>
{
const sliderHeight=slideContainer.clientHeight;
if(direction==='up')
{
    activeslideindex++
if (activeslideindex>slideslength-1) {
activeslideindex=0;
}
}
else if (direction==='down') {
    activeslideindex--
    if (activeslideindex<0) {
        activeslideindex=slideslength-1;

    }
}
rightSlider.style.transform=`translateY(-${activeslideindex*sliderHeight}px)`;
leftSlider.style.transform=`translateY(${activeslideindex*sliderHeight}px)`;
}





const slideContainerpolicy = document.querySelector('.slide-container_policy');
const leftSliderpolicy = document.querySelector('.left-slider_policy')
const rightSliderpolicy=document.querySelector('.right-slider_policy')
const downbuttonpolicy=document.querySelector('.down_button_policy');
const upbuttonpolicy=document.querySelector('.up_button_policy');  
const slideslengthpolicy=rightSliderpolicy.querySelectorAll('div').length;

let activeslideindexpolicy=0;

leftSliderpolicy.style.top=`-${(slideslengthpolicy-1)*100}vh`;
upbuttonpolicy.addEventListener('click',()=>changeslidepolicy('up'));

downbuttonpolicy.addEventListener('click',()=>changeslidepolicy('down'));

changeslidepolicy=(direction1)=>
{
const sliderHeight=slideContainerpolicy.clientHeight;
if(direction1==='up')
{
    activeslideindexpolicy++
if (activeslideindexpolicy>slideslengthpolicy-1) {
    activeslideindexpolicy=0;
}
}
else if (direction1==='down') {
    activeslideindexpolicy--
    if (activeslideindexpolicy<0) {
        activeslideindexpolicy=slideslengthpolicy-1;

    }
}
rightSliderpolicy.style.transform=`translateY(-${activeslideindexpolicy*sliderHeight}px)`;
leftSliderpolicy.style.transform=`translateY(${activeslideindexpolicy*sliderHeight}px)`;
}
