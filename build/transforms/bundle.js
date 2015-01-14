var browserify = require('browserify');
var livereload = require('gulp-livereload');

module.exports = function(t) {
  console.log(t.path);
  var b = browserify({debug: true});
  b.add(t.path[0]);
  var bundle = b.bundle().on('error', console.log);
  var source = t.source(t.path[1]);
  t.build(bundle, source, t.dest());
};