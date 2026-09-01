
async function getWikipediaInfo(params) {
    const urlParams = new URLSearchParams(params)
    try {
	const response = await fetch(`https://en.wikipedia.org/w/api.php?format=json&${urlParams}`);
	if (!response.ok) {
	    throw new Error(`Response status: ${response.status}`);
	}

	const info = await response.json();
	window.parent.postMessage({
	    message_type: "wikipedia-response",
	    message_source: "wikipedia",
	    ...info
	}, "*");
    } catch (error) {
	console.error(error.message);
    }
}

window.addEventListener("message", (event) => {
    getWikipediaInfo(event.data);
})

document.addEventListener("DOMContentLoaded", () => {
    window.parent.postMessage({
	message_type: "iframe-loaded",
	message_source: "wikipedia"
    }, "*")
})
