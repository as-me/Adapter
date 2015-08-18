var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');


var vendors = [
  'react',
    'd3chart',
    'weavecore'
];




gulp.task('app', function () {
    var stream = browserify({
        entries: ['./src/index.js'],
        transform: [babelify],
        debug: true,
        extensions: ['.jsx'],
        fullPaths: false
    });

    vendors.forEach(function (vendor) {
        stream.external(vendor);
    });

    return stream.bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('build/js'));

});
