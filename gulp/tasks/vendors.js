var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');


var vendors = [
  'react',
    'd3',
    'd3chart',
    'weavecore'
];

gulp.task('vendors', function () {
    var stream = browserify({
        debug: false,
        require: vendors
    });

    stream.bundle()
        .pipe(source('vendors.js'))
        .pipe(gulp.dest('build/js'));

    return stream;
});
