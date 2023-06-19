export default function menuHamburguer() {
    const dropdown = document.querySelector(".menu-mobile-dropdown a");
    const menuMobile = document.querySelector('.header .nav-bar .menu');
    const menuHamburguerOpen = document.querySelector('.menu-hamburger-open');
    const menuHamburguerClose = document.querySelector('.menu-hamburger-close');
    const dropdownmenu = document.querySelector(".menu-mobile-dropdown .dropdown");

    dropdown.addEventListener('click', () => {
      dropdownmenu.classList.toggle('show');
    });

    menuHamburguerOpen.addEventListener('click', () => {
        menuMobile.classList.add('mobile-navbar')
        document.body.style.overflow = 'hidden';
    })

    menuHamburguerClose.addEventListener('click', () => {
        menuMobile.classList.remove('mobile-navbar')
        document.body.style.overflow = 'auto';
    })
}

