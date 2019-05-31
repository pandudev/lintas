$(document).ready(function () {

  // Set parent height = children height
  var parent = $('.slider'),
    child = parent.children('.slider__slide');
  parent.height(child.height());

  // Set parent height on resize window
  $(window).resize(function () {
    var parent = $('.slider'),
      child = parent.children('.slider__slide');
    parent.height(child.height());
  });

  // Set Options
  var speed = 500;            // Fade speed
  var autoswitch = true;      // Auto slider options
  var autoswitch_speed = 4000 // Auto slider speed

  // Add initial active class
  $('.slider__slide').first().addClass('active');

  // Hide all slides
  $('.slider__slide').hide();

  // Show first slider__slide
  $('.active').show();

  // Auto Slider Handler
  if (autoswitch == true) {
    setInterval(nextSlide, autoswitch_speed);
  }

  // Next Handler
  $('.slider__next').on('click', nextSlide);

  // Prev Handler
  $('.slider__prev').on('click', prevSlide);

  // Switch to next slider__slide
  function nextSlide() {
    $('.active').removeClass('active').addClass('oldActive');
    if ($('.oldActive').is(':last-of-type')) {
      $('.slider__slide').first().addClass('active');
    } else {
      $('.oldActive').next().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slider__slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  }

  // Switch to prev slider__slide
  function prevSlide() {
    $('.active').removeClass('active').addClass('oldActive');
    if ($('.oldActive').is(':first-child')) {
      $('.slider__slide').last().addClass('active');
    } else {
      $('.oldActive').prev().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slider__slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  }
});