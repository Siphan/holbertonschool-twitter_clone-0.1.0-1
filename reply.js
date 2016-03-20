function init_replies() {
	var replies = document.getElementsByClassName("reply_button");
	var forms = document.getElementsByClassName("reply_input_area");
	var buttons = document.getElementsByClassName("button");

	var len = replies.length;
	for (var i = 0 ; i < replies.length ; i++) {
		//strip listeners
		replies[i].parentNode.appendChild(replies[i].cloneNode(true));
		replies[i].parentNode.removeChild(replies[i]);
		buttons[i].parentNode.appendChild(buttons[i].cloneNode(true));
		buttons[i].parentNode.removeChild(buttons[i]);

		replies[i].addEventListener("click", get_listener(replies[i], forms[i]), false);
		buttons[i].addEventListener("click", get_listener(replies[i], forms[i]), false);
	}
}

function get_listener(a, b) {
	return function listener () {
		a.toggle("flex");
		b.toggle("flex");
	}
}
