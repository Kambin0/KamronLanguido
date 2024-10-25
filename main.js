const mobileBtn = document.getElementById('mobile-cta');
const nav = document.querySelector('nav');
const mobileBtnExit = document.getElementById('mobile-exit');
const navLinks = document.querySelectorAll('.primary-nav a'); 

mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn');
    mobileBtn.style.display = 'none';
    document.getElementById('intro').style.display = 'none';
});

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
    mobileBtn.style.display = 'block';
    document.getElementById('intro').style.display = 'block';
});

// Close the navbar when clicking on any link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('menu-btn'); 
        mobileBtn.style.display = 'block'; 
        document.getElementById('intro').style.display = 'block';
    });
});

    document.addEventListener("DOMContentLoaded", function() {

        const sr = ScrollReveal({
            duration: 1000,
            distance: "500px",
            easing: "ease-out",
        });
    
        sr.reveal('.navbar', { origin: 'left' });
        sr.reveal('#intro', { origin: 'right' });

        ScrollReveal().reveal('#projects', {
            duration: 1200,
            origin: 'left',
            distance: '50px',
            delay: 200
        });

        ScrollReveal().reveal('#about', {
            duration: 1200,
            origin: 'right',
            distance: '50px',
            delay: 200
        });

        ScrollReveal().reveal('.footer', {
            duration: 1500,
            origin: 'bottom',
            distance: '50px',
            delay: 200
        });
    });

