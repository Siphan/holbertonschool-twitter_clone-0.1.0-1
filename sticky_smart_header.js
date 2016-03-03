function scrolled (e) {
	if (typeof scrolled.x == 'undefined') {
		scrolled.x = window.pageXOffset;
		scrolled.y = window.pageYOffset;
	}
	
	var header = document.getElementById("header");
	
	var diffx = scrolled.x - window.pageXOffset;
	var diffy = scrolled.y - window.pageYOffset;
	
	if (diffy < 0 && header.style.height == '75px') {
		var move = new SmoothMovement(header.clientHeight, 0);
		header.style.overflow = "hidden";
		move.animate(20, 
		function (height){
			header.style.height = height + 'px';	
		},
		function () {
			header.style.display = "none";
		});

	}
	else if (diffy > 0 && header.style.height == '0px') {
		var move = new SmoothMovement(header.clientHeight, 75);
		header.style.overflow = "hidden";
		header.style.display = "flex";
                move.animate(20, 
                function (height){
                        header.style.height = height + 'px';    
                },
                function () {
                });
	}
	scrolled.x = window.pageXOffset;
	scrolled.y = window.pageYOffset;
}

window.onscroll = scrolled;
