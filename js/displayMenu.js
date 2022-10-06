const hamburger = document.querySelector('#hamburger');
const menuHamburger = document.getElementById('menu__hamburger');
const header = document.querySelector('#header');
const main = document.querySelector('#main');
const footer = document.querySelector('#footer');

hamburger.addEventListener('click', function displayMenu() {
    toggle = !toggle;

    if (toggle) {
        menuHamburger.style.display = "block";
        menuHamburger.style.opacity = 1;
        header.style.display = "none";
        main.style.display = "none";
        footer.style.display = "none";
    } else if (toggle === false) {
        menuHamburger.style.opacity = 0;
        menuHamburger.style.display = "none";
        header.style.display = "block";
        main.style.display = "block";
        footer.style.display = "block";
    }
  });
  


