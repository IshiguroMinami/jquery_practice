$("#q1").ready(function(){
  //読み込み完了時にq1の文字の色をgreenに変更する
  $("#q1").css("color", "green");
});

$("#q2").click(function(){
  //クリックをしたときにq２のボタンのバックグラウンドカラーをピンクに変更する
  $("#q2").css("background", "pink");
});

$("#q3").click(function(){
  //クリックしたときにq３ボタンを３秒かけてフェードアウトする処理
  $("#q3").fadeOut(3000);
});

$("#q4").click(function(){
  //クリックしたときにサイズを変更する
  $(this).addClass('large');
});

$("#q5").click(function(){
  //クリックしたときにDOMの操作をしたい
  $(this).text('DOMの操作');
});

// $("#q6").click(function(){
//   //クリックしたときにサイズを変更する
//   $(this).addClass('large');
// });

// $("#q7").click(function(){
//   //クリックしたときにサイズを変更する
//   $(this).addClass('large');
// });

// $("#q8").click(function(){
//   //クリックしたときにサイズを変更する
//   $(this).addClass('large');
// });

// $("#q9").click(function(){
//   //クリックしたときにサイズを変更する
//   $(this).addClass('large');
// });

// $("#q10").click(function(){
//   //クリックしたときにサイズを変更する
//   $(this).addClass('large');
// });