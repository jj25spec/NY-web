const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

if(localStorage.music==="on"){
  music.play();
  btn.innerHTML="🔊";
}

btn.onclick=()=>{
 if(music.paused){
  music.play(); localStorage.music="on"; btn.innerHTML="🔊";
 }else{
  music.pause(); localStorage.music="off"; btn.innerHTML="🔇";
 }
};
