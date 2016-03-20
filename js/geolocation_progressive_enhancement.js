function test_geolocation_support() {
	if (!navigator.geolocation) {
		var boxes = document.getElementsByClassName("geobox");
		while (boxes.length > 0) {
			boxes[0].parentNode.removeChild(boxes[0]);
		}
	}
}
