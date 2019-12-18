(function () {
    'use strict';

    //Init Libs
    new WOW().init();
    $('.lazy').lazyload();


    const mainNav = $('#main-nav');
    
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            mainNav.addClass('sticky');
        } else {
            mainNav.removeClass('sticky');
        }
    });

    // Validação newsletter
    // $("#newsletter-form").validate({
    //     rules: {
    //         email: {
    //             required: true,
    //             email: true
    //         },
    //     },
    
    //     messages: {
    //         email: {
    //             required: 'Precisamos saber seu email',
    //             email: 'Email inválido'
    //         }
    //     }
    // });

    window.dispatchEvent(new Event('resize'));

})();