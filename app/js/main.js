$(function () {

    $(".star").rateYo({
        rating: 4,
        starWidth: '15px',
        spacing   : '6px',
        starSvg: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.0229731 6.16432C0.0780973 5.9946 0.224753 5.87091 0.401315 5.84529L5.36139 5.12451L7.57966 0.629933C7.6586 0.469933 7.82157 0.368652 7.99997 0.368652C8.17841 0.368652 8.34135 0.469933 8.42032 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4365 15.5776L8 13.2451L3.56374 15.5775C3.40577 15.6606 3.21443 15.6467 3.07009 15.5419C2.92574 15.437 2.8534 15.2593 2.88356 15.0834L3.73096 10.1434L0.141566 6.64478C0.0138168 6.52028 -0.0322151 6.334 0.0229731 6.16432Z"/></svg>'
        
      });

    var QtyInput = (function () {
        var $qtyInputs = $(".qty-input");
    
        if (!$qtyInputs.length) {
            return;
        }
    
        var $inputs = $qtyInputs.find(".product-qty");
        var $countBtn = $qtyInputs.find(".qty-count");
        var qtyMin = parseInt($inputs.attr("min"));
        var qtyMax = parseInt($inputs.attr("max"));
    
        $inputs.change(function () {
            var $this = $(this);
            var $minusBtn = $this.siblings(".qty-count--minus");
            var $addBtn = $this.siblings(".qty-count--add");
            var qty = parseInt($this.val());
    
            if (isNaN(qty) || qty <= qtyMin) {
                $this.val(qtyMin);
                $minusBtn.attr("disabled", true);
            } else {
                $minusBtn.attr("disabled", false);
                
                if(qty >= qtyMax){
                    $this.val(qtyMax);
                    $addBtn.attr('disabled', true);
                } else {
                    $this.val(qty);
                    $addBtn.attr('disabled', false);
                }
            }
        });
    
        $countBtn.click(function () {
            var operator = this.dataset.action;
            var $this = $(this);
            var $input = $this.siblings(".product-qty");
            var qty = parseInt($input.val());
    
            if (operator == "add") {
                qty += 1;
                if (qty >= qtyMin + 1) {
                    $this.siblings(".qty-count--minus").attr("disabled", false);
                }
    
                if (qty >= qtyMax) {
                    $this.attr("disabled", true);
                }
            } else {
                qty = qty <= qtyMin ? qtyMin : (qty -= 1);
                
                if (qty == qtyMin) {
                    $this.attr("disabled", true);
                }
    
                if (qty < qtyMax) {
                    $this.siblings(".qty-count--add").attr("disabled", false);
                }
            }
    
            $input.val(qty);
        });
    })();

    $('.review__slider').slick({
        dots: true,
        fade: true,
        infinite: false,
    });

    $('.product-about__slider').slick({
        dots: false,
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


