document.getElementById('gm-btn').addEventListener('click', function () {
	const placeholder = this.closest('.googlemaps-placeholder');
	placeholder.outerHTML =
		'<div class="googlemaps-responsive">' +
		'<iframe src="https://www.google.com/maps/embed?..."></iframe>' +
		'</div>';
});
