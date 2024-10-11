$(function (){
// li 要素にマウスが乗ったときの処理を指定
  $(".dropdwn li").hover(function(){
    // ホバーされたliの子要素のul要素を取得し、アニメーションを停止（もしあれば）してから、開閉スピードを0.4秒に設定
    $(this).children("ul").stop().slideToggle(400);
  },
  // マウスが li要素から離れたときの処理を指定
  function () {
    // ホバーされたliの子要素のul要素を取得し、アニメーションを停止（もしあれば）してから、開閉スピードを0.4秒に設定
    $(this).children("ul").stop().slideToggle(400);
  })
});
