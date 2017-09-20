$(function(){
  var timer,num=0;
  bannerMove();
  function bannerMove(){
  timer=setInterval(function(){
    // clearInterval(timer);
    num++;
    if(num>5){
      num=0;
    }

    $('ol li').eq(num).fadeIn(1000).siblings().fadeOut(1000);
$('.banner_choose li').eq(num).addClass('choose').siblings().removeClass('choose');
  },3000);

  }
  $('.banner').hover(function(){
    clearInterval(timer);
  },function(){
    bannerMove();
  })
  // var Cli=$('.banner_choose ul li');
  // for(var i=0;i<Cli.length;i++){
  //
  //
  //
  // }
$('.banner_choose ul li').click(function(){
num=$(this).index();
  $('ol li').eq(num).fadeIn(1000).siblings().fadeOut(1000);
$(this).addClass('choose').siblings().removeClass('choose');
})

})
