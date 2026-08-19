
var params = new URLSearchParams(window.location.search)
const user = params.get("user")

async function getLastFMInfo() {
    const info = (await (await fetch(`https://lastfm-last-played.biancarosa.com.br/${user}/latest-song`)).json())["track"]

    if (!info) { return }

    window.postMessage(info, "*") // maybe simplify data?
    console.log(info)
}

document.addEventListener("DOMContentLoaded", () => {
    if (!user) {
	return
    }

    setInterval(getLastFMInfo, 6e4)

    getLastFMInfo()
}, false)
