$(function (){
//openボタンをクリック
  $(".modal_open_button").click(function (){

     //.madal_winを0.3秒かけてフェードインする
    $(".modal_win").fadeIn(300)

  });

  //閉じるボタンをクリック
  $(".modal_close_button").click(function(){

    //.modal_winを0.3秒かけてフェードアウトする
    $(".modal_win").fadeOut(300);

  });

});