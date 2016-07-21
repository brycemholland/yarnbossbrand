$(document).ready(function(){
  
  var $image_container = $('.image-container');
  var image_class_array = ['yb360r6', 'yb360r5', 'yb360r4', 'yb360r3', 'yb360r2', 'yb360r1', 'yb360center', 'yb360l1', 'yb360l2', 'yb360l3', 'yb360l4', 'yb360l5', 'yb360l6'];
  var image_index = 6;
  var mouse_is_down = false;
  var starting_click
  var change_distance = $image_container.width()/20;
  if (change_distance > 40){ 
    change_distance = 30;
  }


  // Functions =====================================

  function rotateLeft(){
    if (image_index > 0){ 
      image_index--;
    } else {
      image_index = image_class_array.length-1;
    }
    $image.removeClass("image-active");
    $image.eq(image_index).addClass("image-active");
  };

  function rotateRight(){
    if (image_index < image_class_array.length-1){ 
      image_index++;
    } else {
      image_index = 0;
    }
    $image.removeClass("image-active");
    $image.eq(image_index).addClass("image-active");
  };


  // Create Images =================================

  for (var i=image_class_array.length-1; i>=0; i--){
    if (image_class_array[i] == "yb360center"){
      $image_container.prepend('<div class="image image-active '+image_class_array[i]+'"></div>');
    } else { 
      $image_container.prepend('<div class="image '+image_class_array[i]+'"></div>');
    }
  }

  var $image = $('.image');


  // Mouse =========================================

  $image_container.mousedown(function(){
    starting_click = event.pageX;
    mouse_is_down = true;
  });

  $(document).mouseup(function(event) {
    mouse_is_down = false;
  });

  $(document).mousemove(function(){
    if (mouse_is_down){
      if (event.pageX > starting_click+change_distance){
        starting_click = event.pageX;
        rotateRight();
      } else if (event.pageX < starting_click-change_distance){
        starting_click = event.pageX;
        rotateLeft();
      }
    }
  });


  // Touch =========================================

  var ic = document.getElementById("360-image-viewer");

  ic.addEventListener('touchstart', function(e) {
    starting_click = e.changedTouches[0].pageX;
  }, false);

  ic.addEventListener('touchmove', function(e) {
    if (e.changedTouches[0].pageX > starting_click+change_distance){
      starting_click = e.changedTouches[0].pageX;
      rotateRight();
    } else if (e.changedTouches[0].pageX < starting_click-change_distance){
      starting_click = e.changedTouches[0].pageX;
      rotateLeft();
    }
  }, false);

});