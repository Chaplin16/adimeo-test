const menuTitle = document.querySelectorAll('.menu__title');
const menuLogo = document.querySelector('.menu__logo');
let timeOut;

menuTitle.forEach(menu => {
    menu.addEventListener('click', function() {
        menuLogo.classList.add('bgLogo');
        menuLogo.addEventListener("animationend", function () {
            menuLogo.classList.remove("bgLogo");
        })
    })
})

 