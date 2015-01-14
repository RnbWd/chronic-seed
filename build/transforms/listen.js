var livereload = require('gulp-livereload');
var once = require('once');
var listen =  once(livereload.listen);

module.exports = function(t) {
  if (t.params.watch) {
   listen();
  }
  t.done();
}