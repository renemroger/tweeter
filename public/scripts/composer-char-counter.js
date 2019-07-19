$(document).ready(function() {
  const max = 140;
  const redValue = 0;
  $('.counter', this).html(max);

  $('.new-tweet').on('keyup', function(event) {
    const inputLength = $('textarea', this).val().length;
    const counter = $('.counter', this);
    $(counter.html(max - inputLength));
    (counter.text() <= redValue) ? $(counter.css({ 'color': 'red' })) : $(counter.css({ 'color': 'black' }))

  });
});