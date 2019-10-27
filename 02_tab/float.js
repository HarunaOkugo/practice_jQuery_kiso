'use strict';

// リロードすると一瞬でちゃう
$(function(){
  var $float = $(".js-float-container");
  $float.hide();
  $(this).scroll(function(){
    if($(this).scrollTop()>300){
      $float.fadeIn();
    } else {
      $float.fadeOut();
    }
  }); 
});