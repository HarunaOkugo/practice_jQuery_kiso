'use strict';

// トグル
$(function(){
  $(".js-toggle-bar").on("click",function(){
    $(this).next().slideToggle();
    if($(this).hasClass("is-open")){
      $(".js-toggle-bar").removeClass("is-open");
    }
    else{
      $(this).addClass("is-open");
    }
  });
});

// 口コミ開くボタン???????...ともっと見る消せない
$(function(){
  $(".js-post-more").on("click",function(){
    $(".js-post-more-comment").removeClass("is-hide");
    $(".js-post-more-comment").slideToggle();
    $(".js-dots").removeClass("is-hide");
  });
});

// 口コミ閉じるボタン
$(function(){
  $(".js-post-close").on("click",function(){
    $(".js-post-more-comment").slideToggle();
  })
});