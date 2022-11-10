$(function () {

    $('.review__slider').slick({
        dots: true,
        fade: true,
        infinite: false,
    });
    

    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= 10) {
            $('.header').addClass('sticky'),
                $('.menu').addClass('stick')
        } else {
            $('.header').removeClass('sticky'),
                $('.menu').removeClass('stick')
        }
    });

    $(".header,.footer").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;

        if (id === '#popular') {
            top = top - 200;
        }

        else if (id === '#footer') {
            top = top - 700;
        }

        else if (id === '#about', '#skills', '#services', '#reviews', '#contact') {
            top = top - 50;
        }

        $('body,html').animate({ scrollTop: top }, 1500);
    });

    var mixer = mixitup('.products');

});



document.addEventListener('DOMContentLoaded', () => {

    const burger = document.querySelector('.menu__burger');
    const mobileMenu = document.querySelector('.sidebar-nav');
    const bodyLock = document.querySelector('body');
    const buttonClose = document.querySelector('.button-close');
    const footerCon = document.querySelector('.footer__contacts');

    burger.addEventListener('click', () => {
        mobileMenu.classList.toggle('sidebar-nav-active');
        if (mobileMenu.classList.contains('sidebar-nav-active')) {
            bodyLock.classList.add('lock');
            buttonClose.classList.add('button-close-active');
            footerCon.classList.add('footer__contacts-active');
        }
        else { 
            bodyLock.classList.remove('lock');
            buttonClose.classList.remove('button-close-active');
            footerCon.classList.remove('footer__contacts-active');
        }
    });

    buttonClose.addEventListener('click', () => {
        mobileMenu.classList.toggle('sidebar-nav-active');
        if (mobileMenu.classList.contains('sidebar-nav-active')) {
            bodyLock.classList.add('lock');
            buttonClose.classList.add('button-close-active');
            footerCon.classList.add('footer__contacts-active');
        }
        else { 
            bodyLock.classList.remove('lock');
            buttonClose.classList.remove('button-close-active');
            footerCon.classList.remove('footer__contacts-active');
        }
    });
});



if (window.matchMedia("(max-width: 768px)").matches) {
    $('.restaurants__items').slick({
        dots: true,
        fade: true,
        arrows: false,
    });
  } 
