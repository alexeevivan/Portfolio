"use strict";
import * as flsFunctions from "./modules/functions.js";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
gsap.registerPlugin(PixiPlugin, MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);
flsFunctions.isWebp();

// ==========================================================
// Changin overflow values via Burger Toggle
// ==========================================================
const body = document.querySelector("body");
const burgerToggle = document.getElementsByClassName("burger__toggle");

function count() {
	let counter = 0;
	return function () {
		return counter += 1;
	};
};

for (let button of burgerToggle) {
	const counter = count(); // создаем отдельный инстанс функции счетчика для каждой кнопки
	button.addEventListener("click", function () {
		if (counter() % 2 == 0) {
			body.style.overflow = "auto";
		} else {
			body.style.overflow = "hidden";
		};
	});
};

// ==========================================================
// Reveal
// ==========================================================
function reveal() {
	let reveals = document.querySelectorAll(".reveal");

	for (let i = 0; i < reveals.length; i++) {
		let windowHeight = window.innerHeight;
		let elementTop = reveals[i].getBoundingClientRect().top;
		let elementVisible = 10;

		if (elementTop < windowHeight - elementVisible) {
			reveals[i].classList.add("active");
		} else {
			reveals[i].classList.remove("active");
		}
	}
}

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", () => {
	document.body.style.setProperty("--scroll", window.pageYOffset - window.innerHeight);
},
	false
);

// ==========================================================
// Preloader
// ==========================================================
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
// ==========================================================
// Change color
// ==========================================================
const root = document.documentElement;
const changeBtn = document.getElementById('changeBtn');
let mode = false;
let whiteColor = getComputedStyle(root).getPropertyValue("--light");
let blackColor = getComputedStyle(root).getPropertyValue("--dark");
let darkenColor = getComputedStyle(root).getPropertyValue("--darken");
let magentaColor = getComputedStyle(root).getPropertyValue("--magenta");
let darkMagentaColor = getComputedStyle(root).getPropertyValue("--dark-magenta");
let lightMagentaColor = getComputedStyle(root).getPropertyValue("--light-magenta");
let githubLogo = document.getElementsByClassName("github__logo");
let linkedinLogo = document.getElementsByClassName("linkedin__logo");

changeBtn.addEventListener('click', (e) => changeColor());

function changeColor() {
	mode = !mode;
	if (mode) {
		root.style.setProperty('--light-to-switch', blackColor);
		root.style.setProperty('--dark-to-switch', whiteColor);
		root.style.setProperty('--magenta-to-darken-switch', darkenColor);
		root.style.setProperty('--darken-to-magenta-switch', magentaColor);
		root.style.setProperty('--dark-magenta-to-darken-switch', darkenColor);
		root.style.setProperty('--light-magenta-to-darken-switch', darkenColor);
		$(githubLogo).addClass("inverted");
		$(linkedinLogo).addClass("inverted");
	} else {
		root.style.setProperty('--light-to-switch', whiteColor);
		root.style.setProperty('--dark-to-switch', blackColor);
		root.style.setProperty('--magenta-to-darken-switch', magentaColor);
		root.style.setProperty('--darken-to-magenta-switch', darkenColor);
		root.style.setProperty('--dark-magenta-to-darken-switch', darkMagentaColor);
		root.style.setProperty('--light-magenta-to-darken-switch', lightMagentaColor);
		$(githubLogo).removeClass("inverted");
		$(linkedinLogo).removeClass("inverted");
	}
};

// ==========================================================
// Sliding change slogan
// ==========================================================
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

// ==========================================================
// Scroll to top button
// ==========================================================
(function ($) {
	$(document).ready(function () {
		"use strict";
		// ------------------------ Scroll back to top
		let progressPath = document.querySelector('.progress-wrap path');
		let pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
		let updateProgress = function () {
			let scroll = $(window).scrollTop();
			let height = $(document).height() - $(window).height();
			let progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);
		let offset = 50;
		let duration = 150;
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

// ==========================================================
// Apple divice scrolling
// ==========================================================
console.clear();

const canvas = document.getElementById("apple-device");
const context = canvas.getContext("2d");
const frameCount = 147;
canvas.width = 1158;
canvas.height = 770;
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

// ==========================================================
// Swiper Slider
// ==========================================================

const swiper = new Swiper(".projects-slider", {
	modules: [Navigation, Pagination],
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
	},
	simulateTouch: false,
	loop: false,
});

$(".about-link").click(function () {
	$(".projects-link").removeClass("active");
	$(".contact-link").removeClass("active");
	$(".about-link").addClass("active");
});

$(".projects-link").click(function () {
	$(".about-link").removeClass("active");
	$(".contact-link").removeClass("active");
	$(".projects-link").addClass("active");
});

$(".contact-link").click(function () {
	$(".projects-link").removeClass("active");
	$(".about-link").removeClass("active");
	$(".contact-link").addClass("active");
});