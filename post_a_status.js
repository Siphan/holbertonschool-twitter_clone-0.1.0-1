var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        init();
    }
}, 10);

function init() {
	hideDisgusting();
}

function toggle_status_post() {
	document.getElementById('submit_status_form').toggle("flex");
        document.getElementById('post_status').toggle("flex");
	if (document.getElementById('disgusting').style.display != "none") {
                hideDisgusting();
        }
}

function hideDisgusting()
{
	document.getElementById("disgusting").toggle("flex");

	var selects = document.getElementsByClassName("disgusting");
	for(var i =0, il = selects.length;i<il;i++){
		selects[i].toggle("display");
	}

}
