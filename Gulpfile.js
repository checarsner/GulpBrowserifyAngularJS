var gulp = require('gulp'),
	gutil = require('gulp-util'),
	jshint = require('gulp-jshint'),
	browserify = require('gulp-browserify'),
	concat = require('gulp-concat'),
	clean = require('gulp-clean');

gulp.task('lint', function() {
	gulp.src('./app/scripts/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('browserify', function() {
	gulp.src(['app/scripts/main.js'])
		.pipe(browserify({
			insertGlobals: true,
			debug: true
		}))
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('watch', ['lint'], function() {
	gulp.watch(['app/scripts/*.js', 'app/scripts/**/*.js'], ['lint', 'browserify']);
});