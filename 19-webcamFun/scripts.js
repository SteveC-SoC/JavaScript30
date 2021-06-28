const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

//this accesses the camera and displayes it in the video tag
function getVideo() {
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(localMediaStream => {
        // console.log(localMediaStream);
        video.srcObject = localMediaStream;
        video.play();
    })
    .catch(err => {
        console.error(`OH NOO!!!`, err);
    });
}

//this puts a copy of the video from camera to the canvas
function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
// this refreshes the video every 16 miliseconds
    return setInterval(()=> {
        ctx.drawImage(video, 0, 0, width, height);
        //take the pixels out
        let pixels = ctx.getImageData(0, 0, width, height);
        
        //mess with them
        
        //pixels = redEffect(pixels);
        
        // pixels = rgbSplit(pixels);
        //adds a blur/ghost effect
        // ctx.globalAlpha = 0.1;
        
        //remove color pixels if within threshold
        // pixels = greenScreen(pixels);
        
        //put them back
        ctx.putImageData(pixels, 0,0)

    }, 16);
}

//play audio for the photo
function takePhoto() {
    //play sound
    snap.currentTime = 0;
    snap.play();

    //take the data out of the canvas
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'itYou');
    /*this provides a download link
     link.textContent = 'Download Image' */
    //this provides the photo preview, that can then be clicked to download
    link.innerHTML = `<img src="${data}" alt="It you"/>`
    strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4){
        pixels.data[i + 0] = pixels.data[i +0] + 100 //Red
        pixels.data[i + 1] = pixels.data[i +1] - 50 //Green
        pixels.data[i + 2] = pixels.data[i +2] * 0.5 //Blue
    }
    return pixels;
}
function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4){
        pixels.data[i - 250] = pixels.data[i +0] + 100 //Red
        pixels.data[i + 100] = pixels.data[i +1] - 50 //Green
        pixels.data[i + 250] = pixels.data[i +2] * 0.5 //Blue
    }
    return pixels;
}

function greenScreen(pixels){
    //this holds the max and min for each color
    const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  //loop over each value, and if betweent the min and max, set the alpha of that pixel to 0
  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}


getVideo();
//this calls the function
video.addEventListener('canplay', paintToCanvas)