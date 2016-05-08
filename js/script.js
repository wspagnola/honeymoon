$(document).ready(function() {
   $('p').addClass('red_font');
  $('.flag').mouseenter(function(){
        $(this).addClass("border");
    });
    $(".flag").mouseleave(function(){
        $(this).removeClass("border");
    });
});

$(document).ready(function() {
    $("#plane").draggable();
});
  