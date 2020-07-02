console.log('hello gb')
var time=Date.now;
chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        console.log('request--' + request.url);
        chrome.cookies.getAll({
            url: request.url
        }, (cks) => {
            let cookie = cks.map((item) => {
                console.log(JSON.stringify(item))
                return item.name + "=" + item.value
            }).join(";") + ";";
            console.log("cookie--"+cookie)
        });
        sendResponse("cookie update are trigger");
    });

function getText(url, sync = true) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            alert(xmlHttp.responseText)
        }
    };
    xmlHttp.open("GET", url,
        sync);
    xmlHttp.setRequestHeader("If-Modified-Since", "0");
    xmlHttp.setRequestHeader("Cache-Control", "no-cache");
    xmlHttp.send();
}

