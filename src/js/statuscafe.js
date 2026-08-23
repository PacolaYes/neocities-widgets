
var params = new URLSearchParams(window.location.search)
const user = params.get("user")

async function getStatusCafeInfo() {
    const info = (await (await fetch(`https://status.cafe/users/${user}/status.json`)).json())

    window.parent.postMessage(info, "*") // maybe simplify data?
}

document.addEventListener("DOMContentLoaded", () => {
    if (!user) {
	return
    }

    getStatusCafeInfo()
}, false)
