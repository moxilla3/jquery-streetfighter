$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
  playHadouken();
  $('.ryu-ready').hide();
  $('.ryu-throwing').show();
  $('.hadouken').finish().show()
  .animate(
    {'left': '1020px'},
    500,
    function() {
      $(this).hide();
      $(this).css('left', '520px');
    }
  );
})
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });

 
  $('body').keydown(function(x) {
    if(x.keyCode == 88) {
      $('.ryu-still').hide();
      $('.ryu-ready').hide(); // added this to fix issue
      $('.ryu-cool').show();
    }
  })
  .on("keyup", function(x) {
    if(x.keyCode == 88) {
      $('.ryu-cool').hide();
      $('.ryu-ready').hide(); // added this to fix
      $('.ryu-still').show();     
    }
  });
 






    
});


//end doc ready function

//start audio function

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}



