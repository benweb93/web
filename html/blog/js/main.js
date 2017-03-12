$(function(){
  'use strict';
  var sidebar = $('.sidebar'),
      sidebar_trigger = $('.js_sidebar_trigger'),
       logo=$('.logo'),
       mask = $('.mask'),
       banner=$('.banner'),
      back_to_top = $('.back_to_top'),
      content=$('.content'),
      pmsm=$('.personMessage');
sidebar_trigger.on('click',function(){
    mask.fadeIn();
   sidebar.animate({
       'right' : 0
                  });
       });
       mask.on('click',function(){
if(event.clientX<(window.innerWidth-400)){
         mask.fadeOut();
         sidebar.animate({
             'right' : -400
                        })
                      }
else {
  mask.fadeIn();
}
       });
$(window).on('scroll',function(){
if($(window).scrollTop()>$(window).height()){
back_to_top.fadeIn();
}
else{
  back_to_top.fadeOut();
}
  });
back_to_top.on('click',function(){


  $('body').animate({
  'scrollTop' : 0
},800);

})

pmsm.on('click',function(){
  if(banner.fadeOut()){
     banner.fadeOut();
    content.fadeIn();
  }
});

logo.on('click',function(){
  banner.fadeIn();
  content.fadeOut();
})

})
