console.log('background runnin');

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    console.log(tab.audible);
    if (tab.audible === true) {
        let msg = "audio here";
        chrome.tabs.sendMessage(tab.id, msg);
        console.log(msg);
    }
    else{
        let msg = "no audio";
        chrome.tabs.sendMessage(tab.id, msg);
    }

}