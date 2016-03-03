function all_images() {
	var images = document.getElementsByTagName("img");
	var body = document.getElementById("body");
	var all_images_data_other = document.createElement("div");
	all_images_data_other.id = "all_images_data_other";
	all_images_data_other.style.display = "none";	
	while (body.childNodes.length > 0) {
		all_images_data_other.appendChild(body.childNodes[0]);
	}
	body.appendChild(all_images_data_other);

	var table = document.createElement("table");
	table.id = "all_images_data";

	body.appendChild(table);
	
	var tr = document.createElement("tr");
	table.appendChild(tr);

	var td = document.createElement("td");
	td.innerHTML="<p>Image</p>";
	table.appendChild(td);
	
	td = document.createElement("td");
	td.innerHTML="<p>Image Path</p>";
	table.appendChild(td);

	td = document.createElement("td");
	td.innerHTML="Alt Text";
	table.appendChild(td);

	var count = images.length
	for (var i = 0; i < count; i++) {
		
		console.log(images.length);
	
		tr = document.createElement("tr");
		table.appendChild(tr);

		td = document.createElement("td");
		var img = document.createElement("img");
		img.src = images[i].src;
		td.appendChild(img);
		tr.appendChild(td);

		td = document.createElement("td");
		var path = document.createElement("p");
		path.innerHTML = images[i].src;
		td.appendChild(path);
		tr.appendChild(td);

		td = document.createElement("td");
		var alt = document.createElement("p");
		alt.innerHTML = images[i].alt;
		td.appendChild(alt);
		tr.appendChild(td);
	}
}
