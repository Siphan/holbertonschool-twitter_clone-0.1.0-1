var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        init();
    }
}, 10);


function post_status() {
	var geobox = document.getElementById("geobox");
	if (geobox.checked) {
		location_post();
	} else {
		alert("Your status was posted");
		toggle_status_post();
  }
}

function toggle_status_post() {
	document.getElementById('submit_status_form').toggle("flex");
    document.getElementById('post_status').toggle("flex");
	if (document.getElementById('location').style.display != "none") {
    hideLocation();
  }
}

function hideLocation() {
	document.getElementById("location").toggle("flex");
}
