(function ($) {
	"use strict";
	/**
	 * @param $scope The Widget wrapper element as a jQuery element
	 * @param $ The jQuery alias
	 */
	// Make sure you run this code under Elementor.
	$(window).on("elementor/frontend/init", function () {
		// global widget
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/widget",
			function ($scope, $) {
				// background image
				let bgImage = $scope.find(".background-image");
				if (bgImage.length > 0) {
					bgImage.each(function () {
						$(this).css(
							"background-image",
							"url(" + $(this).attr("data-bg-image") + ")"
						);
					});
				}
			}
		);

		// tj-button
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tj-button.default",
			function ($scope, $) {
				let buttonWrap = $scope.find(".tj_btn_wrapper");
				let buttonWrapElement = buttonWrap[0];

				// Get the button and set its border color dynamically
				let borderColor = buttonWrap.attr("data-border-color");
				let shadowColor = buttonWrap.attr("data-shadow-color");

				// Update the custom property dynamically
				buttonWrapElement.style.setProperty("--border-color", borderColor);
				buttonWrapElement.style.setProperty("--shadow-color", shadowColor);
			}
		);

		// hero banner slider
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tj-hero-banner-slider.default",

			function ($scope, $) {
				let sliderWrap = $scope.find(".bannerSlider");

				var loop = sliderWrap.attr("data-loop") == "yes" ? true : false;
				var nav = sliderWrap.attr("data-nav") == "yes" ? true : false;
				var autoplay = sliderWrap.attr("data-autoplay") == "yes" ? true : false;
				var delay = sliderWrap.attr("data-delay")
					? sliderWrap.attr("data-delay")
					: "5000";

				let bannerSlider = $scope.find(".hero-slider");

				if (bannerSlider.length > 0) {
					let bannerId = bannerSlider.attr("id");

					var heroSlider = new Swiper(`#${bannerId}`, {
						slidesPerView: 1,
						spaceBetween: 10,
						effect: "fade",
						loop: loop,
						...(autoplay
							? {
									autoplay: {
										delay: delay,
									},
							  }
							: {}),

						...(nav
							? {
									navigation: {
										nextEl: ".slider-next",
										prevEl: ".slider-prev",
									},
							  }
							: {}),
					});
				}
			}
		);

		// tj-hero-banner
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tj-hero-banner.default",
			function ($scope, $) {
				// hero video
				let videoPopup = $scope.find(".popup-videos-button");

				if (videoPopup.length > 0) {
					let popupId = videoPopup.attr("id");

					$(`#${popupId}`).magnificPopup({
						disableOn: 10,
						type: "iframe",
						mainClass: "mfp-fade",
						removalDelay: 160,
						preloader: false,
						fixedContentPos: false,
					});
				}

				// hero brands
				let carouselWrap = $scope.find(".carouselWrap");
				let sliderBrand = $scope.find(".tj-brand-slider2");

				var loop = carouselWrap.attr("data-loop") == "yes" ? true : false;
				var autoplay =
					carouselWrap.attr("data-autoplay") == "yes" ? true : false;
				var delay = carouselWrap.attr("data-delay")
					? carouselWrap.attr("data-delay")
					: "5000";

				if (sliderBrand.length > 0) {
					let carouselId = sliderBrand.attr("id");

					var brand = new Swiper(`#${carouselId}`, {
						slidesPerView: 2,
						loop: loop,
						spaceBetween: 30,
						...(autoplay
							? {
									autoplay: {
										delay: delay,
									},
							  }
							: {}),
						breakpoints: {
							320: {
								slidesPerView: 2,
							},
							576: {
								slidesPerView: 3,
							},
							768: {
								slidesPerView: 4,
							},
							992: {
								slidesPerView: 5,
							},
						},
					});
				}
			}
		);

		// tj-before-after
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tj-before-after.default",

			function ($scope, $) {
				let slider = $scope.find(".tj-before-after");

				var loop = slider.attr("data-loop") == "yes" ? true : false;
				var nav = slider.attr("data-nav") == "yes" ? true : false;
				var autoplay = slider.attr("data-autoplay") == "yes" ? true : false;
				var delay = slider.attr("data-delay")
					? slider.attr("data-delay")
					: "5000";

				const differenceSlider = $scope.find(".difference-slider");
				const id = differenceSlider.attr("id");

				if (differenceSlider.length > 0) {
					var service = new Swiper(`#${id}`, {
						slidesPerView: 1,
						loop: loop,
						spaceBetween: 30,
						speed: 2000,
						...(autoplay
							? {
									autoplay: {
										delay: delay,
									},
							  }
							: {}),
						...(nav
							? {
									navigation: {
										nextEl: ".slider-next",
										prevEl: ".slider-prev",
									},
							  }
							: {}),
					});
				}
			}
		);

		// tj-counter
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tj-counter.default",

			function ($scope, $) {
				let counter = $scope.find(".odometer");

				if (counter.length > 0) {
					counter.waypoint(
						function () {
							var odo = counter;
							odo.each(function () {
								var countNumber = $(this).attr("data-count");
								$(this).html(countNumber);
							});
						},
						{
							offset: "80%",
							triggerOnce: true,
						}
					);
				}
			}
		);

		// tj-brands-carousel
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tj-brands-carousel.default",

			function ($scope, $) {
				let carouselWrap = $scope.find(".carouselWrap");
				let sliderBrand = $scope.find(".tj-brand-slider");

				var loop = carouselWrap.attr("data-loop") == "yes" ? true : false;
				var autoplay =
					carouselWrap.attr("data-autoplay") == "yes" ? true : false;
				var delay = carouselWrap.attr("data-delay")
					? carouselWrap.attr("data-delay")
					: "5000";

				if (sliderBrand.length > 0) {
					let carouselId = sliderBrand.attr("id");

					var brand = new Swiper(`#${carouselId}`, {
						slidesPerView: "auto",
						spaceBetween: 30,
						centeredSlides: true,
						loop: loop,
						speed: 2000,
						...(autoplay
							? {
									autoplay: {
										delay: delay,
									},
							  }
							: {}),
					});
				}
			}
		);

		// tj-progress-bar
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tj-progress-bar.default",

			function ($scope, $) {
				let skills = $scope.find(".skills");
				if (skills.length > 0) {
					function startAnimation() {
						$(".skills").each(function () {
							$(this)
								.find(".skillbar")
								.animate(
									{
										width: $(this).attr("data-percent"),
									},
									4000
								);
						});
					}

					$(".skills").waypoint(
						function () {
							startAnimation();
						},
						{ offset: "80%" }
					);
				}
			}
		);

		// tj-testimonials
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tj-testimonials.default",

			function ($scope, $) {
				// rating
				let star_rating_width = $(".fill-ratings span").width();
				$(".star-ratings").width(star_rating_width);

				// Testimonial slider home 02
				let wrap = $scope.find(".carouselWrap");

				var loop = wrap.attr("data-loop") == "yes" ? true : false;
				var dots = wrap.attr("data-dot") == "yes" ? true : false;
				var autoplay = wrap.attr("data-autoplay") == "yes" ? true : false;
				var delay = wrap.attr("data-delay") ? wrap.attr("data-delay") : "5000";

				let testimonialCarousel = $scope.find(".testimonial-carousel");

				if (testimonialCarousel.length > 0) {
					let carouselId = testimonialCarousel.attr("id");

					$(`#${carouselId}`).owlCarousel({
						center: true,
						items: 3,
						loop: loop,
						margin: 50,
						dots: dots,
						autoplay: autoplay,
						autoplayTimeout: delay,
						responsive: {
							320: {
								items: 1,
							},
							576: {
								items: 1,
							},
							768: {
								items: 2,
							},
							1200: {
								items: 2,
							},
							1400: {
								items: 3,
							},
						},
					});
				}
			}
		);

		// tj-video
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tj-video.default",

			function ($scope, $) {
				let videoPopup = $scope.find(".popup-videos-button");

				if (videoPopup.length > 0) {
					let popupId = videoPopup.attr("id");

					$(`#${popupId}`).magnificPopup({
						disableOn: 10,
						type: "iframe",
						mainClass: "mfp-fade",
						removalDelay: 160,
						preloader: false,
						fixedContentPos: false,
					});
				}
			}
		);

		// tj-project-carousel
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tj-project-carousel.default",

			function ($scope, $) {
				let wrap = $scope.find(".carouselWrap");

				var loop = wrap.attr("data-loop") == "yes" ? true : false;
				var nav = wrap.attr("data-nav") == "yes" ? true : false;
				var autoplay = wrap.attr("data-autoplay") == "yes" ? true : false;
				var delay = wrap.attr("data-delay") ? wrap.attr("data-delay") : "5000";

				let slider = $scope.find(".tj-project-slider");

				if (slider.length > 0) {
					let id = slider.attr("id");

					var project = new Swiper(`#${id}`, {
						slidesPerView: 4,
						spaceBetween: 0,
						loop: loop,
						speed: 2000,
						...(nav
							? {
									navigation: {
										nextEl: ".slider-next",
										prevEl: ".slider-prev",
									},
							  }
							: {}),
						...(autoplay
							? {
									autoplay: {
										delay: delay,
									},
							  }
							: {}),
						breakpoints: {
							320: {
								slidesPerView: 1,
							},
							576: {
								slidesPerView: 1,
							},
							640: {
								slidesPerView: 2,
							},
							768: {
								slidesPerView: 2,
							},
							992: {
								slidesPerView: 3,
							},
							992: {
								slidesPerView: 3,
							},
							1400: {
								slidesPerView: 4,
							},
						},
					});
				}
			}
		);

		// tj-projects
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tj-project.default",

			function ($scope, $) {
				let projectGrid = $scope.find(".project-grid");
				let filterItem = $scope.find(".filter-menu button");

				if (projectGrid.length > 0) {
					let projectGridId = projectGrid.attr("id");

					const adjustLayout = () => {
						let projectContainer = $(`#${projectGridId}`);
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
					$(`#${projectGridId}`).imagesLoaded(function () {
						var $grid = $(`#${projectGridId}`).isotope({
							itemSelector: ".project-single-item",
							percentPosition: true,
							masonry: {
								columnWidth: ".project-single-item",
							},
						});

						filterItem.on("click", function () {
							var filterValue = $(this).attr("data-filter");
							$grid.isotope({
								filter: filterValue,
							});
						});

						filterItem.on("click", function (event) {
							$(this).siblings(".active").removeClass("active");
							$(this).addClass("active");
							event.preventDefault();
						});
					});
				}

				// projects 04
				let projectItem = $scope.find(".project_list_item");

				if (projectItem.length > 0) {
					const cursor = document.querySelector(".project_images_wrap");
					const cursorMedias = document.querySelectorAll(".cursor_media");
					const navLinks = document.querySelectorAll(".project_list_item");

					gsap.set(cursor, {
						xPercent: -50,
						yPercent: -140,
						scale: 0,
					});

					const setCursorX = gsap.quickTo(cursor, "x", {
						duration: 0.6,
						ease: "expo",
					});

					const setCursorY = gsap.quickTo(cursor, "y", {
						duration: 0.6,
						ease: "expo",
					});

					window.addEventListener("mousemove", e => {
						setCursorX(e.pageX);
						setCursorY(e.pageY); // Add the offset here
					});

					const tl = gsap.timeline({
						paused: true,
					});

					tl.to(cursor, {
						scale: 1,
						opacity: 1,
						duration: 0.5,
						ease: "expo.inOut",
					});

					navLinks.forEach((navLink, i) => {
						navLink.addEventListener("mouseover", () => {
							cursorMedias[i].classList.add("active");
							tl.play();
						});
					});

					navLinks.forEach((navLink, i) => {
						navLink.addEventListener("mouseout", () => {
							tl.reverse();
							cursorMedias[i].classList.remove("active");
						});
					});
				}
			}
		);

		// tj-services
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tj-services.default",

			function ($scope, $) {
				let servicesGrid = $scope.find(".service-masonry");

				if (servicesGrid.length > 0) {
					let servicesGridId = servicesGrid.attr("id");

					function masonryGridSetting() {
						let grid = $(`#${servicesGridId}`).masonry({
							itemSelector: ".grid-item",
							columnWidth: ".grid-item",
							percentPosition: true,
						});

						grid.imagesLoaded().progress(function () {
							grid.masonry("layout");
						});
					}
					masonryGridSetting();
				}
			}
		);

		// tj-marquee
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tj-marquee.default",

			function ($scope, $) {
				let marquee = $scope.find(".roll-box.swiper");

				if (marquee.length > 0) {
					let marqueeId = marquee.attr("id");

					var marqueeSlider = new Swiper(`#${marqueeId}`, {
						loop: true,
						freemode: true,
						slidesPerView: "auto",
						spaceBetween: 0,
						centeredSlides: true,
						allowTouchMove: false,
						speed: 5000,
						autoplay: {
							delay: 0,
						},
					});
				}
			}
		);
	});
})(jQuery);
