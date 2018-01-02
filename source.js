$(window).scroll(function() {
  $('#myphoto').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+400) {
      $(this).addClass("fadeIn");
    }
  });
});

// $(window).scroll(function() {
//   $('.linkbtn').each(function(){
//   var imagePos = $(this).offset().top;

//   var topOfWindow = $(window).scrollTop();
//     if (imagePos < topOfWindow+400) {
//       $(this).addClass("tossing");
//     }
//   });
// });

$(".nav-link").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  }
});




