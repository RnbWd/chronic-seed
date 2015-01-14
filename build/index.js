var chron = require('chronic');
// non-ideal to require transforms this way, I use 6to5-node locally and index the transforms folder for single-line import {bundle, cssmin, etc.} from './transforms'  
var bundle = require('./transforms/bundle');
var cssmin = require('./transforms/cssmin');
var del = require('./transforms/del');
var es6to5 = require('./transforms/es6to5');
var html = require('./transforms/html');
var listen = require('./transforms/listen');
var minify = require('./transforms/minify');
var prebundle = require('./transforms/prebundle');
var scss = require('./transforms/scss');

chron('default', chron
  .once('html', 'scss', 'img', 'bundle'),
  listen);

chron('html', chron
  .path('./src/html/index.html').watch('./src/html/**') 
  .dest('./public'),
  html)

chron('scss', chron
  .path('./src/scss/style.scss')
  .dest('./public/css')
  .watch('./src/scss/**'), // it's okay to switch up the order (src,dest,watch) a little bit
  scss);

chron('del', chron
  .path('./src/.js', './public/js'),
  del);

chron('es6', chron
  .after('del') // same as .once
  .path('./src/es6/**')
  .dest('./src/.js'),
  es6to5);

chron('bundle', chron
  .follow('es6') // same as .once
  .path('./src/.js/main.js', 'bundle.js')
  .watch('./src/es6/**')
  .dest('./public/js'),
  bundle);

chron('img', chron
  .path('./src/img/**')
  .dest('./public/img'),
  minify.img);