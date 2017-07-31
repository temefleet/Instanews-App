// Require Gulp first!
const gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    eslint = require('gulp-eslint'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    prettyError = require('gulp-prettyerror'),
    babel = require('gulp-babel');

// Gulp tasks below :)

// Gulp Scripts task ;)
gulp.task('scripts', ['lint'], function(){
  gulp.src('./js/*.js') // What files do we want gulp to consume?
    // Gulp Babel
    .pipe(babel({
        presets: ['es2015']
    }))
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

    gulp.watch(['build/css/*.min.css', 'build/js/*.js', 'index.html']).on('change', browserSync.reload);
}); //end of gulptask browsersync

// gulp watch things
gulp.task('watch', function() {
    gulp.watch('./sass/*.scss', ['sass']);
    gulp.watch('./js/*.js', ['scripts']);
});

// Gulp linting task for javascript yesiree
gulp.task('lint', () => {
    return gulp.src(['./js/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

// Gulp saaaasssss bitches
gulp.task('sass', function() {
   gulp.src('./sass/style.scss')
      .pipe(prettyError())
      .pipe(sass())
      .pipe(autoprefixer({
         browsers: ['last 2 versions']
       }))
      .pipe(gulp.dest('./build/css'))
      .pipe(cssnano())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('./build/css'));
});

gulp.task('default', ['watch', 'browser-sync']);