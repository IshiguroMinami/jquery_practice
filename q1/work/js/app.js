$(function () {
//q1を読み込んだときに
$("#q1").ready(function(){
  //q1の文字の色をgreenに変更する
  $("#q1").css("color", "green");
});

//q2をクリックしたときに
$("#q2").on("click",function(){
  //q２のボタンのバックグラウンドカラーをpinkに変更する
  $("#q2").css("background", "pink");
});

//q3をクリックしたときに
$("#q3").on("click",function(){
  //q３ボタンを３秒かけてフェードアウトする
  $("#q3").fadeOut(3000);
});

//q4をクリックしたときに
$("#q4").on("click",function(){
  //q４のボタンのサイズを大きく変更する
  $(this).addClass("large");
});

//q5をクリックしたときに
$("#q5").on("click",function(){
  //DOMの操作をしたい
  $(this).prepend("DOMの中").before("DOMの前").after("DOMの後");
});

//q6をクリックしたときに
$("#q6").on("click",function(){
  //2秒かけて"margin-top":100,"margin-left":100の位置に移動させる
  $(this).animate({"margin-top":100,"margin-left":100},2000);
});

//q7をクリックしたときに
$("#q7").on("click",function(){
  //クリックされた要素（この場合は<button id="q7" class="btn">Q7</button>）をコンソールで表示させる
  console.log(this);
});

//q8をクリックしたときに
$("#q8").on({mouseenter: function(){
  //ホバー時にサイズを"large"に変更する
  $(this).addClass('large')},
  //カーソルが要素の外に行った時は"large"を削除する
  mouseleave: function () {
    $(this).removeClass("large") }
});

//q9内のリスト項目ををクリックしたときに
$("#q9 li").on("click",function(){
  // クリックされたリスト項目のインデックス番号（配列的な位置）を取得する
  var a = $(this).index();
  //配列の番号をアラート表示させる
  alert(a);
});

//q10内のリスト項目（li）がクリックされたときに
$("#q10 li").on("click",function(){
  //クリックされたq10のリスト項目のインデックス番号を取得し、変数aに代入する
  var a = $(this).index();
  //q11内の、インデックス番号aに該当するリスト項目（li）をコンソールに表示する
  console.log($("#q11 li").eq(a));
  //インデックス番号aに該当するq11のリスト項目に、"large-text"というクラスを追加し、文字を大きくする
  $("#q11 li").eq(a).addClass("large-text")
})
});