//page menu anim background logo
const menuTitle = document.querySelectorAll('.menu__title');
const menuLogo = document.querySelector('.menu__logo');
const logo = document.querySelector('.sidebar__logo');
const menu = document.querySelector('.menu');
const containerPainting = document.querySelector('#container-painting');


let timeOut;


menu.addEventListener('click', function() {
    menuLogo.classList.add('bgLogo');
    menuLogo.addEventListener("animationend", function () {
        menuLogo.classList.remove('bgLogo');
    })
})

containerPainting.addEventListener('click', function() {
    menuLogo.classList.add('bgLogo');
    menuLogo.addEventListener("animationend", function () {
        menuLogo.classList.remove('bgLogo');
    })
})




document.body.addEventListener('click', function() {
    logo.classList.add('bgLogo');
    logo.addEventListener("animationend", function () {
        logo.classList.remove('bgLogo');
    })
    hamburger.classList.add('changeBgHamburger');
    hamburger.addEventListener("animationend", function () {
        hamburger.classList.remove('changeBgHamburger');
    })
} )