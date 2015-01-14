var browserify = require('browserify');
var livereload = require('gulp-livereload');

module.exports = function(t) {
  var b = browserify({debug: true});
  b.add(t.path[0]);
  var bundle = b.bundle();
  var source = t.source(t.path[1]);
  t.build(bundle, source, t.dest().pipe(livereload()));
};