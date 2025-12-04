//server.js
document.addEventListener('DOMContentLoaded', () => {
	const searchKey = document.getElementById('search-input');
	const button = document.getElementById('search-button');

	

	// Map keyword lists to target URLs
	const routes = [
		{ keys: ['qr', 'qrcode', 'qrcodegenerator'], url: 'https://qrgenerator.inbondz.com' },
		{ keys: ['tic', 'tac', 'toe', 'tictactoe'], url: 'https://tictactoe.inbondz.com' },
		{ keys: ['thumbnailextractor', 'thumbnail', 'youtubethumbnaildownloader', 'youtubethumbnail', 'thumbnaildownloader', 'ytthumbnaile', 'ytthumbnailedownloader'], url: 'https://ytthumbnailextractor.inbondz.com' },
		{ keys: ['imageenhancer', 'photoenhancer'], url: 'https://imageenhancer.inbondz.com' },
		{ keys: ['fontgenerator', 'textstyler'], url: 'https://fontgenerator.inbondz.com' },
		{ keys: ['jsonformatter', 'json'], url: 'https://jsonformatter.inbondz.com/' },
	];

	function searchNews() {
		const searchText = (searchKey.value || '').trim().toLowerCase();

		if (!searchText) {
			alert('Please enter a search term');
			return;
		}

		for (const route of routes) {
			if (route.keys.includes(searchText)) {
				window.location.href = route.url;
				return;
			}
		}

		alert('❌ Tool is not Exist.');
	}

	button.addEventListener('click', (e) => {
		e.preventDefault();
		searchNews();
	});

	searchKey.addEventListener('keypress', (event) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			searchNews();
		}
	});
});