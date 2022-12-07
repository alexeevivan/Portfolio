import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

window.addEventListener("scroll", () => {
	document.body.style.setProperty("--scroll", window.pageYOffset / window.innerHeight);
},
	false
);

// Preloader
$.get("../html/loader.html", function (data) {
	$("#loading").replaceWith(data);
});

$(window).on('load', function () {
	setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
});
function removeLoader() {
	$(".loader-wrapper").fadeOut(1000, function () {
		// fadeOut complete. Remove the loading div
		$(".loader-wrapper").remove(); //makes page more lightweight 
	});
}