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


//control eye with mouse

window.addEventListener('mousemove', (e)=>{
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const anchor = document.querySelector('.header__avatar-img');
    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;
    const angleDeg = angle(mouseX,mouseY,anchorX,anchorY);
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye =>{
        eye.style.transform = `rotate(${angleDeg - 45}deg)`
    })
})

function angle(cx,cy,ex,ey){
    const dx = ex - cx;
    const dy = ey - cy;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
}