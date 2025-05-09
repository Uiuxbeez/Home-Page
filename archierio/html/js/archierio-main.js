/***************************************************
==================== JS INDEX ======================
****************************************************

// Data Js
// Preloader Js
// Offcanvas Js
// Mobile Menu Js
// Hamburger Menu Js
// Search Bar Js
// Header Middle Logo
// Sticky js
// Popup Gallery
// Popup Video
// Blog Slider
// Nice Select Js
// Nice Select Js
// Wow Js

****************************************************/

(function ($) {
	"use strict";

	////////////////////////////////////////////////////
	//  Data Js
	$("[data-bg-image]").each(function () {
		$(this).css(
			"background-image",
			"url( " + $(this).attr("data-bg-image") + "  )"
		);
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	////////////////////////////////////////////////////
	// Preloader Js
	$(window).on("load", function () {
		$("#preloader").fadeOut(500, function () {
			// Once the preloader is fully hidden, start animations
			startAnimations();
		});
	});
	if ($("#preloader").length > 0) {
		$(".tj-cancel-btn").each(function () {
			$(this).on("click", function (e) {
				e.preventDefault();
				$("#preloader").fadeOut(500, function () {
					// Start animations even if the user cancels the preloader
					startAnimations();
				});
			});
		});
	}

	////////////////////////////////////////////////////
	// Offcanvas Js
	$(".side-menu .canva_expander").on("click", function () {
		$(".offcanvas-area").addClass("opened");
	});
	$(".offcanvas-close button").on("click", function () {
		$(".offcanvas-area").removeClass("opened");
	});

	////////////////////////////////////////////////////
	// Mobile Menu Js
	$("#main-menu").meanmenu({
		meanMenuContainer: ".mobile_menu",
		meanScreenWidth: "991",
		meanExpand: ['<i class="fa-light fa-angle-right"></i>'],
	});
	$(".menu-bar").on("click", function () {
		$(".menu-bar").addClass("menu-bar-toggeled");
	});

	////////////////////////////////////////////////////
	//  Hamburger Menu Js
	$(".mobile-bar").on("click", function () {
		$(".hamburger-area").addClass("opened");
		$(".body-overlay").addClass("opened");
	});
	$(".hamburger_close_btn").on("click", function () {
		$(".hamburger-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
		$(".mobile-bar").removeClass("menu-bar-toggeled");
	});
	$(".body-overlay").on("click", function () {
		$(".hamburger-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
		$(".offset_canvas").removeClass("show");
		$(".mobile-bar").removeClass("menu-bar-toggeled");
	});

	////////////////////////////////////////////////////
	//  Search Bar Js
	$(".header-search .search").on("click", function () {
		$(".search_popup").addClass("search-opened");
		$(".search-popup-overlay").addClass("search-popup-overlay-open");
	});
	$(".search_close_btn").on("click", function () {
		$(".search_popup").removeClass("search-opened");
		$(".search-popup-overlay").removeClass("search-popup-overlay-open");
	});
	$(".search-popup-overlay").on("click", function () {
		$(".search_popup").removeClass("search-opened");
		$(this).removeClass("search-popup-overlay-open");
	});

	////////////////////////////////////////////////////
	// Header Middle Logo
	var minWidth = window.matchMedia("(min-width: 992px)");
	if ($(".move_logo_wrap").length > 0 && minWidth) {
		// Function to dynamically move .header-logo to the middle of top-level li elements
		function moveLogoToMiddle() {
			// Loop through all `.move_logo_wrap` elements
			$(".move_logo_wrap").each(function () {
				var container = this; // Current `.move_logo_wrap`
				var mainMenu = container.querySelector(".mainmenu");
				var siteLogo = container.querySelector(".site-logo");
				if (!mainMenu || !siteLogo) return; // Skip if `.mainmenu` or `.site-logo` is missing

				var listItems = Array.from(mainMenu.querySelectorAll("li"));
				// Filter out child li elements
				var topLevelListItems = listItems.filter(function (item) {
					return item.parentElement === mainMenu.querySelector("ul");
				});

				if (topLevelListItems.length > 0) {
					// Calculate the middle index
					var middleIndex = Math.floor(topLevelListItems.length / 2);

					// Insert the siteLogo in the middle of top-level list items
					topLevelListItems[middleIndex].insertAdjacentElement(
						"beforebegin",
						siteLogo
					);
				}
			});
		}

		if (minWidth) {
			// Call the function when the document is fully loaded
			window.addEventListener("load", moveLogoToMiddle);
		}
	}

	////////////////////////////////////////////////////
	//  Sticky js
	$(window).scroll(function () {
		var Width = $(document).width();
		if ($("body").scrollTop() > 250 || $("html").scrollTop() > 250) {
			$(".header-sticky").addClass("sticky");
		} else {
			$(".header-sticky").removeClass("sticky");
		}
	});

	////////////////////////////////////////////////////
	//  Popup Gallery
	if ($(".popup-gallery").length > 0) {
		$(".popup-gallery").magnificPopup({
			type: "image",
			mainClass: "mfp-fade",
			gallery: {
				enabled: true,
			},
		});
	}

	////////////////////////////////////////////////////
	//  Popup Video
	if ($(".popup-videos-button").length > 0) {
		$(".popup-videos-button").magnificPopup({
			disableOn: 10,
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
		});
	}

	////////////////////////////////////////////////////
	//  Blog Slider
	if ($(".blog-standard-slider").length > 0) {
		var blog = new Swiper(".blog-standard-slider", {
			slidesPerView: 1,
			loop: true,
			autoplay: {
				delay: 8500,
			},
			navigation: {
				nextEl: ".slider-next",
				prevEl: ".slider-prev",
			},
		});
	}

	////////////////////////////////////////////////////
	// Nice Select Js
	if ($("select").length > 0) {
		$("select").niceSelect();
	}

	////////////////////////////////////////////////////
	// Wow Js
	$(window).on("load", function () {
		var wow = new WOW({
			boxClass: "wow", // default
			animateClass: "animated", // default
			offset: 0, // default
			mobile: true, // default
			live: true, // default
		});
		wow.init();
	});

	////////////////////////////////////////////////////
	// Projects Js
	let projectGrid = $(".project-grid");

	if (projectGrid.length > 0) {
		const adjustLayout = () => {
			let projectContainer = $(".project-grid");
			let winWidth = window.innerWidth;

			let columnNumb = 1;

			if (winWidth >= 1400) {
				var attr_col = projectContainer.attr("data-xxl-col");

				if (projectContainer.hasClass("no-gutter")) {
					projectContainer.css({
						marginLeft: "0px",
						marginRight: "0px",
					});
				} else {
					projectContainer.css({
						marginLeft: "-12px",
						marginRight: "-12px",
					});
				}

				var portfolioWidth = projectContainer.width();

				if (typeof attr_col !== typeof undefined && attr_col !== false) {
					columnNumb = projectContainer.attr("data-xxl-col");
				} else columnNumb = 3;

				let postWidth = Math.floor(portfolioWidth / columnNumb);
				projectContainer.find(".project-single-item").each(function () {
					$(".project-single-item").css({
						width: postWidth + "px",
						padding: 12 + "px",
					});
					$(".no-gutter .project-single-item").css({
						width: postWidth + "px",
						padding: 0 + "px",
					});
				});
			} else if (winWidth >= 1200) {
				var attr_col = projectContainer.attr("data-xl-col");

				if (projectContainer.hasClass("no-gutter")) {
					projectContainer.css({
						marginLeft: "0px",
						marginRight: "0px",
					});
				} else {
					projectContainer.css({
						marginLeft: "-12px",
						marginRight: "-12px",
					});
				}

				var portfolioWidth = projectContainer.width();

				if (typeof attr_col !== typeof undefined && attr_col !== false) {
					columnNumb = projectContainer.attr("data-xl-col");
				} else columnNumb = 3;

				let postWidth = Math.floor(portfolioWidth / columnNumb);
				projectContainer.find(".project-single-item").each(function () {
					$(".project-single-item").css({
						width: postWidth + "px",
						padding: 12 + "px",
					});
					$(".no-gutter .project-single-item").css({
						width: postWidth + "px",
						padding: 0 + "px",
					});
				});
			} else if (winWidth >= 992) {
				var attr_col = projectContainer.attr("data-lg-col");

				if (projectContainer.hasClass("no-gutter")) {
					projectContainer.css({
						marginLeft: "0px",
						marginRight: "0px",
					});
				} else {
					projectContainer.css({
						marginLeft: "-12px",
						marginRight: "-12px",
					});
				}

				var portfolioWidth = projectContainer.width();

				if (typeof attr_col !== typeof undefined && attr_col !== false) {
					columnNumb = projectContainer.attr("data-lg-col");
				} else columnNumb = 2;

				let postWidth = Math.floor(portfolioWidth / columnNumb);
				projectContainer.find(".project-single-item").each(function () {
					$(".project-single-item").css({
						width: postWidth + "px",
						padding: 12 + "px",
					});
					$(".no-gutter .project-single-item").css({
						width: postWidth + "px",
						padding: 0 + "px",
					});
				});
			} else if (winWidth >= 768) {
				var attr_col = projectContainer.attr("data-md-col");

				if (projectContainer.hasClass("no-gutter")) {
					projectContainer.css({
						marginLeft: "0px",
						marginRight: "0px",
					});
				} else {
					projectContainer.css({
						marginLeft: "-12px",
						marginRight: "-12px",
					});
				}

				var portfolioWidth = projectContainer.width();

				if (typeof attr_col !== typeof undefined && attr_col !== false) {
					columnNumb = projectContainer.attr("data-md-col");
				} else columnNumb = 2;

				let postWidth = Math.floor(portfolioWidth / columnNumb);
				projectContainer.find(".project-single-item").each(function () {
					$(".project-single-item").css({
						width: postWidth + "px",
						padding: 12 + "px",
					});
					$(".no-gutter .project-single-item").css({
						width: postWidth + "px",
						padding: 0 + "px",
					});
				});
			} else if (winWidth < 767) {
				var attr_col = projectContainer.attr("data-sm-col");

				if (projectContainer.hasClass("no-gutter")) {
					projectContainer.css({
						marginLeft: "0px",
						marginRight: "0px",
					});
				} else {
					projectContainer.css({
						marginLeft: "-12px",
						marginRight: "-12px",
					});
				}

				var portfolioWidth = projectContainer.width();

				if (typeof attr_col !== typeof undefined && attr_col !== false) {
					columnNumb = projectContainer.attr("data-sm-col");
				} else columnNumb = 2;

				let postWidth = Math.floor(portfolioWidth / columnNumb);
				projectContainer.find(".project-single-item").each(function () {
					$(".project-single-item").css({
						width: postWidth + "px",
						padding: 12 + "px",
					});
					$(".no-gutter .project-single-item").css({
						width: postWidth + "px",
						padding: 0 + "px",
					});
				});
			}
		};

		adjustLayout(); // Call on initial load

		$(window).resize(function () {
			adjustLayout(); // Call on window resize
		});

		// before
		$(".project-grid").imagesLoaded(function () {
			var $grid = $(".project-grid").isotope({
				itemSelector: ".project-single-item",
				percentPosition: true,
				masonry: {
					columnWidth: ".project-single-item",
				},
			});

			$(".filter-menu button").on("click", function () {
				var filterValue = $(this).attr("data-filter");
				$grid.isotope({
					filter: filterValue,
				});
			});

			$(".filter-menu button").on("click", function (event) {
				$(this).siblings(".active").removeClass("active");
				$(this).addClass("active");
				event.preventDefault();
			});
		});
	}

	/*****************************************************************
================================= GSAP ====================================
********************************************************************/
	gsap.registerPlugin(ScrollTrigger, SplitText, TweenMax, ScrollToPlugin);

	gsap.config({
		nullTargetWarn: false,
	});

	////////////////////////////////////////////////////
	// Lenis Scroll Js
	const lenis = new Lenis();
	lenis.on("scroll", ScrollTrigger.update);
	gsap.ticker.add(time => {
		lenis.raf(time * 1000);
	});
	gsap.ticker.lagSmoothing(0);

	////////////////////////////////////////////////////
	// GSAP Title Animation
	function initializeAnimations() {
		// tj-split-text-1
		document
			.querySelectorAll(".tj-split-text-1:not(.animation-initialized)")
			.forEach(element => {
				element.classList.add("animation-initialized"); // Mark as initialized
				let delayValue = element.getAttribute("data-delay") || 0.5;

				let animationSplitText = new SplitText(element, {
					type: "chars, words",
				});
				gsap.from(animationSplitText.words, {
					duration: 1,
					delay: delayValue,
					x: 20,
					autoAlpha: 0,
					stagger: 0.05,
					scrollTrigger: { trigger: element, start: "top 85%" },
				});
			});

		// tj-split-text-2
		document
			.querySelectorAll(".tj-split-text-2:not(.animation-initialized)")
			.forEach(element => {
				element.classList.add("animation-initialized"); // Mark as initialized
				let delayValue = element.getAttribute("data-delay") || 0.1;

				let animationSplitText = new SplitText(element, {
					type: "chars, words",
				});
				gsap.from(animationSplitText.chars, {
					duration: 1,
					delay: delayValue,
					x: 20,
					autoAlpha: 0,
					stagger: 0.03,
					ease: "power2.out",
					scrollTrigger: { trigger: element, start: "top 85%" },
				});
			});

		// tj-split-text-3
		document
			.querySelectorAll(".tj-split-text-3:not(.animation-initialized)")
			.forEach(element => {
				element.classList.add("animation-initialized"); // Mark as initialized
				if (element.animation) {
					element.animation.progress(1).kill();
					element.split.revert();
				}

				element.split = new SplitText(element, {
					type: "lines,words,chars",
					linesClass: "split-line",
				});
				gsap.set(element, { perspective: 400 });

				gsap.set(element.split.chars, {
					opacity: 0,
					x: "50",
				});

				element.animation = gsap.to(element.split.chars, {
					scrollTrigger: { trigger: element, start: "top 90%" },
					x: "0",
					y: "0",
					rotateX: "0",
					opacity: 1,
					duration: 1,
					ease: Back.easeOut,
					stagger: 0.02,
				});
			});

		// tj-line-reveal
		document
			.querySelectorAll(".tj-line-reveal:not(.animation-initialized)")
			.forEach(element => {
				element.classList.add("animation-initialized"); // Mark as initialized
				let delayValue = element.getAttribute("data-delay") || 0.01;

				let animationRevealText = new SplitText(element, {
					type: "lines,words,chars",
					linesClass: "tj-reveal-line",
				});

				gsap.from(animationRevealText.chars, {
					scrollTrigger: { trigger: element, start: "top 90%" },
					duration: 0.5,
					delay: delayValue,
					ease: "circ.out",
					y: 100,
					stagger: 0.03,
					opacity: 0,
				});
			});

		// tj-line-3d
		gsap.utils
			.toArray(".tj-line-3d:not(.animation-initialized)")
			.forEach(splitTextLine => {
				splitTextLine.classList.add("animation-initialized"); // Mark as initialized
				const delayValue = splitTextLine.getAttribute("data-delay") || 0.5;

				const itemSplitted = new SplitText(splitTextLine, { type: "lines" });

				gsap.set(splitTextLine, { perspective: 400 });

				gsap
					.timeline({
						scrollTrigger: {
							trigger: splitTextLine,
							start: "top 90%",
							toggleActions: "play none none none",
						},
					})
					.from(itemSplitted.lines, {
						duration: 1,
						delay: delayValue,
						opacity: 0,
						rotationX: -80,
						force3D: true,
						transformOrigin: "top center -50",
						stagger: 0.1,
					});
			});
	}

	function startAnimations() {
		// Trigger animations on initial load
		initializeAnimations();

		// Reinitialize on Elementor updates
		jQuery(window).on("elementor/frontend/init", () => {
			elementorFrontend.hooks.addAction("frontend/element_ready/widget", () => {
				initializeAnimations();
				ScrollTrigger.refresh(); // Refresh ScrollTrigger to account for new content
			});
		});
	}
	// Run the animation initialization
	startAnimations();
})(jQuery);
