// Initialize all elements with carousel class.
const carousels = bulmaCarousel.attach('.carousel', options);

// To access to bulmaCarousel instance of an element
const element = document.querySelector('#carousel-demo');
if (element && element.bulmaCarousel) {
	// bulmaCarousel instance is available as element.bulmaCarousel
}


bulmaCarousel.attach('#carousel-demo', {
slidesToScroll: 1,
slidesToShow: 2,
navigation: true,
autoplay: true,
autoplaySpeed: 1000
});