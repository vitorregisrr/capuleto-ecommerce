(function () {
    'use strict';

    //Init Libs
    new WOW().init();
    $('.lazy').lazyload();

    const mainNav = $('#main-nav');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            mainNav.addClass('sticky');
        } else {
            mainNav.removeClass('sticky');
        }
    });

    // Validação newsletter
    $("#newsletter-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
        },

        messages: {
            email: {
                required: 'Por favor, insira um e-mail válido!',
                email: 'Email inválido'
            }
        }
    });

    // Dropdown da página de produtos
    $('#filtros-toggler').click(function () {
        $('#filtros-backdrop').addClass('active');
        $('#filtros-dropdown').addClass('active');
    });

    $('#filtros-dropdown .close').click(function () {
        $('#filtros-backdrop').removeClass('active');
        $('#filtros-dropdown').removeClass('active');
    });

    $('#filtros-backdrop').click(function () {
        $('#filtros-backdrop').removeClass('active');
        $('#filtros-dropdown').removeClass('active');
    });

    // Select customizado da página de produtos (filtro de ordernação)
    const customSelects = $('.custom_select--radio');
    customSelects.picker({
        containerClass: 'custom-select--radio'
    });

    // Função que submete o formulário ao selecionar a ordem
    $('.pc-list li').click( function(){
        $('#ordernar-form').submit();
    });

    window.dispatchEvent(new Event('resize'));
})();