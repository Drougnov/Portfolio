const body = document.body;
const nav = document.querySelector('nav');
const toggleMenu = document.querySelector('.hamburger');
const container= document.querySelector('.container');

toggleMenu.addEventListener('click',()=>{
    nav.classList.toggle('active');
    
    if(nav.classList.contains('active')){   //stop body scrolling when nav open
        body.style.overflow = "hidden";
        container.style.filter = "blur(2px)";
    }else{
        body.style.overflow = "auto";
        container.style.filter = "none";
    }
})