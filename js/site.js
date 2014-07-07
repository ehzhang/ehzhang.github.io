$(document).ready(function(){
  var $splash = $('#splash');

  $splash
    .find('.title')
    .transition('fade down in', 2000);
  $splash
    .find('.body')
    .transition('fade up in', 2000);

  $('a').click(function(){
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });
});