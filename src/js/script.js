const popupButtons = document.querySelectorAll('.js-openPopup');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const closeBtns = document.querySelectorAll('.js-popup-close');
const resultDiv = document.querySelector('.js-result-popup');

const openPopup = () => {
	popupButtons.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			e.preventDefault();
			let id = e.target.getAttribute('href');
			body.classList.add('no-scroll');
			overlay.classList.add('active');
			async function getResult() {
				try {
					const response = await axios.get(`wp-json/wp/v2/advantages/${id}`);
					const result = response.data;

					resultDiv.innerHTML = `	<div class="popup js-popup" id="${result.id}">
					<div class="popup-body">
						<div class="popup-close js-closePopup"></div>
						<div class="popup-row">
							<div class="popup__gallery">
								<div class="swiper popup-slider_top">
									<div class="swiper-wrapper">
									${result.popupGallery
										.map(
											(item) =>
												// console.log(item.slide.url);
												`<div class="swiper-slide">
											<img src="${item.slide.url}" alt="${item.slide.alt}" />
										</div>`
										)
										.join('')}
									</div>
								</div>
								<div thumbsSlider="" class="swiper mySwiper popup-slider_bottom">
									<div class="swiper-wrapper">
										<!-- Slides -->
										${result.popupGallery
											.map(
												(item) =>
													// console.log(item.slide.url);
													`<div class="swiper-slide">
												<img src="${item.slide.url}" alt="${item.slide.alt}" />
											</div>`
											)
											.join('')}
									</div>
								</div>
							</div>
							<div class="popup__content">
								${result.popupContent}
							</div>
						</div>
					</div>
				</div>`;
				} catch (error) {
					console.error(error);
				}
				const swiper = new Swiper('.popup-slider_top', {
					loop: true,
					spaceBetween: 15,
					watchSlidesProgress: true,
					initialSlide: 0,
					allowTouchMove: false,
				});

				const swiper2 = new Swiper('.popup-slider_bottom', {
					loop: true,
					spaceBetween: 5,
					slidesPerView: 3,
					initialSlide: 3,
					on: {
						click: function () {
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
				let popup = document.getElementById(`${id}`);
				popup.classList.add('active');
			}
			setTimeout(() => {
				getResult();
			}, 400);
		});
	});
};

openPopup();

const closePopup = () => {
	body.classList.remove('no-scroll');
	overlay.classList.remove('active');
	resultDiv.innerHTML = '';
};

resultDiv.addEventListener('click', (e) => {
	if (e.target.classList.contains('js-closePopup')) {
		closePopup();
	}
});

overlay.addEventListener('click', closePopup);
