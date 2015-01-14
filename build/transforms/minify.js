var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');

module.exports = {
  js: function(t) {
    t.build(t.src(), uglify(),concat('bundle.min.js'), t.dest());
  },
  img: function(t) {
    t.build(t.src(), imagemin({
        progressive: true,
        optimizationLevel: 5,
        svgoPlugins: [{ removeViewBox: false }, { removeEmptyAttrs: false }]
       }), t.dest());
  }
};