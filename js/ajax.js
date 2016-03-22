function ajaxGet(url, onSuccess) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      onSuccess(xhttp.responseText);
    }
  };
  xhttp.open("GET", url, true);

  document.getElementById("statusbutton").disabled = true;
  document.getElementById("statusbutton").style.color = "grey";
  document.getElementById("statusbutton").style.cursor = "wait";
  setTimeout(function() {
    xhttp.send();
    document.getElementById("statusbutton").disabled = false;
    document.getElementById("statusbutton").style.color = "";
    document.getElementById("statusbutton").style.cursor = "auto";
  }, 2000);
}

function ajaxGetFast(url, onSuccess) {
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
