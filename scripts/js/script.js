$(document).ready(function () {
    
    'use strict';

    // Nice Scroll
    //$("html").niceScroll();

    // Carousel
	$('.carousel').carousel({
		interval:5000,
		pause: "hover"
	});

    // Navbar Links Active
    $('.navbar .collapse ul li').click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });

    /* Navlinks Sections Animation */
    $('.nav-link').click(function() {
        var sectionTo = $(this).attr('href');
        $('html, body').animate({
          scrollTop: $(sectionTo).offset().top
        }, 1000);
    });

    // Navbar Scroll
    var navbar = $('.navbar'),
        scroll = $('.scroll'),
        scrollSide = $('.icon-bar');

    $(window).scroll(function () {
        $(this).scrollTop() >= 630 ? navbar.addClass('bg-dark') : navbar.removeClass('bg-dark');
        $(this).scrollTop() >= 630 ? scroll.show() : scroll.hide();
        $(this).scrollTop() >= 150 ? scrollSide.show() : scrollSide.hide();
    });

    /* Scroll */
    scroll.click(function(){
        $("html,body").animate({ scrollTop: 0 }, 2000);
    });
});