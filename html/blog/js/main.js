$(function(){
  'use strict';
  var sidebar = $('.sidebar'),
      sidebar_trigger = $('.js_sidebar_trigger'),
       mask = $('.mask');
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
})
