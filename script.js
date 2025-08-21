document.getElementById('gm-btn').addEventListener('click', function () {
	const placeholder = this.closest('.googlemaps-placeholder');
	placeholder.outerHTML =
		'<div class="googlemaps-responsive">' +
		'<iframe src="https://www.google.com/maps/embed?..." width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'' +
		'</div>';
});
