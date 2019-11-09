'use strict';

$(function(){

  // 1
  $('#js-button').click(function(){
    var prefectures = $('#js-prefectures').val();
    $('#js-prefacture-result').text(prefectures);
  });

  // 2
  $('#js-button2').click(function(){
    var prefectures = $('#js-prefectures2 option:selected').text();
    var result = $('#js-prefacture-result2');
    $(result).text(prefectures);
    $(result).after('<p class="result-explanation">$( select要素 option:selected ).text();<br>でテキストを取得できます</p>');
  });

  // 3
  var history = '';
  $('#js-button3').click(function(){
    var prefectures = $('#js-prefectures3 option:selected').text();

    if(history !== prefectures){
      var result = $('#js-prefacture-result3');
      $(result).html(prefectures + '<p class="result-explanation">if文を使って「直前に選択された文字」と今選択した文字が同じでない時に処理が走るように変更。<br>ポイントは「var historyを外に出して、<br><span class="color-point">一度先頭でhistoryを「空」と定義すること！</span><br><br>最初はhistoryには何も入っていないので、どれを選択しても処理が走る。<br>最後にhistory = prefecturesでhistoryにprefecturesを代入して処理が完了する。<br><br>つまり、次の選択時にはhistoryには以前選択したデータが代入されている状態なので、判別ができる！</p>');
      history = prefectures;
    }
  });

});