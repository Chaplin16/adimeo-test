const menuTitle = document.querySelectorAll('.menu__title');
const menuLogo = document.querySelector('.menu__logo');
let timeOut;

menuTitle.forEach(menu => {
    menu.addEventListener('click', function(displayHover) {
        menuLogo.classList.add('filter');
        menuLogo.style.filter = "invert(46%) sepia(31%) saturate(6374%) hue-rotate(187deg) brightness(107%) contrast(88%)"
        timeOut = setTimeout(displayHover, 0);
        clearTimeout(timeOut, 2000)
    })
})

 
