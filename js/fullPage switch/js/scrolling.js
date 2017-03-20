var container = $('.container'),
    InnerHeight = window.innerHeight,
    content  = $('.content'),
    d_content = $('.d_content'),
    startTime = 0,
    endTime = 0,
    now = 0,
    current_page = 1;
    d_content.height(InnerHeight);
    content.height(InnerHeight);
    container.on('mousewheel',function(){

      startTime = new Date().getTime();
      var delta = event.detail||(event.wheelDelta);
      if(endTime-startTime<-1000){

        if(delta<0&&current_page<d_content.length){

          current_page++;
          now += InnerHeight;
        content.animate({top:(-now+'px')},1000);
        }
    }
    if(delta>0&&current_page>1){
   now -= InnerHeight;
    current_page--;
      content.animate({
        top:(-now+'px')
      },1000);
    }
//}
    //}
})
