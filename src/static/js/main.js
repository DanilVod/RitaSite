$(document).ready(function ($){
    $(function() {
        $('.menu__icon').on('click', function () {
            $(this).closest('.header__menu').toggleClass('menu-open');
        });
    });
});