// Require Gulp first!
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    eslint = require('gulp-eslint'),
    browserSync = require('browser-sync').create();

gulp.task('scripts', function(){
  gulp.src('./js/*.js') // What files do we want gulp to consume?
    .pipe(uglify()) // Call the uglify function on these files
    .pipe(rename({ extname: '.min.js' })) // Rename the uglified file
    .pipe(gulp.dest('./build/js')) // Where do we put the result?
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    }); //end of browserSync init

    gulp.watch('./build/js/*.js').on('change', browserSync.reload);
}); //end of gulptask browsersync

// gulp watch things
gulp.task('watch', function() {
   gulp.watch('./js/*.js', ['scripts']);
});

gulp.task('lint', () => {
    return gulp.src(['./js/*.js','!node_modules/**'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['lint', 'watch', 'browser-sync']);