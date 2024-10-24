const mobileBtn = document.getElementById('mobile-cta');
const nav = document.querySelector('nav');
const mobileBtnExit = document.getElementById('mobile-exit');
const navLinks = document.querySelectorAll('.primary-nav a'); // Select all the links in the nav

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
        nav.classList.remove('menu-btn');  // Close the navbar
        mobileBtn.style.display = 'block'; // Show the hamburger menu icon again
        document.getElementById('intro').style.display = 'block'; // Show the intro again if it was hidden
    });
});


