function setup() {
    noCanvas();
    let userinput = select('#userinput');
    userinput.changed(changeText);

    // let checkAllTabs = select('#all').checked;
    // console.log(checkAllTabs);


    function changeText(){
        let params = {
            active: true,
            currentWindow: true
            // currentWindow: checkAllTabs
        }

        chrome.tabs.query(params, gotTabs);

        function gotTabs(tabs){
            let message = userinput.value();
            chrome.tabs.sendMessage(tabs[0].id, message)
        }
    }
}