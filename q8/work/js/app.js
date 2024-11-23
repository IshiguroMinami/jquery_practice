$(function () {
  //APIから返されたアイテムリストの削除
  function displayResults(items) {
    //表示されたメッセージの削除
    $(".message").remove();
    //アイテムと文字列の長さが０より多い場合は、
    if (items && items.length > 0) {
      //アイテム配列の各要素を反復して各本の情報を取ってきます。
      $.each(items, function (index, item) {
        //タイトルがある場合はタイトル名、なければ"タイトル不明"
        const title = item.title ? item.title : "タイトル不明";
        //作者名がある場合はその作者名、ない場合は"作者不明”
        const creator = item["dc:creator"] ? item["dc:creator"] : "作者不明";
        //出版社名がある場合はその出版社名、ない場合は"出版社不明"
        const publisher = item["dc:publisher"] ? item["dc:publisher"][0] : "出版社不明";
        //リンクがある場合はそのリンク、ない場合は"＃”
        const link = item.link["@id"] ? item.link["@id"] : "#";
        //各情報をHTMLリストアイテムとして作成
        const listItem = `
          <li class="lists-item">
            <div class="list-inner">
              <p>タイトル：${title}</p>
              <p>作者：${creator}</p>
              <p>出版社：${publisher}</p>
              <a href="${link}" target="_blank">書籍情報</a>
            </div>
          </li>`;
        //.lists要素の先頭に追加する
        $(".lists").prepend(listItem);
      });
    }
    //上記以外は
    else {
      //.lists要素の前に検索結果が見つかりませんでした。別のキーワードで検索してください。を表示する。
      $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索してください。</div>');
    }
  }
  // エラー処理関数
  function ajaxError(err) {
    // リストをクリア
    $(".lists").empty();
    // 既存のメッセージを削除
    $(".message").remove();
    //予期せぬエラーが発生した場合に表示するメッセージを設定
    let message = "予期せぬエラーが起きました。<br>再読み込みを行ってください。";
    //ステータスコードが0の場合、インターネット接続の問題を示すメッセージを表示します。
    if (err.status === 0) {
      message = "正常に通信できませんでした。<br>インターネットの接続を確認してください。";
    }
    //ステータスコードが400の場合、検索キーワードが有効ではありません。1文字以上で検索してください。を表示
    else if (err.status === 400) {
      message = "検索キーワードが有効ではありません。<br>1文字以上で検索してください。";
    }
    //予期せぬエラーが起きました。再読み込みを行ってください。を表示
    $(".lists").before(`<div class="message">${message}</div>`);
  }
  //pageCountは現在のページ番号を保持するための変数
  let pageCount = 1;
  //lastSearchWordは最後に検索したワードを保持するための変数
  let lastSearchWord = "";

  //検索ボタンを押したとき
  $(".search-btn").on("click", function () {
    //#search-input IDの要素から入力された値を取得し、その値を searchWord に代入します。
    const searchWord = $("#search-input").val();
    //現在の検索ワードが前回の検索ワードと異なるかを確認します。
    if (searchWord !== lastSearchWord) {
      //検索ワードが変わった場合、ページ番号 pageCount を1にリセットします。
      pageCount = 1;
      //検索結果を表示するリスト要素 .lists の内容をクリアします。
      $(".lists").empty();
      //lastSearchWord を現在の検索ワードに更新します。
      lastSearchWord = searchWord;
    }
    //検索ワードが同じ場合、ページ番号 pageCount をインクリメントして次のページの結果を取得する準備をします。
    else {
      pageCount++;
    }
    // .ajax() メソッドを使用してAjaxリクエストを送信します。
    $.ajax({
      //検索ワードとページ番号を含むURLを指定します。searchWord と pageCount の値がテンプレートリテラルで埋め込まれます。
      url: `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
      //HTTPメソッドとして GET を指定します。
      method: "GET"
    })
    // 成功時の処理関数を呼び出す
    .done(function(response){
      // 必要なデータを取得、存在しなければ空配列
      const items = response["@graph"][0]?.items || [];
      // 結果を表示
      displayResults(items);
    })
    // 失敗時の処理関数を呼び出す
    .fail(ajaxError);
  });
  //リセットボタンをクリックした時
  $(".reset-btn").on("click", function () {
    //変数pageCountの値を1にリセットします。これにより、次回の検索が最初のページから始まるようにします。
    pageCount = 1;
    //ラストサーチワードの値を空文字列にリセットします。次回の検索が新しい検索ワードとして扱われるようにします。
    lastSearchWord = "";
    //クラス名listsの要素の内容をクリアします。これにより、表示されている検索結果が削除されます。
    $(".lists").empty();
    //クラス名messageの要素を削除します。表示されているエラーメッセージや通知メッセージが削除されます。
    $(".message").remove();
    //IDがsearch-inputの要素の値を空文字列にリセットします。これにより、検索入力フィールドがクリアされます。
    $("#search-input").val("");
  });
});


/*done、fail内で関数を実行しています。
実行側でで引数を渡していないにも関わらずそれぞれの関数では引数を受け取れています。
なぜそのように実装したのか説明してください。
実装、回答で参考にしたサイトなどあれば共有お願いします。*/


//jQuery の Ajax メソッドの仕組みに基づいて動作しているからです。
//.done(): リクエスト成功時のレスポンスデータが自動的に渡されます。
//.fail(): リクエスト失敗時のエラー情報（例: ステータスコード、エラーメッセージ）が自動的に渡されます。

/*「成功時のデータ」や「失敗時のエラー情報」を自分で引き渡す必要がないため、コードがシンプルになり、バグが減ります。
Ajax リクエストは非同期で実行され、結果（成功・失敗）が戻ってきたときに適切なデータを引数として渡す必要があります。
この引数は、開発者が明示的に渡すのではなく、jQuery が内部で管理・供給します。*/

//参考にしたサイト
//https://qiita.com/katsunory/items/9bf9ee49ee5c08bf2b3d