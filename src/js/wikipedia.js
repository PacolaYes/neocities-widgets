
async function getWikipediaInfo(params) {
    console.log(params);

    const urlParams = new URLSearchParams(params)
    try {
	const response = await fetch(`https://en.wikipedia.org/w/api.php?format=json&${params}`);
	if (!response.ok) {
	    throw new Error(`Response status: ${response.status}`);
	}

	const info = await response.json();
	window.parent.postMessage(info, "*");
    } catch (error) {
	console.error(error.message);
    }
}

document.addEventListener("message", (event) => {
    getWikipediaInfo(event.data);
})
