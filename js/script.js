$(document).ready(function () {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu-content, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.header__burger-title, .header__logo,.main-block__container, .header__block').toggleClass('hidden')
    })
});
let clickWord = document.querySelector('.header__burger-title');
clickWord.addEventListener('click', function () {
    let buttomBurger = document.querySelector('.header__burger');
    buttomBurger.classList.toggle('active');
    document.querySelector(".header__burger-title").classList.toggle('hidden');
    document.querySelector(".header__logo").classList.toggle('hidden');
    document.querySelector(".header__block").classList.toggle('hidden');
    document.querySelector(".main-block__container").classList.toggle('hidden');
    document.querySelector(".header__menu-content").classList.toggle('active');
});