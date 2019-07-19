$(document).ready(function() {

  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $('.toTop').css('visibility', 'visible');
    } else {
      $('.toTop').css('visibility', 'hidden').click(() => {
        $(window).scrollTop(0);
      });
    }
  });
})