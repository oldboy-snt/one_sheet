chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.greeting == "download") {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                // since only one tab should be active and in the current window at once
                // the return variable should only have one entry
                var activeTab = tabs[0];
                var url = activeTab.url; 
                chrome.tabs.create({ url: url.replace("/edit#gid=", "/export?format=xlsx&gid=") });
             });
        }
    }
);