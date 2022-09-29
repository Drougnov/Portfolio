const body = document.body;
const nav = document.querySelector('nav');
const toggleMenu = document.querySelector('.hamburger');
const container= document.querySelector('.container');
const navLinks = document.querySelectorAll('.nav__list li a')

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

navLinks.forEach(link=>{
    link.addEventListener('click',()=>{
        nav.classList.remove('active');
        body.style.overflow = "auto";
        container.style.filter = "none";
    })
})

// Sticky navbar

let lastScroll = 0;

window.addEventListener('scroll', ()=>{
    const currentScroll = window.pageYOffset;
    if(currentScroll <= 0 ){
        body.classList.remove('scroll-up')
    }
    if(currentScroll > lastScroll && !body.classList.contains('scroll-down') ){
        body.classList.remove('scroll-up');
        body.classList.add('scroll-down')
    }
    if(currentScroll < lastScroll && body.classList.contains('scroll-down') ){
        body.classList.add('scroll-up');
        body.classList.remove('scroll-down')
    }
    lastScroll = currentScroll;
})

//animation on scroll

const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        entry.isIntersecting && entry.target.classList.add('show')
    })
})

hiddenElements.forEach(el => observer.observe(el));