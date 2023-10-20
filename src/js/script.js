var swiper = new Swiper('.popup-slider_top', {
	loop: true,
	spaceBetween: 15,
	watchSlidesProgress: true,
});

var swiper2 = new Swiper('.popup-slider_bottom', {
	loop: true,
	spaceBetween: 5,
	slidesPerView: 3,
	// centeredSlides: true,

	on: {
		click: function () {
			console.log('swiper initialized');
			swiper2.slideNext();
		},
	},
	thumbs: {
		swiper: swiper,
	},
	breakpoints: {
		769: {
			spaceBetween: 10,
		},
	},
});

const togglePopup = () => {
	const popupBtn = document.querySelectorAll('.js-openPopup');
	for (let i = 0; i <= popupBtn.length; i++) {
		popupBtn[i].setAttribute('data-href', 'popup' + i);
	}
};

togglePopup();
