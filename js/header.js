  /*
$(function(){
    $('h2.header5').hover(function(){
        $("ul#menu li").slideDown(1000);
        $('.header5 i').addClass('like');
    }, function(){
    $('ul#menu li','ul.child li').click(function(){
        $("ul#menu li").slideUp(1000);
        $('.header5 i').removeClass('like');
        $('.header5 i').css('transform',' rotate(-180deg)');
    });
  });
});

 */
 /*

$(function(){
    $('#menu li').hover(function(){
        $('.header5 i').addClass('like');
        $("ul:not(:animated)",this).slideDown(1000)

    }, function(){

        $("ul.child",this).slideUp(1000);
        $('.header5 i').removeClass('like');
        $('.header5 i').css('transform',' rotate(-180deg)');
    });
});

*/
    $(function(){
    $('#menu li').hover(function(){
        $("ul:not(:animated)", this).slideDown();
        
    }, function(){
        $("ul.child",this).slideUp(1000);
       
    });
});
 $(function(){
    $('.large li').hover(function(){
        $("ul:not(:animated)", this).slideDown();

    }, function(){
        $("ul.child",this).slideUp(1000);
    });
});



$(function() {
 
  //画像にマウスを乗せたら発動
  $('.ao4 .dl1').hover(function() {
 
    //画像のsrc属性が別画像のパスに切り替わる
    $('.ao4 .dl1 dt img').attr('src', 'img/ao4-2.png');
 
  //ここにはマウスを離したときの動作を記述
  }, function() {
 
    //画像のsrc属性を元の画像のパスに戻す
    $('.ao4 .dl1 dt img').attr('src', 'img/ao4-1.png');
 
  });
});
$(function() {
 
  //画像にマウスを乗せたら発動
  $('.ao4 .dl2').hover(function() {
 
    //画像のsrc属性が別画像のパスに切り替わる
    $('.ao4 .dl2 dt img').attr('src', 'img/ao4-2.png');
 
  //ここにはマウスを離したときの動作を記述
  }, function() {
 
    //画像のsrc属性を元の画像のパスに戻す
    $('.ao4 .dl2 dt img').attr('src', 'img/ao4-1.png');
 
  });
});

$(function() {
 
  //画像にマウスを乗せたら発動
  $('.ao4 .dl3').hover(function() {
 
    //画像のsrc属性が別画像のパスに切り替わる
    $('.ao4 .dl3 dt img').attr('src', 'img/ao4-2.png');
 
  //ここにはマウスを離したときの動作を記述
  }, function() {
 
    //画像のsrc属性を元の画像のパスに戻す
    $('.ao4 .dl3 dt img').attr('src', 'img/ao4-1.png');
 
  });
});
$(function() {
 
  //画像にマウスを乗せたら発動
  $('.ao4 .dl4').hover(function() {
 
    //画像のsrc属性が別画像のパスに切り替わる
    $('.ao4 .dl4 dt img').attr('src', 'img/ao4-2.png');
 
  //ここにはマウスを離したときの動作を記述
  }, function() {
 
    //画像のsrc属性を元の画像のパスに戻す
    $('.ao4 .dl4 dt img').attr('src', 'img/ao4-1.png');
 
  });
});

$(function() {
 
  //画像にマウスを乗せたら発動
  $('.ao3 .dl3').hover(function() {
 
    //画像のsrc属性が別画像のパスに切り替わる
    $('.ao3 .dl3 span').css('background', '#6c3a24');
 
  //ここにはマウスを離したときの動作を記述
  }, function() {
 
    //画像のsrc属性を元の画像のパスに戻す
    $('.ao3 .dl3 span').css('background', '#eb8400');
 
  });
});
$(function() {
 
  //画像にマウスを乗せたら発動
  $('.ao3 .dl2').hover(function() {
 
    //画像のsrc属性が別画像のパスに切り替わる
    $('.ao3 .dl2 span').css('background', '#6c3a24');
 
  //ここにはマウスを離したときの動作を記述
  }, function() {
 
    //画像のsrc属性を元の画像のパスに戻す
    $('.ao3 .dl2 span').css('background', '#eb8400');
 
  });
});
$(function() {
 
  //画像にマウスを乗せたら発動
  $('.ao3 .dl1').hover(function() {
 
    //画像のsrc属性が別画像のパスに切り替わる
    $('.ao3 .dl1 span').css('background', '#6c3a24');
 
  //ここにはマウスを離したときの動作を記述
  }, function() {
 
    //画像のsrc属性を元の画像のパスに戻す
    $('.ao3 .dl1 span').css('background', '#eb8400');
 
  });
});
$(function() {
 
  //画像にマウスを乗せたら発動
  $('.ao3 .dl4').hover(function() {
 
    //画像のsrc属性が別画像のパスに切り替わる
    $('.ao3 .dl4 span').css('background', '#6c3a24');
 
  //ここにはマウスを離したときの動作を記述
  }, function() {
 
    //画像のsrc属性を元の画像のパスに戻す
    $('.ao3 .dl4 span').css('background', '#eb8400');
 
  });
});