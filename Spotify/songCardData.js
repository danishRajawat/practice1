import  playSong, { defaultSong }  from "./playSong";

const heroSection = document.querySelector(".hero-song--selection---area")
const templateCard = document.querySelector(".template")

export function ongCardData(data) {
   if (!data) {
    return false
   }

   document.querySelector(".fa-play").addEventListener("click" , (e) => { defaultSong(e,data) })
   data.forEach(element => {
    const {id , Name , artist, Img , song} = element;
    let newArtist = artist || "Unknown";
    
    const cloneCard = document.importNode(templateCard.content , true)
    cloneCard.querySelector(".card").id = `card${id}`
        cloneCard.querySelector(".card-img").src = Img;
        cloneCard.querySelector(".title-song").innerText = Name;
        cloneCard.querySelector(".artist-details").innerText = newArtist;
  
       cloneCard.querySelector(`#card${id}`).addEventListener("click" , (e)=>{
        playSong(e , id , song , Name , newArtist )
        
       })
        heroSection.append(cloneCard)
   });
}