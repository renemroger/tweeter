$(document).ready(function() {
  $('.tweet').hover(function() {

    $($('.hoverToggle', this)).css("visibility", "visible");
  }, (function() {
    $($('.hoverToggle', this)).css("visibility", "hidden");
  }));
});
