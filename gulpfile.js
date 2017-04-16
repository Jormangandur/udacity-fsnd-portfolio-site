var gulp = require('gulp')
var $ = require('gulp-load-plugins')();

gulp.task('default', function() {
	gulp.src(['images_source/*', '!images_source/feature', '!images_source/fixed'])
		.pipe($.responsive({
			'*.*': [{
				width: 960,
				rename: {
					suffix: '-960_1x'
				},
			}, {
				width: 1920,
				rename: {
					suffix: '-1920_2x'
				},
			}, {
				rename: {
					suffix: '-original'
				},
			}],
		}, {
			quality: 70,
			// Use progressive (interlace) scan for JPEG and PNG output
			progressive: true,
			// Strip all metadata
			withMetadata: false,
		}))
		.pipe(gulp.dest('images'));
	gulp.src('images_source/feature/*')
		.pipe($.responsive({
			'*.*': [{
				width: 550,
				rename: {
					suffix: '_feature-550_1x'
				},
			}, {
				width: 1100,
				rename: {
					suffix: '_feature-1100_2x'
				},
			}, {
				rename: {
					suffix: '-original'
				},
			}],
		}, {
			errorOnEnlargement: false,
			quality: 70,
			// Use progressive (interlace) scan for JPEG and PNG output
			progressive: true,
			// Strip all metadata
			withMetadata: false,
		}))
		.pipe(gulp.dest('images'));

	gulp.src('images_source/fixed/*')
		.pipe(gulp.dest('images'));

});
