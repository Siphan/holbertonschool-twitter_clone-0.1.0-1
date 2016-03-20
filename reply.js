function init_replies() {
	var replies = document.getElementsByClassName("reply_button");
	var buttons = document.getElementsByClassName("button");
	var len = replies.length;
	for (var i = 0 ; i < replies.length ; i++) {
		replies[i].addEventListener("click", get_listener(i), false);
		buttons[i].addEventListener("click", get_listener(i), false);
	}
}

function get_listener(i) {
	return function () {
		document.getElementById("reply_button_" + (i+1)).toggle("flex");
		document.getElementById("reply_form_" + (i+1)).toggle("flex");
	}
}
