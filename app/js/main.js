$(function () {
	$('.blog-slider').slick({
		speed: 800,
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.8297 18.6013H5.12463L19.3955 32.942L17.7539 34.5917L0.680359 17.4347L17.7562 0.27533L19.3979 1.925L5.12463 16.268H34.8297V18.6013Z" fill="#333333"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.1494 17.4347L17.0735 34.594L15.4319 32.9443L29.7028 18.6037H0V16.2703H29.7051L15.4319 1.925L17.0735 0.27533L34.1494 17.4347Z" fill="#333333"/></svg></button>',
	});
})


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