'use strict';

var gulp = require('gulp');
var crisper = require('gulp-crisper');
/**
 * Make all bower_components CSP ready
 */
gulp.task('crisper-bower', function() {
  gulp.src('bower_components/**/*.html')
    .pipe(crisper({
      scriptInHead: false,
      onlySplit: false,
      alwaysWriteScript: false
    }))
    .pipe(gulp.dest('bower_components/'));
});
