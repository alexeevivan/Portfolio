import * as flsFunctions from "./modules/functions.js";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
gsap.registerPlugin(PixiPlugin, MotionPathPlugin);

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

//

const root = document.documentElement;
const changeBtn = document.getElementById('changeBtn');
let mode = false;

let whiteColor = getComputedStyle(root).getPropertyValue("--light");
let blackColor = getComputedStyle(root).getPropertyValue("--dark");

changeBtn.addEventListener('click', (e) => changeColor());

function changeColor() {
	mode = !mode;
	if (mode) {
		root.style.setProperty('--light', blackColor);
		root.style.setProperty('--dark', whiteColor);
	} else {
		root.style.setProperty('--light', whiteColor);
		root.style.setProperty('--dark', blackColor);
	}
}

const slideTL = gsap.timeline();
const maskTL = gsap.timeline();
const mainTL = gsap.timeline({
	repeat: -1,
	onRepeat: () => {
		gsap.set('#texttwo', { opacity: 0 });
		gsap.set('#bar', { scaleY: 0.1 });
		gsap.set('#textone h1', { opacity: 1 });
	}
});

gsap.set('#texttwo', { opacity: 0 });
gsap.set('#bar', { scaleY: 0.1 });

slideTL
	.to('#bar', 1, {
		y: -10,
		scaleY: 1,
		ease: "back.out"
	})
	.to('#slidebar', 1.5, {
		x: 350,
		delay: 0.5,
		ease: "back.inOut(0.8)"
	})
	.to('#slidebar', 1.5, {
		x: 0,
		delay: 0.5,
		ease: "back.inOut(0.8)"
	})
	.to('#slidebar', 1.5, {
		x: 350,
		delay: 0.5,
		ease: "back.inOut(0.8)"
	})
	.to('#bar', 1, {
		y: 500,
		scaleY: 1,
		ease: "back.in"
	});

maskTL
	.to('#textone', 1.5, {
		ease: "back.inOut(0.8)",
		"clip-path": "polygon(0 0, 91% 0, 81% 100%, 0% 100%)",
		onComplete: () => {
			gsap.set('#texttwo', { opacity: 1 });
		}
	})
	.to('#textone', 1.5, {
		delay: 0.5,
		ease: "back.inOut(0.8)",
		"clip-path": "polygon(0 0, 18% 0, 8% 100%, 0% 100%)",
		onComplete: () => {
			gsap.set('#textone h1', { opacity: 0 });
		}
	})
	.to('#textone', 1.5, {
		delay: 0.5,
		ease: "back.inOut(0.8)",
		"clip-path": "polygon(0 0, 91% 0, 81% 100%, 0% 100%)"
	});


mainTL
	.add(slideTL)
	.add(maskTL, 1.5);


(function ($) {
	$(document).ready(function () {
		"use strict";

		//Scroll back to top

		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function () {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});
		jQuery('.progress-wrap').on('click', function (event) {
			event.preventDefault();
			jQuery('html, body').animate({ scrollTop: 0 }, duration);
			return false;
		})


	});

})(jQuery); 