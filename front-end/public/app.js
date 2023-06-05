/* eslint-disable no-undef */
$(document).ready(function () {
    headerTransition();
    $(window).scroll(headerTransition);
});

function headerTransition() {
    // Header color transition
    if ($(window).scrollTop() > 0) {
        // Show header on main page
        $('header').addClass('main');
        $('header nav').show();
        $('header .logo').css('margin-left', '70px');

        if ($(window).scrollTop() >= ($('.main-page').height() - $('header').height() + 180)) {
            // Change header to white color
            $('header').addClass('default');
            $('nav .btn-container a').css('color', '#000');
            $('header .logo-text').css('color', '#000');
            $('header .logo img').css('filter', 'saturate(150%)');
        } else {
            // Change header to black color
            $('header').removeClass('default');
            $('nav .btn-container a').removeAttr('style');
            $('header .logo-text').css('color', '#fff');
            $('header .logo img').removeAttr('style');
        }
    } else {
        // Hide header
        $('header').removeClass('main');
        $('header nav').hide();
        $('header .logo').css('margin-left', '120px');
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