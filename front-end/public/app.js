/* eslint-disable no-undef */
$(document).ready(function () {
    headerTransition();
    $(window).scroll(headerTransition);
    $(window).resize(headerTransition);
});

function headerTransition() {
    // Header color transition
    if ($(window).scrollTop() > 0) {
        // Show header on main page
        $('.header').addClass('main');
        $('.header .navbar-nav').show();
        if ($(window).width() < 700) {
            $('.header .navbar-brand').css('margin-left', '0');
        } else if ($(window).width() < 1010) {
            $('.header .navbar-brand').css('margin-left', '-20px');
        } else if ($(window).width() < 1150) {
            $('.header .navbar-brand').css('margin-left', '30px');
        } else {
            $('.header .navbar-brand').css('margin-left', '70px');
        }

        if ($(window).scrollTop() >= ($('.main-page').height() - $('.header').height() + 180)) {
            // Change header to white color
            $('.header').addClass('default');
            $('.header').removeClass('navbar-dark');
            $('.header').addClass('navbar-light');
            $('header .navbar-nav .btn-container a').css('color', '#000');
            $('.header .logo-text').css('color', '#000');
            $('.header .navbar-brand svg').css('filter', 'saturate(150%)');
        } else {
            // Change header to black color
            $('.header').removeClass('default');
            $('.header').removeClass('navbar-light');
            $('.header').addClass('navbar-dark');
            $('.navbar-nav .btn-container a').removeAttr('style');
            $('.header .logo-text').css('color', '#fff');
            $('.header .navbar-brand svg').removeAttr('style');
        }
    } else {
        // Hide header
        $('.header').removeClass('main');
        $('.header .navbar-nav').hide();
        if ($(window).width() < 650) {
            $('.header .navbar-brand').css('margin-left', '0');
        } if ($(window).width() < 1010) {
            $('.header .navbar-brand').css('margin-left', '-20px');
        } else {
            $('.header .navbar-brand').css('margin-left', '120px');
        }
    }

    // Mouse hover effect on apply button
    $('nav .btn-container a').hover(function () {
        $(window).scrollTop() >= $('.main-page').height()
            ? $(this).css('color', '#fff') : $(this).css('color', '#fff');
    });
    $('nav .btn-container a').mouseleave(function () {
        $(window).scrollTop() >= $('.main-page').height()
            ? $(this).css('color', '#000') : $(this).css('color', '#fff');
    });
}