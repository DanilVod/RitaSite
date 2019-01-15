$(document).ready(function ($){
    $(function() {
        $('.menu__icon').on('click', function () {
            $(this).closest('.header__menu').toggleClass('menu-open');
        });
    });
});

$(" .tabs__content__item").not(":first").hide();

var tabIndex = 0, //индекс текущего таба
    countTabs = $(".tabs__content__item").length - 1, //количество табов
    time = 5000; // время перелистывания, установленно 1сек

$(".tabs.portfolio__tabs .tabs__block .tab").click(function () {
  tabIndex = $(this).index();
  checkTab();
});

setInterval(function(){
  tabIndex++;
  if(tabIndex > countTabs){
    tabIndex = 0;
  }
  checkTab();
}, time);

function checkTab(){
  $(".tab").removeClass("isActive").eq(tabIndex).addClass("isActive");
    $(".tabs.portfolio__tabs .tabs__content__item")
    .hide()
    .eq(tabIndex)
    .fadeIn();
}

