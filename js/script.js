$(document).ready(function () {
    $('.header__burger, .header__close').click(function(event) {
        $('.header__burger, .header__menu-content, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.header__burger-title, .header__logo,.main-block__container, .header__close-block, .header__link').toggleClass('hidden');
    });
});
let clickWord = document.querySelector('.header__burger-title');
clickWord.addEventListener('click', function () {
    let buttomBurger = document.querySelector('.header__burger');
    buttomBurger.classList.toggle('active');
    document.querySelector(".header__menu-content").classList.toggle('active');
    
    let hidden = [".header__close-block", ".header__burger-title", ".header__logo", ".header__link", ".main-block__container"];
    for (let i = 0; i < hidden.length; i++) {
        document.querySelector(hidden[i]).classList.toggle('hidden');
    }
});