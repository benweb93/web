var SimpleAudio = {

  init: function(){
                   this.listen();
                   this.loadAudio();

                    i=0;
},
requestAudio : function(prom){
    audio = new Audio(prom) ;
},
loadAudio :function(){
  audio.addEventListener("canplaythrough",function(){
  console.log("song is already");
},false)
},
audioPlay : function(){

  if (i == 0) {
    audio.play();
    document.querySelector("#on").innerHTML = "暂停";
      i = 1;
      $(".songName").html("许绍洋 - 幸福的瞬间");
      SimpleAudio.showTime();
      SimpleAudio.controlCurrent();

  } else {
    audio.pause();

    document.querySelector("#on").innerHTML = "播放";
     i = 0;
  }
},
showTime : function(){
  	audio.addEventListener("timeupdate",SimpleAudio.showTime,true);
    var start = Math.floor(audio.currentTime / 60);
      start = start >= 10 ? start : "0" + start;
    var end = Math.ceil(audio.currentTime % 60);
      end = end >= 10 ? end : "0" + end;
    var start_all = Math.floor(audio.duration / 60);
      start_all = start_all >= 10 ? start_all : "0" + start_all;
    var end_all = Math.ceil(audio.duration % 60);
      end_all = end_all >= 10 ? end_all : "0" + end_all;

    var time_start = start + ":" + end;
    var time_all = start_all + ":" + end_all;
    document.querySelector(".playTime").innerHTML = time_start;
    document.querySelector(".songSumTime").innerHTML = time_all;

    document.querySelector("#range_time").value =  Math.floor(audio.currentTime) / Math.ceil(audio.duration);

},
controlCurrent: function(){

  var line_value = document.querySelector("#range_time");

  audio.currentTime = ((line_value.value) * audio.duration);
  var voice_value = document.querySelector("#voice_line");
  audio.volume = voice_value.value;
},
listen : function(){

  document.getElementById('on').addEventListener('click',SimpleAudio.audioPlay);
  document.getElementById('range_time').addEventListener('change',SimpleAudio.controlCurrent);
  document.getElementById('voice_line').addEventListener('change',SimpleAudio.controlCurrent);

  }


}

SimpleAudio.requestAudio("许绍洋 - 幸福的瞬间.mp3");
SimpleAudio.init();
