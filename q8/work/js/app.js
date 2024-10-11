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
        var title = item.title ? item.title : "タイトル不明";
        //作者名がある場合はその作者名、ない場合は"作者不明”
        var creator = item["dc:creator"] ? item["dc:creator"] : "作者不明";
        //出版社名がある場合はその出版社名、ない場合は"出版社不明"
        var publisher = item["dc:publisher"] ? item["dc:publisher"][0] : "出版社不明";
        //リンクがある場合はそのリンク、ない場合は"＃”
        var link = item.link["@id"] ? item.link["@id"] : "#";
        //各情報をHTMLリストアイテムとして作成
        var listItem = `
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
  //pageCountは現在のページ番号を保持するための変数 lastSearchWordは最後に検索したワードを保持するための変数
  var pageCount = 1, lastSearchWord = "";

  //検索ボタンを押したとき
  $(".search-btn").on("click", function () {
    //#search-input IDの要素から入力された値を取得し、その値を searchWord に代入します。
    var searchWord = $("#search-input").val();
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
    //Ajaxリクエストが成功した場合に実行されるコールバック関数を設定します。
    .done(function (response) {
      //response オブジェクトの ["@graph"][0].items を引数として displayResults 関数を呼び出し、検索結果を表示します。
      displayResults(response["@graph"][0].items);
    })
    //Ajaxリクエストが失敗した場合に実行されるコールバック関数を設定します。
    .fail(function (err) {
      //リスト要素 .lists の内容をクリアします。
      $(".lists").empty();
      //以前のメッセージ要素を削除します。
      $(".message").remove();
      //ステータスコードが0の場合、インターネット接続の問題を示すメッセージを表示します。
      if (err.status === 0) {
        $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続を確認してください。</div>');
      }
      //ステータスコードが400の場合、検索キーワードが有効ではありません。1文字以上で検索してください。を表示
      else if (err.status === 400) {
        $(".lists").before('<div class="message">検索キーワードが有効ではありません。<br>1文字以上で検索してください。</div>');
      }
      //それ以外の場合、予期せぬエラーが起きました。再読み込みを行ってください。を表示
      else {
        $(".lists").before('<div class="message">予期せぬエラーが起きました。<br>再読み込みを行ってください。</div>');
      }
    });
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
