$(function(){
 
$('.review__slider').slick({
    dots: true,
    fade: true,
});


$(function() {
    $(".slick-arrow").click(function() {
        $(".slick-arrow").removeClass("btn-active");         
        $(this).toggleClass("btn-active");
    })
});

$(window).scroll(function(){
    if ($(window).scrollTop() >= 10) {
        $('.header').addClass('sticky'),
        $('.menu').addClass('stick')
    } else {
        $('.header').removeClass('sticky'),
        $('.menu').removeClass('stick')
    }
});

$(".header,.footer").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
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
            
    $('body,html').animate({scrollTop: top}, 1500);
  });

var mixer = mixitup('.products');

});