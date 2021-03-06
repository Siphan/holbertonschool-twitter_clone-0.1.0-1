HTMLElement.prototype.toggle = function toggle(display_type) {
	if (this.style.display != "none") {
		this.style.display="none"
	}
	 else {
		this.style.display=display_type;
	}
}

var asideInterval = setInterval(function() {
    if (document.readyState === "complete") {
        clearInterval(asideInterval);
				var mq = window.matchMedia( "(min-width: 992px)" );
				if (!mq.matches) {
					document.getElementById("aside-inner").className = "collapse";
				}
    }
}, 10);



// Hide Header on on scroll down
// http://jsfiddle.net/mariusc23/s6mLJ/31/
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

//end http://jsfiddle.net/mariusc23/s6mLJ/31/
