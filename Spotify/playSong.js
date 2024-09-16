import controlSeekBar from "./controlSeekBar";
import { getDuration, getRunTimeDuration } from "./getDuration"
import { controlVolume } from "./volumeControl";



let audio = new Audio();



export function defaultSong(e, data) {



    if (!audio.src) {
        let randomVal = Math.floor(Math.random() * data.length)
        audio.src = data[randomVal].song
        audio.addEventListener("loadedmetadata", () => {

            getDuration(audio.duration)
            //     // document.querySelector(".play-main--controls .fa-play").setAttribute("class" , "fa-sharp fa-solid fa-pause")


        });
        audio.addEventListener("timeupdate", () => {
            getRunTimeDuration(audio.currentTime, audio.duration)
        })
        document.querySelector(".songTitle").innerHTML = `${data[randomVal].Name} | ${data[randomVal].artist || "Unknown"} `;
        controlSeekBar(audio)
    }
}

export default function playSong(e, id, song, Name, artist ) {
    audio.src = song;


    audio.addEventListener("loadedmetadata", () => {
        audio.play();


        getDuration(audio.duration)
        document.querySelector(".play-main--controls .fa-play").setAttribute("class", "fa-sharp fa-solid fa-pause")

    });
    audio.addEventListener("timeupdate", () => {
        getRunTimeDuration(audio.currentTime, audio.duration)
    })
    document.querySelector(".songTitle").innerHTML = `${Name} | ${artist}`;

    controlSeekBar(audio)

}

document.querySelector(".play-control").addEventListener("click", (e) => {

    if (e.target.classList.contains("fa-pause")) {
        audio.pause()
        e.target.setAttribute("class", "fa-sharp fa-solid fa-play")
    } else if (e.target.classList.contains("fa-play")) {
        audio.play()
        e.target.setAttribute("class", "fa-sharp fa-solid fa-pause")


    }

})
controlVolume(audio)