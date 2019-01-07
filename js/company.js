$('#animation').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('#animation').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   $('#animation').addClass("fadeInDown");

  }
 });
});
$('#animation2').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('#animation2').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   $('#animation2').addClass("fadeInDown");

  }
 });
});

$('#animation3').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('#animation3').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 300){
   $('#animation3').addClass("fadeInDown");

  }
 });
});

$('#animation4').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('#animation4').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 300){
   $('#animation4').addClass("fadeInDown");

  }
 });
});


$( document ).ready(function( $ ) {
  $('#somple').sliderPro({
    width: 600,//横幅
    orientation: 'vertical',//スライドの方向
    arrows: true,//左右の矢印
    buttons: false,//ナビゲーションボタン
    loop: false,//ループ
    thumbnailsPosition: 'right',//サムネイルの位置
    thumbnailPointer: true,//アクティブなサムネイルにマークを付ける
    thumbnailWidth: 200,//サムネイルの横幅
    thumbnailHeight: 80,//サムネイルの縦幅
    breakpoints: {
      600: {//表示方法を変えるサイズ
        thumbnailsPosition: 'bottom',
        thumbnailWidth: 200,
        thumbnailHeight: 80
      },
      480: {//表示方法を変えるサイズ
        thumbnailsPosition: 'bottom',
        thumbnailWidth: 110,
        thumbnailHeight: 60
      }
    }
  });
});
$( document ).ready(function( $ ) {
  $('#thumb-v').sliderPro({
    width: 600,//横幅
    orientation: 'vertical',//スライドの方向
    arrows: true,//左右の矢印
    buttons: false,//ナビゲーションボタン
    loop: false,//ループ
    thumbnailsPosition: 'right',//サムネイルの位置
    thumbnailPointer: true,//アクティブなサムネイルにマークを付ける
    thumbnailWidth: 200,//サムネイルの横幅
    thumbnailHeight: 80,//サムネイルの縦幅
    breakpoints: {
      600: {//表示方法を変えるサイズ
        thumbnailsPosition: 'bottom',
        thumbnailWidth: 200,
        thumbnailHeight: 80
      },
      480: {//表示方法を変えるサイズ
        thumbnailsPosition: 'bottom',
        thumbnailWidth: 110,
        thumbnailHeight: 60
      }
    }
  });
});