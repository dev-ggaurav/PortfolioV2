const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const themeIcon = document.querySelector('.icon');
const body = document.body;

function mobileNavigation(){
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
}

hamburger.addEventListener('click',mobileNavigation);