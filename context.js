// function accessToRecord(id) {
//     console.log(id)
// }

// console.log(chrome.desktopCapture)

// try {
//     streamId = chrome.desktopCapture.chooseDesktopMedia(["screen", "window"]);
//     console.log(streamId);
// }
// catch(err) { 
//     console.error(err);
// }

// function startStream(stream) {
//     console.log("receiving data from user")
//     var video = document.getElementById('screenMain');
//     video.src = URL.createObjectURL(stream)
// }
  
// function failedStream() {
// console.log("failed")
// }

const rec = new MediaRecorder(mediaStream)
rec.onstop = (e) => {

}

navigator.mediaDevices.getUserMedia({video:{chromeMediaSource:"desktop", }, audio:false})
.then((mediaStream) => {
    console.log('started mediaStream')
    console.log(mediaStream)
    // const video = document.getElementById('screenMain');
    // console.log(video)
    //video.srcObject = mediaStream;

    while(true){
        let chunks = []
        const rec = new MediaRecorder(mediaStream)
        rec.start()
        rec.stop()
    }

    
    console.log('ended')
})
.catch((err) => {
    console.log("Something went wrong: ", err.name, err.message)
})


// function accessToRecord(id){
//     console.log(navigator)
//     // navigator.mediaDevices
// }
// console.log(navigator)
// chrome.storage.local.get("desktopCaptureObj")
// .then((res1) => {
//     console.log(res1)
//     chrome.storage.local.get("tabObj")
//     .then((res2) => {
//         res1.chooseDesktopMedia(["screen", "window"], res2, {}, accessToRecord)
//     });
// });

// chrome.storage.local.get("desktopCaptureObj").chooseDesktopMedia(["screen", "window"], chrome.storage.local.get("tabObj"), {}, accessToRecord);