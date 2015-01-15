var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');

module.exports = function(t) {
  var dest = t.dest();
  if (t.params.watch) {
    dest.pipe(livereload());
  }
  t.build(t.src(), sass(), autoprefixer(), dest);
};