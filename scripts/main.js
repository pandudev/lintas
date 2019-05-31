$(document).ready(function () {

  $(".header__hamburger").click(function () {
    $(".mobile-nav").addClass("show");
  });

  $(".nav-close").click(function () {
    $(".mobile-nav").removeClass("show");
  });

  $(".header__nav li").hover(
    function () {
      $("ul", this).stop().slideDown(200);
    },
    function () {
      $("ul", this).stop().slideUp(200);
    }
  );

  $(".mobile-link").click(function () {
    $(".list__submenu:visible").slideUp(200);
    $(this).siblings().slideDown(200);
  });


})