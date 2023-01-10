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


    $(document).ready(function () {
        $('.select-long').select2({
            minimumResultsForSearch: Infinity,
            width: '149px'
        });
        $('.select-small').select2({
            minimumResultsForSearch: Infinity,
            width: '92px'
        });

        $('b[role="presentation"]').hide();
    });

    var mixer = mixitup('.products');

});



document.addEventListener('DOMContentLoaded', () => {

    const burger = document.querySelector('.menu__burger');
    const mobileBtn= document.querySelector('.mobile-btn');
    const mobileSidebar= document.querySelector('.products-catalog-sidebar');
    const mobileMenu = document.querySelector('.sidebar-nav');
    const wrapBtn = document.querySelector('.button-close-wrap');
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

    mobileBtn.addEventListener('click', () => {
        mobileBtn.classList.toggle('mobile-btn-active');
        if (mobileBtn.classList.contains('mobile-btn-active')) {
            mobileSidebar.classList.add('products-catalog-sidebar-active');
            bodyLock.classList.add('lock');
            wrapBtn.classList.add('button-close-wrap-active');
        }
    });

    wrapBtn.addEventListener('click', () => {
        mobileBtn.classList.toggle('mobile-btn-active');
        if (mobileMenu.classList.contains('mobile-btn-active')) {
            mobileSidebar.classList.add('products-catalog-sidebar-active');
            bodyLock.classList.add('lock');
            wrapBtn.classList.add('button-close-wrap-active');
        }
        else {
            bodyLock.classList.remove('lock');
            mobileSidebar.classList.remove('products-catalog-sidebar-active');
            wrapBtn.classList.remove('button-close-wrap-active');
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

var stepsSlider = document.getElementById('steps-slider');
var input0 = document.getElementById('nouislider__keypress-0');
var input1 = document.getElementById('nouislider__keypress-1');
var inputs = [input0, input1];

noUiSlider.create(stepsSlider, {
    start: [100, 1000],
    step: 5,
    connect: true,
    range: {
        'min': 0,
        'max': 1200
    },
    format:{
        to: (v) => v | 0,
        from: (v) => v | 0
    }
});

stepsSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
});

inputs.forEach(function (input, handle) {

    input.addEventListener('change', function () {
        stepsSlider.noUiSlider.setHandle(handle, this.value);
    });

    input.addEventListener('keydown', function (e) {

        var values = stepsSlider.noUiSlider.get();
        var value = Number(values[handle]);

        // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
        var steps = stepsSlider.noUiSlider.steps();

        // [down, up]
        var step = steps[handle];

        var position;

        // 13 is enter,
        // 38 is key up,
        // 40 is key down.
        switch (e.which) {

            case 13:
                stepsSlider.noUiSlider.setHandle(handle, this.value);
                break;

            case 38:

                // Get step to go increase slider value (up)
                position = step[1];

                // false = no step is set
                if (position === false) {
                    position = 1;
                }

                // null = edge of slider
                if (position !== null) {
                    stepsSlider.noUiSlider.setHandle(handle, value + position);
                }

                break;

            case 40:

                position = step[0];

                if (position === false) {
                    position = 1;
                }

                if (position !== null) {
                    stepsSlider.noUiSlider.setHandle(handle, value - position);
                }

                break;
        }
    });
});
