HTMLElement.prototype.toggle = function toggle(display_type) {
	if (this.style.display != "none") {
		this.style.display="none"
	}
	 else {
		this.style.display=display_type;
	}
}
