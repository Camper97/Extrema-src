(function ($) {
  "use strict";

  //preloader
  $(window).bind("load", function () {
    // makes sure the whole site is loaded
    $("#status").delay(700).fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(1100).fadeOut("slow"); // will fade out the white DIV that covers the website.
  });

  //Page scrolling
  $(".for-sticky .navigation").onePageNav({
    filter: ":not(.external)",
    scrollThreshold: 0.25,
    scrollOffset: 92,
  });
  //sticky navigation
  $(".for-sticky").sticky({
    topSpacing: 0,
    className: "shrink",
  });

  //create menu for tablet/mobile
  $(".menu-box .navigation")
    .clone(false)
    .find("ul,li")
    .removeAttr("id")
    .remove(".sub-menu")
    .appendTo($(".mobile-menu"));
  $(".mobile-menu .sub-menu").remove();
  $(".mobile-menu").on("show.bs.collapse", function () {
    $("body").on("click", function () {
      $(".mobile-menu").collapse("hide");
    });
  });

  //toggle menu
  $(".menu-btn").on("click", function () {
    $(".mobile-menu").collapse({
      toggle: false,
    });
  });
  //menu for tablet/mobile scrolling
  $(".mobile-menu a").bind("click", function (event) {
    var $anchor = $(this);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 92,
        },
        800,
        "linear"
      );
    event.preventDefault();
  });

  //slider homepage setting
  $(".home-slider").owlCarousel({
    navigation: false, // Hide next and prev buttons
    slideSpeed: 300,
    autoplay: true,
    autoHeight: true,
    pagination: true,
    paginationSpeed: 300,
    singleItem: true,
    transitionStyle: "fade",
  });

  //slider team setting
  $(".team-slider").owlCarousel({
    navigation: false, // Hide next and prev buttons
    slideSpeed: 300,
    autoplay: true,
    autoHeight: true,
    pagination: true,
    paginationSpeed: 300,
    singleItem: true,
    mouseDrag: false,
    stopOnHover: true,
    transitionStyle: "fade",
  });

  // script prettyphoto
  $(document).ready(function () {
    $("a[data-rel^='prettyPhoto']").prettyPhoto({
      hook: "data-rel",
      deeplinking: false,
    });
  });

  //replace the data-background into background image
  $(".img-bg").each(function () {
    var imG = $(this).data("background");
    $(this).css("background-image", "url('" + imG + "') ");
  });

  //move to hash after loading
  $(window).bind("load", function () {
    if (window.location.hash) {
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(window.location.hash).offset().top - 93,
          },
          300,
          "linear"
        );
    }
  });

  //background ticker
  $(".big-ticker:has(>div:eq(1))").list_ticker({
    speed: 5000,
    effect: "fade",
  });

  //add class on touch device
  if (Modernizr.touch) {
    $("body").addClass("no-para");
  }
})(jQuery);
