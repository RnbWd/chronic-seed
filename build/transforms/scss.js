var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');

module.exports = function(t) {
  t.build(t.src(), sass(), autoprefixer(), t.dest().pipe(livereload()));
};