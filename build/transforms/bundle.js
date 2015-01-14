var browserify = require('browserify');
var livereload = require('gulp-livereload');

module.exports = function(t) {
  var b = browserify({debug: true});
  b.add(t.path[0]);
  var bundle = b.bundle().on('error', console.log);
  var source = t.source(t.path[1]);
  var dest = t.dest();
  if (t.params.watch) {
    dest.pipe(livereload());
  }
  t.build(bundle, source, dest);

  // helps sometimes
  // console.log(t.path);
  // console.log(t.params);
};