const burgerButton = document.querySelector('.header__burger');
const navLinks = document.querySelector('.header__nav');
const textLinks = document.querySelector('.header__nav a')


burgerButton.addEventListener('click', () => {
    console.log('hola');

    navLinks.classList.toggle('menu-toggle');

});


navLinks.addEventListener('click', () => {

    console.log('hola2');

    navLinks.classList.toggle('menu-toggle');

});