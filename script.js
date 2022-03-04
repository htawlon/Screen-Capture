const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//Prompt to select media stream , pass to video element, the play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("Wooh! Error in your code", error);
  }
}

button.addEventListener("click", async () => {
  //Disable Button
  button.disable = true;
  //Start picture in Picture
  await videoElement.requestPictureInPicture();
  //Reset Button
  button.disable=false;
});
//On Load
selectMediaStream();
