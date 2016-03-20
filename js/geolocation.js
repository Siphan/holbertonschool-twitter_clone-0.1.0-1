function location_post() {
	var geobox = document.getElementById("geobox");
	navigator.geolocation.getCurrentPosition(function (pos) {
		var coords = pos.coords;
		alert("You are posting from " + coords.latitude + " by " + coords.longitude);
		geobox.checked = false;
		toggle_status_post();
	},

	function (err) {
		alert("Your status was posted");
		geobox.checked = false;
		toggle_status_post();
	});
}
