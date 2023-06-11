/* eslint-disable no-undef */
$(document).ready(function () {
    headerTransition();
    $(window).scroll(headerTransition);
    $(window).resize(headerTransition);

    // Burger menu colors
    $('.navbar-toggler').click(function () {
        $('.header .navbar-nav').show();
        $('.nav-link').addClass(['white-burger', 'text-white']);
        if ($('.nav-link').hasClass('white-burger')) {
            $('.nav-link-apply').hide();
        } else {
            $('.nav-link-apply').show();
        }
    });
    $('.nav-link').click(function () {
        $('.nav-link').removeClass('white-burger');
        $('.nav-link-apply').show();
        headerTransition();
    });
});

function headerTransition() {
    // Header color transition
    if ($(window).scrollTop() > 0) {
        // Show header on main page
        $('.header').addClass('main');
        $('.header .navbar-nav').show();

        if ($(window).width() <= 1000) {
            $('.header .navbar-brand').css('margin-left', '0');
            $('.header .navbar-brand').addClass('w-100');
        } else {
            $('.header .navbar-brand').css('margin-left', '70px');
            $('.header .navbar-brand').removeClass('w-100');
        }

        if ($(window).scrollTop() >= ($('.main-page').height() - $('.header').height() + 180)) {
            // Change header to white color
            $('.header').addClass('default');
            // dark nav links + logo
            $('.header a, .header p').addClass('text-dark');
            $('.header a, .header p').removeClass('text-white');
            // dark burger menu
            $('.header').removeClass('navbar-dark');
            $('.header').addClass('navbar-light');
            // increase logo saturation
            $('.header .navbar-brand svg').css('filter', 'saturate(150%)');
        } else {
            // Change header to black color
            $('.header').removeClass('default');
            // white nav links + logo
            $('.header a, .header p').addClass('text-white');
            $('.header a, .header p').removeClass('text-dark');
            // white burger menu
            $('.header').removeClass('navbar-light');
            $('.header').addClass('navbar-dark');
            // decrease logo saturation
            $('.header .navbar-brand svg').removeAttr('style');
        }
    } else {
        // Hide header
        $('.header').removeClass('main');
        $('.header .navbar-brand').removeClass('w-100');
        $('.header .navbar-nav').hide();
        // white burger menu
        $('.header').removeClass('navbar-light');
        $('.header').addClass('navbar-dark');

        if ($(window).width() < 650) {
            $('.header .navbar-brand').css('margin-left', '0');
        } else if ($(window).width() < 991) {
            $('.header .navbar-brand').css('margin-left', '-20px');
        } else {
            $('.header .navbar-brand').css('margin-left', '120px');
        }
    }
    if ($(window).width() <= 425) {
        $('.header .navbar-brand').css({
            transform: 'scale(0.75)',
            marginLeft: '-80px',
        });
        if ($(window).width() <= 325) {
            $('.header .navbar-brand').css('margin-left', '-50px');
            $('.header .navbar-brand .logo-text p').css({
                fontSize: '24px',
                height: '20px',
            });
            $('.header button').css({
                right: '15px',
                padding: 0
            });
        }
    } else {
        // $('.header .navbar-brand').removeAttr('style');
        $('.header .navbar-brand .logo-text p').removeAttr('style');
        $('.header button').removeAttr('style');
    }

    // Mouse hover effect on apply button
    $('nav .btn-container a').hover(function () {
        $(window).scrollTop() >= $('.main-page').height()
            ? $(this).addClass('text-white') : $(this).addClass('text-white');
    });
    $('nav .btn-container a').mouseleave(function () {
        $(window).scrollTop() >= $('.main-page').height()
            ? $(this).addClass('text-dark') : $(this).addClass('text-white');
    });
}