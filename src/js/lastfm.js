
async function getLastFMInfo() {
    const info = (await (await fetch("https://lastfm-last-played.biancarosa.com.br/PacolaYes/latest-song")).json())["track"]

    if (!info) { return }

    const album_art = document.getElementById("album-art")
    const track_title = document.getElementById("track-title")
    const album_name = document.getElementById("album-name")
    const artist = document.getElementById("artist")

    album_art.src = info["image"][1]["#text"]
    track_title.innerText = info["name"]
    album_name.innerText = info["album"]["#text"]
    artist.innerText = info["artist"]["#text"]

    console.log("check!")
}

document.addEventListener("DOMContentLoaded", () => {
    setInterval(getLastFMInfo, 6e4)

    getLastFMInfo().then(() => {
	const wrapper_div = document.getElementById("wrapper-div")
	wrapper_div.style.display = null
	console.log("loaded!")
    })
}, false)
