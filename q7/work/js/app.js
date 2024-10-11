// ページ全体のDOMが読み込まれた後に、内部のコードを実行するための設定
$(document).ready(function() {
  //アカウント作成ボタンを押したときに毎部の処理を実行する
  $(".btn__submit").click(function() {
    // 個人情報
    // `#family__name`要素の値（名字）を取得して、変数 `familyName` に格納
    var familyName = $("#family__name").val();
    // `#given__name`要素の値（名前）を取得して、変数 `givenName` に格納
    var givenName = $("#given__name").val();
    // `.year`クラスを持つセレクトボックスの選択された値（年）を取得して、変数 `year` に格納
    var year = $(".year").val();
    // `.month`クラスを持つセレクトボックスの選択された値（月）を取得して、変数 `month` に格納
    var month = $(".month").val();
    // `.day`クラスを持つセレクトボックスの選択された値（日）を取得して、変数 `day` に格納
    var day = $(".day").val();
    // 取得した `year`, `month`, `day` を組み合わせて、生年月日を「年/月/日」形式で `birthday` に格納
    var birthday = year + "年" + month + "月" + day + "日";
    // `name='gender'`のラジオボタンで選択されている値（性別）を取得して、変数 `gender` に格納
    var gender = $("input[name='gender']:checked").val();
    // `.occupation`クラスを持つセレクトボックスの選択された値（職業）を取得して、変数 `occupation` に格納
    var occupation = $(".occupation").val();

    // アカウント情報
    // `#account__name`要素の値（アカウント名）を取得して、変数 `accountName` に格納
    var accountName = $("#account__name").val();
    // `#email`要素の値（メールアドレス）を取得して、変数 `email` に格納
    var email = $("#email").val();
    // `#password`要素の値（パスワード）を取得して、変数 `password` に格納
    var password = $("#password").val();
    // `#duplication__password`要素の値（確認用パスワード）を取得して、変数 `duplicationPassword` に格納
    var duplicationPassword = $("#duplication__password").val();

    // 連絡先
    // `#address`要素の値（住所）を取得して、変数 `address` に格納
    var address = $("#address").val();
    // `#tel`要素の値（電話番号）を取得して、変数 `tel` に格納
    var tel = $("#tel").val();

    // 購読情報
    // `name='subscription'`のチェックボックスで選択されている値（購読情報）を取得して、変数 `subscription` に格納
    var subscription = $("input[name='subscription']:checked").val();

    // コンソールログに出力
    //個人情報
    // 取得した `familyName`（名字）をコンソールに出力
    console.log("名字:", familyName);
    // 取得した `givenName`（名前）をコンソールに出力
    console.log("名前:", givenName);
    // 組み立てた `birthday`（生年月日）をコンソールに出力
    console.log("生年月日:", birthday);
    // 取得した `gender`（性別）をコンソールに出力
    console.log("性別:", gender);
    // 取得した `occupation`（職業）をコンソールに出力
    console.log("職業:", occupation);

    // アカウント情報
    // 取得した `accountName`（アカウント名）をコンソールに出力
    console.log("アカウント名:", accountName);
    // 取得した `email`（メールアドレス）をコンソールに出力
    console.log("メールアドレス:", email);
    // 取得した `password`（パスワード）をコンソールに出力
    console.log("パスワード:", password);
    // 取得した `duplicationPassword`（確認用パスワード）をコンソールに出力
    console.log("確認用パスワード:", duplicationPassword);

    // 連絡先
    // 取得した `address`（住所）をコンソールに出力
    console.log("住所:", address);
    // 取得した `tel`（電話番号）をコンソールに出力
    console.log("電話番号:", tel);

    //購読情報
    // 取得した `subscription`（購読情報）をコンソールに出力
    console.log("購読情報:", subscription);
  });
});