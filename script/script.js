'use strict';

// ページトップリンク

// #go_upをクリックした際の設定
$('#go_up').click(function () {
  $('body,html').animate({
      scrollTop: 0//ページトップまでスクロール
  }, 1500);//ページトップスクロールの速さ※数字が大きいほど遅くなる, easingプラグインでアニメーション速度に変化
  return false;//リンク自体の無効化
});
