import dartSass from "sass"; // сам препроцессор
import gulpSass from "gulp-sass"; // плагин для запуска препроцессора
import rename from "gulp-rename"; // плагин для того, чтобы файл scss переименовывался в формат css
import cleanCss from "gulp-clean-css"; // Сжатие CSS файла
import webpcss from "gulp-webpcss"; // Вывод WEBP изображений
import autoprefixer from "gulp-autoprefixer"; // Добавление вендорных префикосв для кроссбраузерности
import groupCssMediaQueries from "gulp-group-css-media-queries"; // Группировка медиа-запросов


const sass = gulpSass(dartSass);

export const scss = () => {
	return app.gulp.src(app.path.src.scss, { sourcemaps: true })
		.pipe(app.plugins.plumber( // Обработка ошибок
			app.plugins.notify.onError({ // Уведомление об ошибках 
				title: "SCSS",
				message: "Error: <%= error.message %>"
			})
		))
		.pipe(app.plugins.replace(/@img\//g, '../img/')) // изменяться в финальном файле алиаса @img на понятный браузеру путь
		.pipe(sass({
			outputStyle: 'expanded',
		}))
		.pipe(webpcss( // Не запускается без конвертора webp-converter@2.2.3, который нужно установить
			{
				webpClass: ".webp", // Если браузер поддерживает webp изображения, то будет выводится такой класс
				webpClass: "",
				nowebpClass: ".no-webp" // Если не поддерживает - такой класс
			}
		))
		.pipe(groupCssMediaQueries())
		.pipe(autoprefixer({
			grid: true,
			overrideBrowserslist: ["last 3 versions"], // Количество поддерживаемых версий браузера. От самой современной до -3 версий назад
			cascade: true
		}))
		// Закомментировать, если не нужен не сжатый дубликат файла стилей (Если нужен только .min.css)
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(cleanCss()) // Сжатие CSS
		.pipe(rename({
			extname: '.min.css'
		}))
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browsersync.stream());
}

// sourcemaps - карта исходников
// файл стилей будет собран из частей (нескольких файлов стилей)
// карта позволяет показать, стиль блока в какой именно части был описан