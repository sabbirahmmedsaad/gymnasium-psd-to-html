$(document).ready(function(){
    'use strict'

    //banner slider;
    $('.banner-slider').slick({
        arrows: false,
        dots:true
    });

    //about video popup;
    $('.venobox').venobox();
    
    //testimonial slider;
    $('.testimonial-slider').slick({
        arrows : false,
        slidesToShow : 2,
        dots : true
    });

});