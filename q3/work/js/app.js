$(function () {
  //ハンバーガーメニューをクリック
  $(".drawer_button").click(function () {

    //.drawer_buttonにactiveというclass名を付け外し
    $(".drawer_button").toggleClass("active");

    //.drawer_nav_wrapperにopenというclass名を付け外し
    $(".drawer_nav_wrapper").toggleClass("open");

    //.drawer_bgにフェードイン・フェードアウトを交互に行う
    $(".drawer_bg").fadeToggle();
  });

  //ハンバーガーメニューをクリックしてからの処理
  $(".drawer_bg").click(function () {

    //.drawer_bgを表示させる
    $(".drawer_bg").hide();

    //.drawer_buttonのactiveというClass名を外す
    $(".drawer_button").removeClass("active");

    //.drawer_nav_wrapperのopenのClass名をを外す
    $(".drawer_nav_wrapper").removeClass("open");

  });
});