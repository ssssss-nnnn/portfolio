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

$('modal-open')on('click', function(event){
  event.preventDefault();
  const 
}
)

//初回のみモーダルをすぐ出す判定。flagがモーダル表示のstart_open後に代入される
// var access = $.cookie('access')
// if(!access){
//   flag = true;
//   $.cookie('access', false);
// }else{
//   flag = false  
// }

//モーダル表示
$(".modal-open").modaal({
// start_open:flag, // ページロード時に表示するか
overlay_close:true,//モーダル背景クリック時に閉じるか
before_open:function(){// モーダルが開く前に行う動作
  $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
},
after_close:function(){// モーダルが閉じた後に行う動作
  $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
}
});
