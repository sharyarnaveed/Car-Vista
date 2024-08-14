
//preload
let preloader=document.getElementById("preloader");
window.addEventListener('load',function(){
  preloader.style.display="none";
})


//nav
let burger = document.querySelector('.burger');
let  nav_items_ul = document.querySelector(".nav");

burger.addEventListener('click', () => {
    nav_items_ul.classList.toggle('nav_hide')
    nav_items_ul.classList.toggle('nav_items_ul')
    
})


//carousel-slider

const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slides, i) => {
    if (i === index) {
      slides.style.display = 'flex';

    } else {
      slides.style.display = 'none';
    }
  });
}

function changeSlide(offset) {
  currentIndex += offset;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  } else if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

prevBtn.addEventListener('click', () => {
  changeSlide(-1);
});

nextBtn.addEventListener('click', () => {
  changeSlide(1);
});

// Initial slide
showSlide(currentIndex);


//car detail page

function change1()
 {
  
  const previouspage=document.referrer;
 console.log(previouspage);
    window.location.href="toyota_car_1.html"
  
 }
 function change2()
 {
  window.location.href="toyota_car_2.html"
 }function change3()
 {
  window.location.href="index.html"
 }