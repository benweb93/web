var ahArr = [];
window.onload=function () {
   waterfall("main","box");
   loadPic();
   window.onscroll=loadPic;
}

function loadPic(){

       var numArr=randomNum();
      if(checkScrollSlide()){
         var maindiv = document.getElementById("main");
          for(var i=0;i<numArr.length;i++){
          var box = document.createElement("div");
          box.className="box";
          maindiv.appendChild(box);
          var pic =  document.createElement("div");
          pic.className="pic";
          box.appendChild(pic);
          var img = document.createElement("img");
          img.src="img/"+getNumPic(numArr[i])+".jpg";
          pic.appendChild(img);
       }
       waterfall("main","box");
      }

}


function getNumPic(num){
   return num< 10?"0"+num:num
}

function waterfall(parent,box){
   var oParent = document.getElementById(parent);
   var boxs= document.getElementsByClassName("box");
   var oboxw =boxs[0].offsetWidth;
   var cols =Math.floor(document.documentElement.clientWidth/oboxw);
   oParent.style.cssText="width:"+oboxw*cols+"px;margin:0 auto;";
   var hArr=[];
   for(var i=0;i<boxs.length;i++){
   	if(i<cols){
   		hArr.push(boxs[i].offsetHeight);
   	}else{
   		var minH=Math.min.apply(null,hArr);
   		var index = getMinhIndex(hArr,minH);
   		boxs[i].style.position="absolute";
   		boxs[i].style.top=minH+"px";
   		boxs[i].style.left=boxs[index].offsetLeft+"px";
   		hArr[index]+=boxs[i].offsetHeight;
   	}
   }
   ahArr=hArr;
}



function getMinhIndex(arr,val){
	for(var i in arr){
		if(arr[i]==val)
		{

			return i;
		}
	}
}

  function checkScrollSlide(){
        
         var minH =  Math.min.apply(null,ahArr);
         var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
         var height =document.body.clientHeight || document.documentElement.clientHeight;
         return (minH-200)<(scrollTop+height)?true:false;
  }


function randomNum(){
           var numArr = [];
           var index = 0;
          while(index<6){
          var num=Math.floor(Math.random()*7) ;
          if(num>0&&numArr.indexOf(num)<0)
          {
                     numArr.push(num);
                     index++;
          }
       }
    return numArr;

}