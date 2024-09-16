export default function controlSeekBar(audio) {
    document.querySelector(".line").addEventListener("click" , (e) => { 
let seekValue = (e.offsetX / e.target.getBoundingClientRect().width) * 100 

document.querySelector(".circle").style.width = seekValue + "%";
audio.currentTime = ((audio.duration) * seekValue) / 100
     })
    
}