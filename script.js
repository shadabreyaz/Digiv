const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const closeIcon = document.querySelector('.close-icon');

const boxes = document.querySelectorAll('.moving');


hamburger.addEventListener('click',(e)=>{
e.stopPropagation()
nav.classList.toggle('open')
})
closeIcon.addEventListener('click',()=>{
    nav.classList.remove('open')
})
window.addEventListener('click',()=>{
    nav.classList.remove('open')
})

// for scroll
window.addEventListener('scroll',()=>{
    const windowh =   window.innerHeight;
    boxes.forEach(element => {
      const boxt = element.getBoundingClientRect().top;
   
      if(boxt<windowh){
          element.classList.add('move')
      }
      else{
          element.classList.remove('move')
      }
      
    });
   });
