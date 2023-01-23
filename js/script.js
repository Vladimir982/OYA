$(document).ready(function () {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__burger-circle, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
});
let clickWord = document.querySelector('.header__burger-title');

clickWord.addEventListener('click', function () {
    let buttomBurger = document.querySelector('.header__burger');
    buttomBurger.classList.toggle('active');
});