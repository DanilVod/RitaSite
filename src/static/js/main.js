const ALL_TABS_ID = 'all';

function menuOnClick() {
  $(this)
    .closest('.header__menu')
    .toggleClass('menu-open');
}
function tabsOnClick() {
  const tabId = $(this).data('tab');
  const content = $(`.portfolio-item[data-tab=${tabId}]`);
  $('.tab').removeClass('isActive');
  $(this).addClass('isActive');
  if (tabId === ALL_TABS_ID) {
    return $('.portfolio-item').removeClass('hidden');
  }
  $('.portfolio-item').addClass('hidden');
  $(content).removeClass('hidden');
}
$(document).ready(($) => {
  $('.menu__icon').on('click', menuOnClick);
  $('.tab').on('click', tabsOnClick);
  $('.slider-block').slick({
    centerMode: true,
    centerPadding: '-10px',
    slidesToShow: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
      },
    },
    ],
  });
});
