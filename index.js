var counter = 0;

var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        init_index();
    }
}, 10);

function init_index() {
	init_more_statuses_button();
	moreStatuses();
}

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

function post_status() {
	var geobox = document.getElementById("geobox");
	if (geobox.checked) {
		location_post();
	} else {
		alert("Your status was posted");
		toggle_status_post();
  }
}

function moreStatuses() {
  ajaxGet("getstatuses.php?start=" + (counter*10), function(resp) {
    document.getElementById("statuses").innerHTML = document.getElementById("statuses").innerHTML + resp;
    init_replies();
    //hideLocation();
  });

  counter++;
}

function no_more_statuses() {
  console.log("404");
  //remove load more button
  //add some sort of message
}

function init_more_statuses_button() {
  var statusbutton = document.getElementById("statusbutton");
  statusbutton.addEventListener("click", moreStatuses, false);
}

function ajaxGet(url, onSuccess) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("statusbutton").disabled = false;
      document.getElementById("statusbutton").style.color = "";
      document.getElementById("statusbutton").style.cursor = "auto";
      onSuccess(xhttp.responseText);
    }
  };
  xhttp.open("GET", url, true);

  document.getElementById("statusbutton").disabled = true;
  document.getElementById("statusbutton").style.color = "grey";
  document.getElementById("statusbutton").style.cursor = "wait";
  xhttp.send();
}
