import * as flsFunctions from "./modules/functions.js";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
gsap.registerPlugin(PixiPlugin, MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

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
let darkenColor = getComputedStyle(root).getPropertyValue("--darken");
let magentaColor = getComputedStyle(root).getPropertyValue("--magenta");

changeBtn.addEventListener('click', (e) => changeColor());

function changeColor() {
	mode = !mode;
	if (mode) {
		root.style.setProperty('--light-to-switch', blackColor);
		root.style.setProperty('--dark-to-switch', whiteColor);
		root.style.setProperty('--magenta-to-darken-switch', darkenColor);
		root.style.setProperty('--darken-to-magenta-switch', magentaColor);
	} else {
		root.style.setProperty('--light-to-switch', whiteColor);
		root.style.setProperty('--dark-to-switch', blackColor);
		root.style.setProperty('--magenta-to-darken-switch', magentaColor);
		root.style.setProperty('--darken-to-magenta-switch', darkenColor);
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
		// ------------------------ Scroll back to top
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

// ------------------------ Apple divice scrolling
console.clear();

const canvas = document.getElementById("apple-device");
const context = canvas.getContext("2d");

canvas.width = 1158;
canvas.height = 770;

const frameCount = 147;
const currentFrame = index => (
	`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(index + 1).toString().padStart(4, '0')}.jpg`
);

const images = []
const airpods = {
	frame: 0
};

for (let i = 0; i < frameCount; i++) {
	const img = new Image();
	img.src = currentFrame(i);
	images.push(img);
}

gsap.to(airpods, {
	frame: frameCount - 1,
	snap: "frame",
	scrollTrigger: {
		scroller: ".browser__main",
		trigger: ".hero-lightpass",
		scrub: true
	},
	onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
});

images[0].onload = render;

function render() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.drawImage(images[airpods.frame], 0, 0);
}



// ------------------------ Reveal

function reveal() {
	var reveals = document.querySelectorAll(".reveal");

	for (var i = 0; i < reveals.length; i++) {
		var windowHeight = window.innerHeight;
		var elementTop = reveals[i].getBoundingClientRect().top;
		var elementVisible = 150;

		if (elementTop < windowHeight - elementVisible) {
			reveals[i].classList.add("active");
		} else {
			reveals[i].classList.remove("active");
		}
	}
}

window.addEventListener("scroll", reveal);