var del = require('del');

module.exports = function(t) {
  del(t.path, t.done);
};