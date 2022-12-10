document.addEventListener('DOMContentLoaded', function () {
    var downloadBtn = document.getElementById('download-btn');
    downloadBtn.addEventListener('click', function () {
        chrome.runtime.sendMessage({ greeting: "download" }, function (response) {
        });
    }, false);
}, false);