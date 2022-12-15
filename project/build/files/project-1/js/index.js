// ================================================================================================
// Clear Button
// ================================================================================================
$(".btn-clear__item-1").click(function () {
	$(".aside-right__submit-1").addClass("hidden-text");
});

$(".btn-clear__item-2").click(function () {
	$(".aside-right__submit-2").addClass("hidden-text");
});

$(".aside-right__submit").click(function () {
	$(".aside-right__submit-1").addClass("hidden-text");
	$(".aside-right__submit-2").addClass("hidden-text");
});

// Color-picker
$(".color__block-1").click(function () {
	$(".active__block-1").removeClass("hide");
	$(".active__block-1").addClass("active");
	$(".color__block-1").addClass("hide");
});

$(".color__block-2").click(function () {
	$(".active__block-2").removeClass("hide");
	$(".active__block-2").addClass("active");
	$(".color__block-2").addClass("hide");
});

$(".color__block-3").click(function () {
	$(".active__block-3").removeClass("hide");
	$(".active__block-3").addClass("active");
	$(".color__block-3").addClass("hide");
});

$(".active__block-1, .active").click(function () {
	$(".active__block-1").removeClass("active");
	$(".active__block-1").addClass("hide");
	$(".color__block-1").removeClass("hide");
});

$(".active__block-2, .active").click(function () {
	$(".active__block-2").removeClass("active");
	$(".active__block-2").addClass("hide");
	$(".color__block-2").removeClass("hide");
});

$(".active__block-3, .active").click(function () {
	$(".active__block-3").removeClass("active");
	$(".active__block-3").addClass("hide");
	$(".color__block-3").removeClass("hide");
});

// ================================================================================================
// Clear block button ('cart.html')
// ================================================================================================
$(".cart__remove-btn.block-1").click(function () {
	$(".cart-block.block-1").addClass("hidden");
});

$(".cart__remove-btn.block-2").click(function () {
	$(".cart-block.block-2").addClass("hidden");
});

// ----------------
// Items Counter ('about.html') & ('cart.html')
// ----------------
$(document).ready(function () {

	$('.about-header__btn').on('click', function (e) {
		e.preventDefault();

		var button = $(this);
		var oldValue = $('#quantity').val();

		if (button.attr('data-type') == "increase") {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}

		$('#quantity').val(newVal);
	});

});

$(document).ready(function () {

	$('.cart__btn.block-1').on('click', function (e) {
		e.preventDefault();

		var button = $(this);
		var oldValue = $('#quantity-1').val();

		if (button.attr('data-type') == "increase") {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}

		$('#quantity-1').val(newVal);
	});

});

$(document).ready(function () {

	$('.cart__btn.block-2').on('click', function (e) {
		e.preventDefault();

		var button = $(this);
		var oldValue = $('#quantity-2').val();

		if (button.attr('data-type') == "increase") {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}

		$('#quantity-2').val(newVal);
	});

});

// ================================================================================================
// Grid-List View
// ================================================================================================
$(".grid-view").click(function () {
	$(".grid-view").addClass("active");
	$(".list-view").removeClass("active");
	$(".swiper-container.grided").removeClass("hidden");
	$(".swiper-container.listed").addClass("hidden");
});


$(".list-view").click(function () {
	$(".list-view").addClass("active");
	$(".grid-view").removeClass("active");
	$(".swiper-container.listed").removeClass("hidden");
	$(".swiper-container.grided").addClass("hidden");
});

// ================================================================================================
// Modal windows
// ================================================================================================
$(".open-menu").click(function () {
	$(".modal-menu").addClass("visible-menu");
});

$(".open-cart").click(function () {
	$(".modal-cart").addClass("visible-cart");
});

$(".user-profile").click(function () {
	$(".modal-account").addClass("visible-account");
});

$(document).click(function (event) {
	//if you click on anything except the modal itself or the "open modal" link, close the modal
	if (!$(event.target).closest(".modal-menu,.open-menu").length) {
		$("body").find(".modal-menu").removeClass("visible-menu");
	}
});

$(document).click(function (event) {
	//if you click on anything except the modal itself or the "open modal" link, close the modal
	if (!$(event.target).closest(".modal-cart,.open-cart").length) {
		$("body").find(".modal-cart").removeClass("visible-cart");
	}
});

$(document).click(function (event) {
	//if you click on anything except the modal itself or the "open modal" link, close the modal
	if (!$(event.target).closest(".modal-account,.user-profile").length) {
		$("body").find(".modal-account").removeClass("visible-account");
	}
});

// ================================================================================================
// Pagination
// ================================================================================================
var swiper = new Swiper('.swiper-container', {
	pagination: {
		el: '.aside-right__pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
	},
});

// ================================================================================================
// Read More button (catalog.html)
// ================================================================================================

$(document).ready(function () {
	$("#slide-read-more-button").click(function () {
		var elem = $("#slide-read-more-button").text();
		if (elem == "More") {
			//Stuff to do when btn is in the read more state
			$("#slide-read-more-button").text("Less");
			$("#text").slideDown();
			$('.info__container').addClass('no-before');
		} else {
			//Stuff to do when btn is in the read less state
			$("#slide-read-more-button").text("More");
			$("#text").slideUp();
			$('.info__container').removeClass('no-before');
		}
	});
});

// ================================================================================================
// Feedback Swiper (index.html)
// ================================================================================================
new Swiper('.swiper-slider', {
	navigation: {
		nextEl: '.swiper-slider-button-next',
		prevEl: '.swiper-slider-button-prev'
	},
	pagination: {
		el: '.swiper-slider-pagination',
		clickable: true,
	},
	simulateTouch: false,
	loop: true,
});

// ================================================================================================
// Ad Swiper (about.html)
// ================================================================================================
new Swiper('.about-ad-slider', {
	navigation: {
		nextEl: '.about-ad-slider-button-next',
		prevEl: '.about-ad-slider-button-prev'
	},
	pagination: {
		el: '.about-ad-slider-pagination',
		clickable: true,
	},
	simulateTouch: false,
	loop: true,
});

// ================================================================================================
// Ad Slider ('index.html')
// ================================================================================================
$('.slider').each(function () {
	var $this = $(this);
	var $group = $this.find('.slide__group');
	var $slides = $this.find('.slide');
	var bulletArray = [];
	var currentIndex = 0;
	var timeout;

	function move(newIndex) {
		var animateLeft, slideLeft;

		advance();

		if ($group.is(':animated') || currentIndex === newIndex) {
			return;
		}

		bulletArray[currentIndex].removeClass('active');
		bulletArray[newIndex].addClass('active');

		if (newIndex > currentIndex) {
			slideLeft = '100%';
			animateLeft = '-100%';
		} else {
			slideLeft = '-100%';
			animateLeft = '100%';
		}

		$slides.eq(newIndex).css({
			display: 'block',
			left: slideLeft
		});
		$group.animate({
			left: animateLeft
		}, function () {
			$slides.eq(currentIndex).css({
				display: 'none'
			});
			$slides.eq(newIndex).css({
				left: 0
			});
			$group.css({
				left: 0
			});
			currentIndex = newIndex;
		});
	}

	function advance() {
		clearTimeout(timeout);
	}

	$('.next__btn').on('click', function () {
		if (currentIndex < ($slides.length - 1)) {
			move(currentIndex + 1);
		} else {
			move(0);
		}
	});

	$('.previous__btn').on('click', function () {
		if (currentIndex !== 0) {
			move(currentIndex - 1);
		} else {
			move(3);
		}
	});

	$.each($slides, function (index) {
		var $button = $('<a class="slide__btn">&bull;</a>');

		if (index === currentIndex) {
			$button.addClass('active');
		}
		$button.on('click', function () {
			move(index);
		}).appendTo('.slide__buttons');
		bulletArray.push($button);
	});

	advance();
});

// ================================================================================================
// About page active links
// ================================================================================================
$(".link-1").click(function () {
	$(".link-1").addClass("active");
	$(".link-2").removeClass("active");
	$(".link-3").removeClass("active");
	$(".about-product__info").removeClass("hide");
	$(".about-product__detail").addClass("hide");
	$(".about-product__specs").addClass("hide");
});

$(".link-2").click(function () {
	$(".link-2").addClass("active");
	$(".link-1").removeClass("active");
	$(".link-3").removeClass("active");
	$(".about-product__detail").removeClass("hide");
	$(".about-product__info").addClass("hide");
	$(".about-product__specs").addClass("hide");
});

$(".link-3").click(function () {
	$(".link-3").addClass("active");
	$(".link-1").removeClass("active");
	$(".link-2").removeClass("active");
	$(".about-product__specs").removeClass("hide");
	$(".about-product__detail").addClass("hide");
	$(".about-product__info").addClass("hide");
});

$(".active__block-1, .active").click(function () {
	$(".active__block-1").removeClass("active");
	$(".active__block-1").addClass("hide");
	$(".color__block-1").removeClass("hide");
});

// ================================================================================================
// Cart Form open/close
// ================================================================================================
$(".open-form-delivery").click(function () {
	$(".fill-form-discount").addClass("hidden");
	$(".open-form-discount").removeClass("active");
	$(".fill-form-delivery").removeClass("hidden");
	$(".open-form-delivery").addClass("active");
});

$(".open-form-discount").click(function () {
	$(".fill-form-delivery").addClass("hidden");
	$(".open-form-delivery").removeClass("active");
	$(".open-form-discount").addClass("active");
	$(".fill-form-discount").removeClass("hidden");
});

// ================================================================================================
// Cart Order Info open/close (checkout.html)
// ================================================================================================
$(".container__arrow-bottom").click(function () {
	$(".container__arrow-bottom").removeClass("active");
	$(".container__arrow-top").addClass("active");
	$(".container__item._item-1").addClass("hidden");
	$(".container__item._item-2").addClass("hidden");
});

$(".container__arrow-top").click(function () {
	$(".container__arrow-top").removeClass("active");
	$(".container__arrow-bottom").addClass("active");
	$(".container__item._item-1").removeClass("hidden");
	$(".container__item._item-2").removeClass("hidden");
});

// ================================================================================================
// List link picker (user-account.html)
// ================================================================================================
$(".account-link_item-1").click(function () {
	$(".account-link_item-1").addClass("active");
	$(".account-link_item-2").removeClass("active");
	$(".account-link_item-3").removeClass("active");
	$(".account-link_item-4").removeClass("active");
	$(".account-link_item-5").removeClass("active");
	$(".account-link_item-6").removeClass("active");
	$(".account-link_item-7").removeClass("active");
	$(".account-link_item-8").removeClass("active");
	$(".account-link_item-9").removeClass("active");
	$(".account-link_item-10").removeClass("active");
});

$(".account-link_item-2").click(function () {
	$(".account-link_item-1").removeClass("active");
	$(".account-link_item-2").addClass("active");
	$(".account-link_item-3").removeClass("active");
	$(".account-link_item-4").removeClass("active");
	$(".account-link_item-5").removeClass("active");
	$(".account-link_item-6").removeClass("active");
	$(".account-link_item-7").removeClass("active");
	$(".account-link_item-8").removeClass("active");
	$(".account-link_item-9").removeClass("active");
	$(".account-link_item-10").removeClass("active");
});

$(".account-link_item-3").click(function () {
	$(".account-link_item-1").removeClass("active");
	$(".account-link_item-2").removeClass("active");
	$(".account-link_item-3").addClass("active");
	$(".account-link_item-4").removeClass("active");
	$(".account-link_item-5").removeClass("active");
	$(".account-link_item-6").removeClass("active");
	$(".account-link_item-7").removeClass("active");
	$(".account-link_item-8").removeClass("active");
	$(".account-link_item-9").removeClass("active");
	$(".account-link_item-10").removeClass("active");
});

$(".account-link_item-4").click(function () {
	$(".account-link_item-1").removeClass("active");
	$(".account-link_item-2").removeClass("active");
	$(".account-link_item-3").removeClass("active");
	$(".account-link_item-4").addClass("active");
	$(".account-link_item-5").removeClass("active");
	$(".account-link_item-6").removeClass("active");
	$(".account-link_item-7").removeClass("active");
	$(".account-link_item-8").removeClass("active");
	$(".account-link_item-9").removeClass("active");
	$(".account-link_item-10").removeClass("active");
});

$(".account-link_item-5").click(function () {
	$(".account-link_item-1").removeClass("active");
	$(".account-link_item-2").removeClass("active");
	$(".account-link_item-3").removeClass("active");
	$(".account-link_item-4").removeClass("active");
	$(".account-link_item-5").addClass("active");
	$(".account-link_item-6").removeClass("active");
	$(".account-link_item-7").removeClass("active");
	$(".account-link_item-8").removeClass("active");
	$(".account-link_item-9").removeClass("active");
	$(".account-link_item-10").removeClass("active");
});

$(".account-link_item-6").click(function () {
	$(".account-link_item-1").removeClass("active");
	$(".account-link_item-2").removeClass("active");
	$(".account-link_item-3").removeClass("active");
	$(".account-link_item-4").removeClass("active");
	$(".account-link_item-5").removeClass("active");
	$(".account-link_item-6").addClass("active");
	$(".account-link_item-7").removeClass("active");
	$(".account-link_item-8").removeClass("active");
	$(".account-link_item-9").removeClass("active");
	$(".account-link_item-10").removeClass("active");
});

$(".account-link_item-7").click(function () {
	$(".account-link_item-1").removeClass("active");
	$(".account-link_item-2").removeClass("active");
	$(".account-link_item-3").removeClass("active");
	$(".account-link_item-4").removeClass("active");
	$(".account-link_item-5").removeClass("active");
	$(".account-link_item-6").removeClass("active");
	$(".account-link_item-7").addClass("active");
	$(".account-link_item-8").removeClass("active");
	$(".account-link_item-9").removeClass("active");
	$(".account-link_item-10").removeClass("active");
});

$(".account-link_item-8").click(function () {
	$(".account-link_item-1").removeClass("active");
	$(".account-link_item-2").removeClass("active");
	$(".account-link_item-3").removeClass("active");
	$(".account-link_item-4").removeClass("active");
	$(".account-link_item-5").removeClass("active");
	$(".account-link_item-6").removeClass("active");
	$(".account-link_item-7").removeClass("active");
	$(".account-link_item-8").addClass("active");
	$(".account-link_item-9").removeClass("active");
	$(".account-link_item-10").removeClass("active");
});

$(".account-link_item-9").click(function () {
	$(".account-link_item-1").removeClass("active");
	$(".account-link_item-2").removeClass("active");
	$(".account-link_item-3").removeClass("active");
	$(".account-link_item-4").removeClass("active");
	$(".account-link_item-5").removeClass("active");
	$(".account-link_item-6").removeClass("active");
	$(".account-link_item-7").removeClass("active");
	$(".account-link_item-8").removeClass("active");
	$(".account-link_item-9").addClass("active");
	$(".account-link_item-10").removeClass("active");
});

$(".account-link_item-10").click(function () {
	$(".account-link_item-1").removeClass("active");
	$(".account-link_item-2").removeClass("active");
	$(".account-link_item-3").removeClass("active");
	$(".account-link_item-4").removeClass("active");
	$(".account-link_item-5").removeClass("active");
	$(".account-link_item-6").removeClass("active");
	$(".account-link_item-7").removeClass("active");
	$(".account-link_item-8").removeClass("active");
	$(".account-link_item-9").removeClass("active");
	$(".account-link_item-10").addClass("active");
});

// ================================================================================================
// List link picker (faq.html)
// ================================================================================================
$(".link-1").click(function () {
	$(".link-1").addClass("active");
	$(".link-2").removeClass("active");
	$(".link-3").removeClass("active");
	$(".link-4").removeClass("active");
	$(".link-5").removeClass("active");
	$(".link-6").removeClass("active");
	$(".link-7").removeClass("active");
	$(".link-8").removeClass("active");
	$(".link-9").removeClass("active");
});

$(".link-2").click(function () {
	$(".link-2").addClass("active");
	$(".link-1").removeClass("active");
	$(".link-3").removeClass("active");
	$(".link-4").removeClass("active");
	$(".link-5").removeClass("active");
	$(".link-6").removeClass("active");
	$(".link-7").removeClass("active");
	$(".link-8").removeClass("active");
	$(".link-9").removeClass("active");
});

$(".link-3").click(function () {
	$(".link-3").addClass("active");
	$(".link-1").removeClass("active");
	$(".link-2").removeClass("active");
	$(".link-4").removeClass("active");
	$(".link-5").removeClass("active");
	$(".link-6").removeClass("active");
	$(".link-7").removeClass("active");
	$(".link-8").removeClass("active");
});

$(".link-4").click(function () {
	$(".link-4").addClass("active");
	$(".link-1").removeClass("active");
	$(".link-2").removeClass("active");
	$(".link-3").removeClass("active");
	$(".link-5").removeClass("active");
	$(".link-6").removeClass("active");
	$(".link-7").removeClass("active");
	$(".link-8").removeClass("active");
	$(".link-9").removeClass("active");
});

$(".link-5").click(function () {
	$(".link-5").addClass("active");
	$(".link-1").removeClass("active");
	$(".link-2").removeClass("active");
	$(".link-3").removeClass("active");
	$(".link-4").removeClass("active");
	$(".link-6").removeClass("active");
	$(".link-7").removeClass("active");
	$(".link-8").removeClass("active");
	$(".link-9").removeClass("active");
});

$(".link-6").click(function () {
	$(".link-6").addClass("active");
	$(".link-1").removeClass("active");
	$(".link-2").removeClass("active");
	$(".link-3").removeClass("active");
	$(".link-4").removeClass("active");
	$(".link-5").removeClass("active");
	$(".link-7").removeClass("active");
	$(".link-8").removeClass("active");
	$(".link-9").removeClass("active");
});

$(".link-7").click(function () {
	$(".link-7").addClass("active");
	$(".link-1").removeClass("active");
	$(".link-2").removeClass("active");
	$(".link-3").removeClass("active");
	$(".link-4").removeClass("active");
	$(".link-5").removeClass("active");
	$(".link-6").removeClass("active");
	$(".link-8").removeClass("active");
	$(".link-9").removeClass("active");
});

$(".link-8").click(function () {
	$(".link-8").addClass("active");
	$(".link-1").removeClass("active");
	$(".link-2").removeClass("active");
	$(".link-3").removeClass("active");
	$(".link-4").removeClass("active");
	$(".link-5").removeClass("active");
	$(".link-6").removeClass("active");
	$(".link-7").removeClass("active");
	$(".link-9").removeClass("active");
});

$(".link-9").click(function () {
	$(".link-9").addClass("active");
	$(".link-1").removeClass("active");
	$(".link-2").removeClass("active");
	$(".link-3").removeClass("active");
	$(".link-4").removeClass("active");
	$(".link-5").removeClass("active");
	$(".link-6").removeClass("active");
	$(".link-7").removeClass("active");
	$(".link-8").removeClass("active");
});

// ================================================================================================
// Hidden menu
// ================================================================================================
$(".container__menu-hidden").click(function () {
	$(".menu-hidden").removeClass("hidden");
	$(".overflow").removeClass("hidden");
	$(".menu-hidden").addClass("visible");
	$(".overflow").addClass("visible");
});

$(".menu-hidden__close-btn").click(function () {
	$(".menu-hidden").removeClass("visible");
	$(".overflow").removeClass("visible");
	$(".menu-hidden").addClass("hidden");
	$(".overflow").addClass("hidden");
});

// ================================================================================================
// Hidden footer link list
// ================================================================================================
$(".open-list.part-1").click(function () {
	$(".open-list.part-1").removeClass("closed");
	$(".open-list.part-1").addClass("active");
	$(".list.part-1").removeClass("hidden");
	$(".list.part-1").addClass("active");
	$(".open-list.part-2").removeClass("active");
	$(".open-list.part-2").addClass("closed");
	$(".list.part-2").removeClass("active");
	$(".list.part-2").addClass("hidden");
	$(".open-list.part-3").removeClass("active");
	$(".open-list.part-3").addClass("closed");
	$(".list.part-3").removeClass("active");
	$(".list.part-3").addClass("hidden");
	$(".open-list.part-4").removeClass("active");
	$(".open-list.part-4").addClass("closed");
	$(".list.part-4").removeClass("active");
	$(".list.part-4").addClass("hidden");
	$(".open-list.part-5").removeClass("active");
	$(".open-list.part-5").addClass("closed");
	$(".list.part-5").removeClass("active");
	$(".list.part-5").addClass("hidden");
});

$(".open-list.part-2").click(function () {
	$(".open-list.part-2").removeClass("closed");
	$(".open-list.part-2").addClass("active");
	$(".list.part-2").removeClass("hidden");
	$(".list.part-2").addClass("active");
	$(".open-list.part-1").removeClass("active");
	$(".open-list.part-1").addClass("closed");
	$(".list.part-1").removeClass("active");
	$(".list.part-1").addClass("hidden");
	$(".open-list.part-3").removeClass("active");
	$(".open-list.part-3").addClass("closed");
	$(".list.part-3").removeClass("active");
	$(".list.part-3").addClass("hidden");
	$(".open-list.part-4").removeClass("active");
	$(".open-list.part-4").addClass("closed");
	$(".list.part-4").removeClass("active");
	$(".list.part-4").addClass("hidden");
	$(".open-list.part-5").removeClass("active");
	$(".open-list.part-5").addClass("closed");
	$(".list.part-5").removeClass("active");
	$(".list.part-5").addClass("hidden");
});

$(".open-list.part-3").click(function () {
	$(".open-list.part-3").removeClass("closed");
	$(".open-list.part-3").addClass("active");
	$(".list.part-3").removeClass("hidden");
	$(".list.part-3").addClass("active");
	$(".open-list.part-1").removeClass("active");
	$(".open-list.part-1").addClass("closed");
	$(".list.part-1").removeClass("active");
	$(".list.part-1").addClass("hidden");
	$(".open-list.part-2").removeClass("active");
	$(".open-list.part-2").addClass("closed");
	$(".list.part-2").removeClass("active");
	$(".list.part-2").addClass("hidden");
	$(".open-list.part-4").removeClass("active");
	$(".open-list.part-4").addClass("closed");
	$(".list.part-4").removeClass("active");
	$(".list.part-4").addClass("hidden");
	$(".open-list.part-5").removeClass("active");
	$(".open-list.part-5").addClass("closed");
	$(".list.part-5").removeClass("active");
	$(".list.part-5").addClass("hidden");
});

$(".open-list.part-4").click(function () {
	$(".open-list.part-4").removeClass("closed");
	$(".open-list.part-4").addClass("active");
	$(".list.part-4").removeClass("hidden");
	$(".list.part-4").addClass("active");
	$(".open-list.part-1").removeClass("active");
	$(".open-list.part-1").addClass("closed");
	$(".list.part-1").removeClass("active");
	$(".list.part-1").addClass("hidden");
	$(".open-list.part-2").removeClass("active");
	$(".open-list.part-2").addClass("closed");
	$(".list.part-2").removeClass("active");
	$(".list.part-2").addClass("hidden");
	$(".open-list.part-3").removeClass("active");
	$(".open-list.part-3").addClass("closed");
	$(".list.part-3").removeClass("active");
	$(".list.part-3").addClass("hidden");
	$(".open-list.part-5").removeClass("active");
	$(".open-list.part-5").addClass("closed");
	$(".list.part-5").removeClass("active");
	$(".list.part-5").addClass("hidden");
});

$(".open-list.part-5").click(function () {
	$(".open-list.part-5").removeClass("closed");
	$(".open-list.part-5").addClass("active");
	$(".list.part-5").removeClass("hidden");
	$(".list.part-5").addClass("active");
	$(".open-list.part-1").removeClass("active");
	$(".open-list.part-1").addClass("closed");
	$(".list.part-1").removeClass("active");
	$(".list.part-1").addClass("hidden");
	$(".open-list.part-2").removeClass("active");
	$(".open-list.part-2").addClass("closed");
	$(".list.part-2").removeClass("active");
	$(".list.part-2").addClass("hidden");
	$(".open-list.part-3").removeClass("active");
	$(".open-list.part-3").addClass("closed");
	$(".list.part-3").removeClass("active");
	$(".list.part-3").addClass("hidden");
	$(".open-list.part-4").removeClass("active");
	$(".open-list.part-4").addClass("closed");
	$(".list.part-4").removeClass("active");
	$(".list.part-4").addClass("hidden");
});