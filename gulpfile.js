//Присваиваем в переменную возможности плагинов
const { src, dest, watch, parallel, series } = require('gulp'); //прописываем в переменную какие функции необходимы и берём из gulp
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const del = require('del');
//const fileInclude = require('gulp-file-include');


/* --- Tasks - задачи ---*/
// Live server 
function browsersync() {
	browserSync.init({
		server: {
			baseDir: 'app/' // место которое будет отслеживать
		}
	});
}


// конвертация из scss в css
function styles() {
	return src('app/scss/style.scss') //ищем файлы, которые необходимы
		.pipe(scss({ outputStyle: 'compressed' }))//обрабатываем файлы с помощью плагина и сжимаем
		.pipe(concat('style.min.css'))// переименование файла со стилями
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 10 version'],
			grid: true
		}))
		.pipe(dest('app/css')) // переносим конвектрированные файлы в нужную папку
		.pipe(browserSync.stream()) // подклюяаем live server
}

// html имортёр
//function html() {
//	return src('app/**/[^_]*.html')
//		.pipe(fileInclude({
//			prefix: '@@',
//			basepath: '@file'
//		}))
//		.pipe(dest('dist/'))
//		.pipe(browserSync.stream()) // подклюяаем live server
//}

// сжатие js
function scripts() {
	return src([
		//'node_modules/jquery/dist/jquery.js',//подключение jquery
		//'node_modules/mixitup/dist/mixitup.js',//подключение mix-it-up
		//'node_modules/slick-carousel/slick/slick.js',//подключение slick
		//'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',//подключение fancybox
		'app/js/main.js'
	])
		.pipe(concat('main.min.js'))//объединям
		.pipe(uglify())
		.pipe(dest('app/js'))//сжимаем
		.pipe(browserSync.stream()) // подклюяаем live server
}

// сжатие картинок
function images() {
	return src('app/img/**/*')
		.pipe(imagemin([
			imagemin.gifsicle({ interlaced: true }),
			imagemin.mozjpeg({ quality: 75, progressive: true }),
			imagemin.optipng({ optimizationLevel: 5 }),
			imagemin.svgo({
				plugins: [
					{ removeViewBox: true },
					{ cleanupIDs: false }
				]
			})
		]))
		.pipe(dest('dist/img/'))
}

// слежение за проектом
function watching() {
	watch(['app/scss/**/*.scss'], styles)// следит за всеми папками и файлами с расширением scss и запускает styles
	watch(['app/js/main.js', '!app/js/main.min.js'], scripts)// следит за main.js но не за main.min.js и запускает scripts
	watch(['app/*.html']).on('change', browserSync.reload)
}

// Очистка папки dist
function cleanDist() {
	return del('dist')
}


// Билд
function build() {
	return src([
		'app/css/style.min.css',
		'app/js/main.min.js',
		'app/fonts/**/*',
		'app/lib/**/*',
		'app/*.html',
	], { base: 'app' })
		.pipe(dest('dist'))
}


/*--- Запуск ---*/
exports.styles = styles; // выполняем задачу styles
exports.watching = watching;//выполняем задачу watching
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;
//exports.html = html;


// запуск build-a
exports.build = series(cleanDist, images, build);
// запуск по default-у
exports.default = parallel(styles, scripts, browsersync, watching);//html