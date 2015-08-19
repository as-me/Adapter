var browserify = require('gulp-browserify');
var gulp = require('gulp');
var gutil = require('gulp-util');
var rename = require('gulp-rename');


gulp.task('browserify', function () {
    var production = gutil.env.type === 'production';
    console.log(gutil.env.type);

    gulp.src(['index.js'], {
        read: false
    })

    // Browserify, and add source maps if this isn't a production build
    .pipe(browserify({
        debug: !production,
        transform: ['reactify'],
        extensions: ['.jsx']
    }))

    .on('prebundle', function (bundler) {
        // Make React available externally for dev tools
        bundler.require('react');
        bundler.require('d3');
        bundler.require('d3chart');
        bundler.require('weavecore');
    })

    // Rename the destination file
    .pipe(rename('adapter.js'))

    // Output to the build directory
    .pipe(gulp.dest('build/'));
});
