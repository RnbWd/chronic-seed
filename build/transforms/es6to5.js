var tap = require('gulp-tap');
var ext = require('gulp-ext');
var to5 = require('6to5');

module.exports = function (t) {
  t.build(t.src(), tap(es6ify), ext.replace('js'), t.dest());
}

function es6ify(file) {
  if (file.contents) {
    var opts = {
      experimental: true,
      blacklist: ['generators'],
      optional: ['coreAliasing', 'typeofSymbol', 'undefinedToVoid']
    }
    var res = to5.transform(file.contents.toString(), opts);
    file.contents = Buffer(res.code, 'utf8');
  }
 }