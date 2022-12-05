import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const images = () => {
	return app.gulp.src(app.path.src.images)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "JS",
				message: "Error: <%= error.message %>"
			})
		))
		.pipe(app.plugins.newer(app.path.build.images)) // Проверяет папку с изображениями, чтобы понять, добавились/изменились ли изображения в ней или нет
		.pipe(webp())
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.gulp.src(app.path.src.images)) // Получение доступа к папке с изображениями
		.pipe(imagemin({// Задача, которая сжимает картинки в папке
			progressive: true,
			svgoPlugins: [{ removeViewBox: false }],
			interlaced: true,
			optimizationLevel: 3 // от 0 до 7 (насколько сильно нужно сжимать изображения)
		}))
		.pipe(app.gulp.dest(app.path.build.images)) // Добавление оптимизированных картинок в папку с результатом
		.pipe(app.gulp.src(app.path.src.svg)) // Получение доступа к папке с svg изображениями
		.pipe(app.gulp.dest(app.path.build.images)) // Копируем эти svg в папку с изображением
		.pipe(app.plugins.browsersync.stream());
}