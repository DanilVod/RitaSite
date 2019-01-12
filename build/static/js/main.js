$(document).ready(function() {
    $('.slider').slick()
});

$(document).ready(function ($) {
    $(function() {
        $('.menu-mobile').on('click', function() {
            $(this).closet('.menu').toggleClass('menu-open');
        });
    });
})(jQuery);