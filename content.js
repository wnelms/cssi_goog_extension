console.log("Chrome extension ready to go");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message);
    if (message === "audio here") {
        let vids = document.getElementsByTagName('video');
        for (let vid of vids){
            console.log(`volume: ${vid.volume}`);
        }
    }
}