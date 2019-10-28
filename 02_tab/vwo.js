'use strict';

// ①画像入れ替え
// mages/service-estimate.png(しば) =#shiba

$(function(){
  $("#shiba").attr("src","images/simulator-thumbnail.png");
});

// ②pタグhogehogeを追加する

// ▼上に追加する
$(function(){
  $("#js-vwo-text").prepend("<p>hogehoge要素の上に追加＝＝＝＝＝＝＝</p>");
});

// ▼下に追加する
$(function(){
  $("#js-vwo-text").append("<p>hogehoge要素の下に追加＝＝＝＝＝＝＝</p>");
});

// ▼.table-serviceの下に追加
$(function(){
  $(".table-service").append("<p>hogehogetableの上に追加============</p>");
});

// ③ボタンを押したらモーダルが出現
// 開くボタン#js-modal-btn
// モーダル#js-modal-container
// 閉じるボタン#js-modal-close
// モーダル背景#modal-bg
// ===========================
$(function(){
  // 開くボタンをクリックしたら、
  $("js-modal-btn").click(function(){
  // bodyの最後に<div id="modal-bg"></div>を挿入
    $("body").append('<div id="modal-bg"></div>');
  // 画面中央を計算する関数を実行
    modalResize();
  // モーダルウィンドウを表示
    $("#modal-bg,#modal-container").fadeIn("slow");
  // 画面のどこかをクリックしたらモーダルを閉じる
  $("#modal-bg,#modal-container").fadeOut("slow",function(){
    $("#modal-bg").remove();
  });
  // 挿入した<div id="modal-bg"></div>を削除
  });
});