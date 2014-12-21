$(document).ready(function(){
  $('#header')
      .find('.content')
      .fadeIn(2000);

  $('a.down').click(function(){
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });
});