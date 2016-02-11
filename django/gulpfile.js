var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var gzip = require('gulp-gzip');
var livereload = require('gulp-livereload');
var lr = require('tiny-lr');
var server = lr()

var gzip_options = {
	threshold: '1kb',
	gzipOptions: {
		level: 9
	}
};

function errorHandler (e) {
	console.log(error.toString());
	this.emit('end');
}

/* Compile sass */
gulp.task('sass', function() {

	return gulp.src(['static/_scss/*.scss', 'static/_scss/*.sass'])
		.pipe(sass()).on('e', errorHandler)
		.pipe(prefix(['last 10 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(gulp.dest('static/css/css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('static/css'))
		.pipe(gzip(gzip_options))
		.pipe(gulp.dest('static/css/css'))
		.pipe(livereload(server));
});


/* Watch Changes */
gulp.task('watch', function() {
	livereload.listen(35729, function(err) {
		if (err) return gutil.log(err);
	});
	/* Run 'sass' task on any sass files */
	gulp.watch(['static/_scss/**'], ['sass']);
	/* Live-reload when any templates or static change */
	gulp.watch(['static/_scss/**', 'static/js/**', 'templates/**']).on('change', livereload.changed);
});

gulp.task('default', ['sass', 'watch']);