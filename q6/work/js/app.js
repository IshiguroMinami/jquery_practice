$(function () {
  //セレクトボックスをクリックしたときに割り当てられた要素の変更イベントを検出
  $(".select-box").on("change", function () {
    //選択されたドロップダウンリストの値を取得し、変数 dropdownlist に格納、
    // また、変数dropdownlistには、クラスが "food-list" に割り当てられた要素のリストアイテムが格納します。
    const dropdownlist = $(this).val(), foodlist = $(".food-list li");
    // 変数 dropdownlist の値が "all" である場合は、全てのリストアイテムを表示
    if (dropdownlist === "all") {
      c.show();
    } else {
      // それ以外の場合はリストアイテムを個別に処理
      // 各リストアイテムのデータ属性と foodlist の値を比較して一致する場合は表示、一致しない場合は非表示にする
      $.each(foodlist, function (e, a) {
        // リストアイテムのデータ属性 "category-type" の値を取得し、変数 listcategory に格納
        const listcategory = $(a).data("category-type");
        // dropdownlist の値と listcategory の値を比較
        if (dropdownlist === listcategory) {
          $(a).show(); // 一致する場合はリストアイテムを表示
        } else {
          $(a).hide(); // 一致しない場合は非表示にする
        }
      });
    }
  });
});