var htmlInclude = require('gulp-html-tag-include');
var livereload = require('gulp-livereload');

module.exports = function (t) {
  var dest = t.dest();
  if (t.params.watch) {
    dest.pipe(livereload());
  }
  t.build(t.src(), htmlInclude(), dest);
};