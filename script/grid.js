$(document).ready(function(){
  
  var $image_container = $('.grid-container');
  var $image = $('.grid-image');
  var image_size = $image_container.width()/3;

  console.log($image_container.width());
  $image.css("width", image_size+"px");
  $image.css("height", image_size+"px");
  
});