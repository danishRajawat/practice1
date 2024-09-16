export  function getDuration(duration) {
   let minutes =  Math.floor(duration / 60);
   let second  = Math.floor(duration % 60)

   let optiSeconds = second < 10 ? `0${second}` : second;
   let optiminute = minutes < 10 ? `0${minutes}` : minutes;

document.querySelector(".end-time").innerHTML = `${optiminute}:${optiSeconds}`



}
export  function getRunTimeDuration(runTime , duration) {
    let minutes =  Math.floor(runTime / 60);
    let second  = Math.floor(runTime % 60)
 console.log(duration);
 
    let optiSeconds = second < 10 ? `0${second}` : second;
    let optiminute = minutes < 10 ? `0${minutes}` : minutes;
 
 document.querySelector(".running-time").innerHTML = `${optiminute}:${optiSeconds}`

 document.querySelector(".circle").style.width = (runTime / duration) * 100 + "%"

}