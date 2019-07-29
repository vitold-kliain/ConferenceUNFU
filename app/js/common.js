$(function () {
    $('.search__icon').click(function () {
        $('.search__form').stop().slideToggle();
        $('.search__form input[type=text]').focus();
    })

    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            $('.search__form').slideUp();
        }
    }).click(function () {
        $('.search__form').slideUp();
    });

    $('.search').click(function (e) {
        e.stopPropagation();
    });

    $('.top-line').after('<div class="menu-mobile"></div>')
    $('.menu-top').clone().appendTo('.menu-mobile');
    $('.hamburger').click(function () {
        $('.menu-mobile').stop().slideToggle();
        $(this).toggleClass('is-active');
    });

    $('.committee__btn .button-more').click(function () {
        $('.more').slideToggle();
        if ($(this).text() == 'Показати більше') {
            $(this).text('Показати менше');
        }
        else {
            $(this).html('Показати більше')
        }
    });
});