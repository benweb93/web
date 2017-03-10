$(function(){
  'use strict';
  var sidebar = $('.sidebar'),
      sidebar_trigger = $('.js_sidebar_trigger'),
       mask = $('.mask'),
      back_to_top = $('.back_to_top');
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

console.log('aa');})


})
