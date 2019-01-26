const ALL_TABS_ID = "all";

function menuOnClick() {
  $(this)
    .closest(".header__menu")
    .toggleClass("menu-open");
};

function tabsOnClick() {
  const tabId = $(this).data("tab");
  const content = $(`.portfolio-item[data-tab=${tabId}]`);

  $(".tab").removeClass("isActive");
  $(this).addClass("isActive");

  if (tabId === ALL_TABS_ID) {
    return $(".portfolio-item").removeClass("hidden");
  }
  $(".portfolio-item").addClass("hidden");
  $(content).removeClass("hidden");
};

$(document).ready(function($) {
  $(".menu__icon").on("click", menuOnClick);
  $(".tab").on("click", tabsOnClick);
});



