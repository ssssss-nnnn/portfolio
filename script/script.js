'use strict';

// ページトップリンク

// #go_upをクリックした際の設定
$('#go_up').click(function () {
  $('body,html').animate({
      scrollTop: 0//ページトップまでスクロール
  }, 1500);//ページトップスクロールの速さ※数字が大きいほど遅くなる, easingプラグインでアニメーション速度に変化
  return false;//リンク自体の無効化
});


//ハンバーガーボタン
$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});


// モーダルウィンドウ

//テキストを含む一般的なモーダル
$(".text_box").modaal({
  overlay_close:true,//モーダル背景クリック時に閉じるか
  before_open:function(){// モーダルが開く前に行う動作
    $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
  },
  after_close:function(){// モーダルが閉じた後に行う動作
    $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
  }
});
  
//確認を促すモーダル
$(".confirm").modaal({
  type:'confirm',
  confirm_title: 'ログイン画面',//確認画面タイトル
  confirm_button_text: 'ログイン', //確認画面ボタンのテキスト
  confirm_cancel_button_text: 'キャンセル',//確認画面キャンセルボタンのテキスト
  confirm_content: 'ログインが必要です。<br>この画面はボタンを押さなければ閉じません。',//確認画面の内容
});

//画像のモーダル
// $(".modal-open").modaal({
//   // type: 'image',
//   overlay_close:true,//モーダル背景クリック時に閉じるか
//   before_open:function(){// モーダルが開く前に行う動作
//     $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
//   },
//   after_close:function(){// モーダルが閉じた後に行う動作
//     $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
//   }
// });




