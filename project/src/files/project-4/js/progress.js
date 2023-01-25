let i = 0;
function checkHtml() {
	if (i == 0) {
		i = 1;
		let elem = document.getElementById("html");
		let width = 0;
		let id = setInterval(frame, 10);
		function frame() {
			if (width >= 90) {
				clearInterval(id);
				i = 0;
			} else {
				width++;
				elem.style.width = width + "%";
				elem.innerHTML = width + "%";
			}
		}
	}
}

function checkCss() {
	if (i == 0) {
		i = 1;
		let elem = document.getElementById("css");
		let width = 0;
		let id = setInterval(frame, 10);
		function frame() {
			if (width >= 70) {
				clearInterval(id);
				i = 0;
			} else {
				width++;
				elem.style.width = width + "%";
				elem.innerHTML = width + "%";
			}
		}
	}
}

function checkSass() {
	if (i == 0) {
		i = 1;
		let elem = document.getElementById("sass");
		let width = 0;
		let id = setInterval(frame, 10);
		function frame() {
			if (width >= 70) {
				clearInterval(id);
				i = 0;
			} else {
				width++;
				elem.style.width = width + "%";
				elem.innerHTML = width + "%";
			}
		}
	}
}

function checkJs() {
	if (i == 0) {
		i = 1;
		let elem = document.getElementById("js");
		let width = 0;
		let id = setInterval(frame, 10);
		function frame() {
			if (width >= 20) {
				clearInterval(id);
				i = 0;
			} else {
				width++;
				elem.style.width = width + "%";
				elem.innerHTML = width + "%";
			}
		}
	}
}