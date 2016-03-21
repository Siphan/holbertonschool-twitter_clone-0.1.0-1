var counter = 0;

function moreStatuses() {
  /*var httpRequest = new XMLHttpRequest()
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
      document.getElementById("statuses").innerHTML = document.getElementById("statuses").innerHTML + httpRequest.responseText;
      init_replies();
      hideLocation();
    } else if (httpRequest.readyState == 4 && httpRequest.status == 404) {
      no_more_statuses();
    }
  }
  httpRequest.open('GET', "statuses-" + counter + ".html");*/

  ajaxGet("statuses-" + counter + ".html", function(resp) {
    document.getElementById("statuses").innerHTML = document.getElementById("statuses").innerHTML + resp;
    init_replies();
    hideLocation();
  });

  counter++;
}

function no_more_statuses() {
  console.log("404");
  //remove load more button
  //add some sort of message
}

//TODO
function init_more_statuses_button() {
  var statusbutton = document.getElementById("statusbutton");
  statusbutton.addEventListener("click", moreStatuses, false);
}
