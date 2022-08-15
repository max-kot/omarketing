/*$(function () {
	$('.gallery__slider').slick({
		infinite: true,
		speed: 800,
		slidesPerRow: 3,
		rows: 2,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/gallery/prev.svg" alt="Previos"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/gallery/next.svg" alt="Next"></button>',
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesPerRow: 2,
					rows: 2,
				}
			},
			{
				breakpoint: 481,
				settings: {
					slidesPerRow: 1,
					rows: 1,
				}
			},
		],
	});

})*/


/*---Menu---*/
const menuBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.header__menu');
const body = document.querySelector('body');
const menuLinks = document.querySelectorAll('.menu a')

menuBtn.addEventListener('click', function () {
	body.classList.toggle('no-scroll');
	menu.classList.toggle('active');
	menuBtn.classList.toggle('active');

})
menuLinks.forEach(function (link) {
	link.addEventListener('click', function () {
		menu.classList.remove('active');
		body.classList.remove('no-scroll');
		menuBtn.classList.remove('active');
	})
})

/*-- Video btn 
const videoBtn = document.querySelector('.about__play-btn');
const videoBox = document.querySelector('.about__video-box');
const videoBtnIcon = document.querySelector('.about__play-btn img');
const videoOverlay = document.querySelector('.about__video-overlay')

videoBtn.addEventListener('click', function () {
	// оверлэй c кнопкой исчезает при отводе мыши от видео, а появляется при поялении мыши на видео
	function toggleOverlay(event) {
		if (event.type === 'mouseleave') {
			videoOverlay.classList.add('hidden');
		} else {
			videoOverlay.classList.remove('hidden');
		}
	};

	if (videoBox.paused) {
		videoBox.play();
		videoBtnIcon.src = 'img/about/pause.svg'; // меняет картинку на картинку с паузой
		videoOverlay.onmouseleave = toggleOverlay; // события мыши при покидании мыши видео
		videoOverlay.onmouseenter = toggleOverlay; // события мыши при появлении мыши на видео

	} else {
		videoBox.pause();
		videoBtnIcon.src = 'img/about/play.svg'; // меняет картинку на картинку с плэем
		videoBox.onmouseleave = null; // отменяет событие
		videoBox.onmouseenter = null; // отменяет событие
	}

})---*/

var mixer = mixitup('.portfolio-grid');