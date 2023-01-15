chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
      text: "OFF",
    });
  });


function startStream(stream) {
  console.log("receiving data from user")
  var video = document.getElementById('screenMain');
  video.src = URL.createObjectURL(stream)
}

function failedStream() {
  console.log("failed")
}



chrome.action.onClicked.addListener(async (tab) => {
  async function accessToRecord(id){
    await chrome.scripting.executeScript({
    target: {
      tabId: tab.id,
      allFrames: true,
    },
    files: ["context.js"],
  });
  // console.log(navigator)
  // navigator.mediaDevices.getUserMedia({video:true}, startStream, failedStream)
  // console.log(id)
}


    // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    // Next state will always be the opposite
    const nextState = prevState === 'ON' ? 'OFF' : 'ON'
    // Set the action badge to the next state
    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });
    
    console.log(chrome.desktopCapture)
    chrome.desktopCapture.chooseDesktopMedia(["screen", "window"], tab, {}, accessToRecord)
    // await chrome.scripting.executeScript({
    //   target: {
    //     tabId: tab.id,
    //     allFrames: true,
    //   },
    //   func: chrome.desktopCapture.chooseDesktopMedia,
    //   args: [["screen", "window"], tab, {}, accessToRecord]
    // })

    // await chrome.scripting.executeScript({
    //   target: {
    //     tabId: tab.id,
    //     allFrames: true,
    //   },
    //   files: ["context.js"],
    // });




    // if (nextState === "ON") {  
    //   let stream = null;
    //   stream = await navigator.mediaDevices.getDisplayMedia()//{video:true}
    //   video.play();
    // } else if (nextState === "OFF") {
    //   // Remove the CSS file when the user turns the extension off 
    //   await chrome.scripting.removeCSS({
    //     files: ["focus-mode.css"],
    //     target: { tabId: tab.id },
    //   });
    // }
});

//Extensions can use the Storage API and IndexedDB to store the application state.