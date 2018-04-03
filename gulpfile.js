var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
  console.log("Hooray!");
});

gulp.task('html', function() {
  console.log("Some more text");
});

gulp.task('styles', function() {
  console.log("Some SASS or PostCss");
});

gulp.task('watch', function() {

  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });
});
