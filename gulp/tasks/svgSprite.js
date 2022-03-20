import svgSprite from "gulp-svg-sprite";
import cheerio from "gulp-cheerio";
// import replace from "gulp-svg-sprite";

export const svgSpriteTask = () => {
	return app.gulp.src(`${app.path.src.svgicons}`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "SVG",
				message: "Error: <%= error.message %>"
			}))
		)
		// .pipe(svgSprite({
		// 	mode: {
		// 		stack: {
		// 			sprite: `../sprite.svg`,
		// 			// Создавать страницу с перечнем иконок
		// 			example: true
		// 		}
		// 	},
		// }
		// ))
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
		},
		parserOptions: {
			xmlMode: true
		}
    }))
    .pipe(app.plugins.replace('&gt;', '>'))
    .pipe(svgSprite({
			mode: {
				stack: {
					sprite: '../sprite.svg',
						// 			// Создавать страницу с перечнем иконок
					example: true
				}
			}
		}))
		.pipe(app.gulp.dest(`${app.path.build.images}`));
}