$(document).ready(function () {
	$("#team-carousel-items").owlCarousel({
		items: 3,
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		stagePadding: 0,
		nav: true,
		navText: [
			"<i class='fa fa-chevron-left fa-1x'></i>", 
			"<i class='fa fa-chevron-right fa-1x'></i>"],
		dots: false,
		autoplay: false,
		autoHeight: false,
		autoplaySpeed: 8000,
		responsive:{
			0:{
				items:1
			},
			400: {
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			},
			1200:{
				items:3
			}
		}
	});	
}(jQuery));
