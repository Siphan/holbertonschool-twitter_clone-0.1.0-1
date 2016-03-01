function toggle_reply(id) {
	toggle(document.getElementById("reply_button_" + id));
	toggle(document.getElementById("reply_form_" + id));
}

function toggle(obj) {
	if (obj.style.display != "none") {
		obj.style.display="none"
	} else {
		obj.style.display="flex";
	}
}
