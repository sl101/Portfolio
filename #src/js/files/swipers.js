import Swiper, {
	Navigation,
	Pagination,
	EffectFade,
	Autoplay
} from 'swiper';

// ========================================================
const sliderPorfolio = new Swiper('.slider-portfolio',{

	// modules: [Navigation, Pagination, EffectFade, Autoplay],
	modules: [Navigation, Pagination],

	wrapperClass: 'slider-portfolio__wrapper',
	slideClass: 'slider-portfolio__slide',

		slidesPerView: 1, 
		spaceBetween: 50,
		speed: 1200,
		centeredSlides: true,

			navigation: {
		nextEl: '.slider-portfolio__arrow--next',
		prevEl: '.slider-portfolio__arrow--prev',
	},

	pagination: {
		el: '.slider-portfolio__pagination',
		clickable: true,
		type: 'bullets',
	},


	// loop: true,

	// effect: "fade",
	fadeEffect: {
		// crossFade: true
	},
	autoplay: {
		// delay: 5000,
		// disableOnInteraction: false,
	},
	});

// ====================================================

// const swiperReview = new Swiper('.swiper-review',{

// 	modules: [Navigation, Pagination],

// 	wrapperClass: 'swiper-review__wrapper',
// 	slideClass: 'swiper-review__slide',

// 	navigation: {
// 		nextEl: '.swiper-review__arrow--next',
// 		prevEl: '.swiper-review__arrow--prev',
// 	},

// 	pagination: {
// 		el: '.swiper-review__pagination',
// 		clickable: true,
// 		type: 'bullets',
// 	},

// 	spaceBetween: 70,
// 	speed: 1200,
// 	loop: true,
// 	});

// ====================================================

// const swiperService = new Swiper('.slider-services',{

// 	wrapperClass: 'slider-services__wrapper',
// 	slideClass: 'slider-services__slide',

// 	speed: 1200, 
// 	slidesPerView: 1.4, 
// 	centeredSlides: true,
// 	initialSlide: 1,
// 	slideToClickedSlide: true,
//   // roundLengths: true,
//   // loop: true,
//   // loopAdditionalSlides: 1,

// 	breakpoints: {
// 		480: {
// 			slidesPerView: 3, 
// 			spaceBetween: -80,
// 		},
// 		768: { 

// 		},
// 		992: {
// 			spaceBetween: 1
// 		},
// 		1200: { 
// 			spaceBetween: 19,
// 		},
// 	},
// });


// const mainSlider = new Swiper('.main-slider', {

// 	modules: [Pagination],

// 	wrapperClass: 'main-slider__wrapper',
// 	slideClass: 'main-slider__slide',

// 	pagination: {
// 		el: '.main-slider__pagination',
// 		clickable: true,
// 		type: 'bullets',
// 	},

// 	speed: 1200,
// 	spaceBetween: 0,
// 	direction: 'vertical',

// });