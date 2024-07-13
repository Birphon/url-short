// Function to generate a random short code
function generateShortCode() {
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let result = "";
	for (let i = 0; i < 6; i++) {
		result += characters.charAt(
			Math.floor(Math.random() * characters.length)
		);
	}
	return result;
}

// Function to shorten the URL
function shortenURL() {
	const longURL = document.getElementById("long-url").value;
	if (!longURL) {
		alert("Please enter a URL");
		return;
	}

	const shortCode = generateShortCode();
	const shortURL = `${window.location.origin}/${shortCode}`;

	// Store the mapping in localStorage
	localStorage.setItem(shortCode, longURL);

	// Display the shortened URL
	const shortenedURLDiv = document.getElementById("shortened-url");
	shortenedURLDiv.innerHTML = `Shortened URL: <a href="${shortURL}" target="_blank">${shortURL}</a>`;
}

// Function to redirect if a short code is present in the URL
function redirectIfShortCode() {
	const path = window.location.pathname.slice(1); // Remove leading slash
	if (path.length > 0) {
		const longURL = localStorage.getItem(path);
		if (longURL) {
			window.location.href = longURL;
		}
	}
}

// Call the redirect function when the page loads
window.onload = redirectIfShortCode;
