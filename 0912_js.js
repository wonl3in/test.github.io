$(document).ready(function() {
    $(window).scroll(function() {
      var scrollPos = $(window).scrollTop();
      var text1Pos = $('.text-1').offset().top;
      var text2Pos = $('.text-2').offset().top;
  
      if (scrollPos > text1Pos - ($(window).height() / 2)) {
        $('.text-1').fadeOut();
      } else {
        $('.text-1').fadeIn();
      }
  
      if (scrollPos > text2Pos - ($(window).height() / 2)) {
        $('.text-2').fadeOut();
      } else {
        $('.text-2').fadeIn();
      }
    });
  });
  