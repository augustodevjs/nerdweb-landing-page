export default function menuHamburguer() {
    const menuHamburger = document.querySelector(".menu-hamburger");
    const navLinks = document.querySelector(".header-menu-links");
    const header = document.querySelector(".header");

    menuHamburger.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-menu')
        header.classList.toggle('mobile')
    });
}

