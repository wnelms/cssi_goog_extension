console.log("Chrome extension ready to go");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message);
    let vids = document.getElementsByTagName('video');
    for (let vid of vids){
        console.log(`past volume: ${vid.volume}`);
        vid.volume = message/100;
        console.log(`curr volume: ${vid.volume}`);
    }
}