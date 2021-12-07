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
