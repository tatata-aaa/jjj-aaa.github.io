$(function() {

  $(".fo1-1 dd a").hover(function() {

    // カーソルが当たった時の処理
    $(this).css("color","#fff" );

  }, function() {

    // カーソルが離れた時の処理
    $(this).css("color", "#6c3a24");

  });
});


   $(function(){
    $("ul.child1").css("display", "none");
    $('.coki').hover(function(){
        $("ul:not(:animated)", this).slideDown();

    }, function(){
        $("ul.child1",this).slideUp(1000);

    });
});
 $(function(){
    $('.coki').hover(function(){
        $("ul:not(:animated)", this).slideDown();

    }, function(){
        $("ul.child1",this).slideUp(1000);
    });
});