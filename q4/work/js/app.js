$(function() {
  //ナビメニューの<li>要素がクリックされたときの処理
  $(".nav li").on("click", function(){
    //クリックされた<li>要素のインデックス番号を取得
    let index = $(".nav li").index(this);
    //全ての .description li 要素に 'is-hidden' クラスを追加する
    $(".description li").addClass("is-hidden");
    //クリックされたメニューに対応する .description li 要素の 'is-hidden' クラスを削除する
    $(".description li").eq(index).removeClass("is-hidden");
  })
});
