
export function controlVolume(audio) {
    

    document.querySelector("#range").addEventListener("change" , (e) => { 
let volume = ``
if (e.target.value === "100") {
    volume = "1"
}else{
    volume = `0.${e.target.value}`
}
audio.volume = volume
        document.querySelector(".valLabel").innerText = e.target.value
    if(e.target.value < "1"){
document.querySelector(".fa-volume-high").setAttribute("class" ,"fa-solid fa-volume-xmark" )
    }else if(e.target.value > "1" ){
        document.querySelector(".fa-volume-xmark").setAttribute("class" ,"fa-solid fa-volume-high" )
    }
     })
        


}

    


