$(document).ready(function(){
  
  var $window = $(window);
  var $shadow = $('.shadow');
  var $signup = $('#mc_embed_signup');
  var $exit = $signup.find('.exit');

  suscribe_open = false;
  suscribe_has_opened = false;

  setTimeout(function(){
    if (!suscribe_has_opened){ 
      openSubscribe();
    }
  }, 5000);

  $shadow.click(function(){
    closeSubscribe();
  });

  $exit.click(function(){
    closeSubscribe();
  });

  $('.logo').click(function(){
    openSubscribe();
  });

  function openSubscribe(){
    if (!suscribe_open){
      suscribe_has_opened = true;
      suscribe_open = true;
      $window.disablescroll({
          handleScrollbar: false
      });

      $shadow.css("display", "block");
      $shadow.animate({
        opacity: 0.5
      }, 200, function(){
      });

      $signup.css("display", "block");
      $signup.animate({
        opacity: 1
        //top: '50vh'
      }, 400);
    }
  }

  function closeSubscribe(){
    if (suscribe_open){
      suscribe_open = false;
      $window.disablescroll("undo");
      
      $signup.animate({
        opacity: 0
        //top: '-50vh'
      }, 400, function(){
        $signup.css("display", "none");
      });

      $shadow.animate({
        opacity: 0
      }, 400, function(){
        $shadow.css("display", "none");
      });
    }
  }
  
});