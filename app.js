const videoElement= document.getElementById("video");

const button =  document.getElementById("button");



async function selectMedia() {

try{
     const stream = await navigator.mediaDevices.getDisplayMedia()
     videoElement.srcObject = stream;
     videoElement.onloadedmetadata = () =>{
          videoElement.play();
     }

     
}

catch(err){
console.error(err)
}}

button.addEventListener("click", async function(){
     // disalbed button 
     button.disabled = true;
     // start picture in pictureElement 
     await videoElement.requestPictureInPicture();
     
     
          });
          stream()