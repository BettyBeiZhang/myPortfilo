
  $(window).scroll(function() {
    $('#myphoto').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+400) {
        $(this).addClass("fadeIn");
      }
    });
  });



// <script>
//   $('#animatedElement').click(function() {
//     $(this).addClass("slideUp");
//   });
// </script> 