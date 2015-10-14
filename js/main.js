$(window).ready(function() {
  $('.loadpage').fadeOut(1800);
  console.log("ready");
});
$(document).ready(function() {
  $('cat').click(function() {
    var id = $(this).attr('opens');
    console.log(id);
    $('html, body').animate({
        scrollTop: $(id).offset().top
    },1000);
  });
});
