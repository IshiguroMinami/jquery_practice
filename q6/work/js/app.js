$(function () {
  //セレクトボックスをクリックしたときに割り当てられた要素の変更イベントを検出
  $(".select-box").on("change", function () {
    //選択されたドロップダウンリストの値を取得し、変数 dropdownlist に格納、
    const dropdownList = $(this).val();
    // クラスが "food-list" に割り当てられた要素のリストアイテムを変数 foodList に格納
    const foodList = $(".food-list li");
    // 変数 dropdownlist の値が "all" である場合は、
    if (dropdownList === "all") {
      //全てのリストアイテムを表示
      foodList.show();
    } else {
      // それ以外の場合はリストアイテムを個別に処理
      // 各リストアイテムのデータ属性と foodList の値を比較して一致する場合は表示、一致しない場合は非表示にする
      $.each(foodList, function (index, listItem) {
        // リストアイテムのデータ属性 "category-type" の値を取得し、変数 listcategory に格納
        const listCategory = $(listItem).data("category-type");
        // dropdownlist の値と listcategory の値を比較
        if (dropdownList === listCategory) {
          // 一致する場合はリストアイテムを表示
          $(listItem).show();
        } else {
          // 一致しない場合は非表示にする
          $(listItem).hide();
        }
      });
    }
  });
});