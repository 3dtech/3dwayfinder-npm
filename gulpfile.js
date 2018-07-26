var gulp = require('gulp');
gulp.download = require('gulp-download-stream');

var src = [
    'http://static.3dwayfinder.com/shared/js/minified/frak-stable.min.js',
    'http://static.3dwayfinder.com/js/dist/3d/latest/Wayfinder3D.min.js',
    'http://static.3dwayfinder.com/js/dist/2d/latest/Wayfinder2D.min.js',
    'http://static.3dwayfinder.com/shared/js/minified/WayfinderUI.min.js',
    'http://static.3dwayfinder.com/shared/js/minified/BasicUI.min.js'
];

gulp.task('default', function() {
    gulp.start('download');
});

gulp.task('download', function() {
    gulp.download(src)
    .pipe(gulp.dest('assets/'));
});