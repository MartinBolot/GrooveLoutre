var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    reactify = require('reactify');
    
gulp.task('js', function(){
    browserify('./public/javascripts/ReactApp.js')
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('public/javascripts/build/'));
});
gulp.task('watch', function() {
    gulp.watch("public/javascripts/*.js", ["js"]);
    gulp.watch("public/javascripts/*.jsx", ["js"]);
    gulp.watch("public/javascripts/components/*.js", ["js"]);
    gulp.watch("public/javascripts/components/*.jsx", ["js"]);
});

gulp.task('nodemon', function(cb) {
  var nodemon = require('gulp-nodemon');

  // We use this `called` variable to make sure the callback is only executed once
  var called = false;
  return nodemon({
    script: 'bin/www'
    ,watch: ['app.js', 'public/**/*.*']
  })
      /*
    .on('start', function onStart() {
      if (!called) {
        cb();
      }
      called = true;
    })
    .on('restart', function onRestart() {
  
      // Also reload the browsers after a slight delay
      setTimeout(function reload() {
        browserSync.reload({
          stream: false
        });
      }, 500);
    });
      */
});

gulp.task('default', ['js','nodemon','watch']);