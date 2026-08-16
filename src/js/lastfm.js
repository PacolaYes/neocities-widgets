
async function getLastFMInfo() {
    const info = (await (await fetch("https://lastfm-last-played.biancarosa.com.br/PacolaYes/latest-song")).json())["track"]

    if (!info) { return }

    const wrapper_div = document.getElementById("wrapper-div")
    const album_art = document.getElementById("album-art")
    const track_title = document.getElementById("track-title")
    const album_name = document.getElementById("album-name")
    const artist = document.getElementById("artist")

    album_art.src = info["image"][1]["#text"]
    track_title.innerText = info["name"]
    album_name.innerText = info["album"]["#text"]
    artist.innerText = info["artist"]["#text"]

    if (info["@attr"]) {
	wrapper_div.style.display = null
    } else {
	wrapper_div.style.display = "none"
    }
    console.log(info)
}

document.addEventListener("DOMContentLoaded", () => {
    setInterval(getLastFMInfo, 6e4)

    getLastFMInfo()
}, false)
