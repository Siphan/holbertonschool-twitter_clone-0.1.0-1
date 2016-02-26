function plus_clicked() {
	document.getElementById('submit_status_form').style.display = "flex";
	document.getElementById('post_status').style.display = "none";
	if (document.getElementById('disgusting').style.display != "none") {
		hideDisgusting();
	}
}

function arrow_clicked() {
        document.getElementById('submit_status_form').style.display = "none";
        document.getElementById('post_status').style.display = "";
}

function toggle(obj) {
	if (obj.style.display != "none") {
		obj.style.display="none"
	} else {
		obj.style.display="";
	}
}

function hideDisgusting()
{
	toggle(document.getElementById("disgusting"));
}
