var htmlInclude = require('gulp-html-tag-include');
var livereload = require('gulp-livereload');

module.exports = function (t) {
  t.build(t.src(), htmlInclude(), t.dest().pipe(livereload()));
};