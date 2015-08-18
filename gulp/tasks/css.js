var gulp = require('gulp');
var css = require('gulp-minify-css');



gulp.task('css', function () {
    return gulp.src(config.scriptFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
