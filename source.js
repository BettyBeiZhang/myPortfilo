
  $(window).scroll(function() {
    $('#myphoto').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+400) {
        $(this).addClass("fadeIn");
      }
    });
  });

  $(window).scroll(function() {
    $('#linkbtn').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+400) {
        $(this).addClass("floating");
      }
    });
  });


  $('#linkbtn').click(function() {
    $(this).addClass("floating");
  });
