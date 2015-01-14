# chronic-seed

This is literally the tip of the [iceberg...](https://github.com/codingalchemy/chronic)

See [build](https://github.com/codingalchemy/chronic-seed/tree/master/build)

```bash

$ git clone https://github.com/codingalchemy/chronic-seed.git
$ cd chronic-seed
$ npm install 
$ node build
```

## Usage

To run `default` task once: 
```bash
$ node build
  default  Running...
  html     Running...
  scss     Running...
  img      Running...
  bundle   Running...
  es6      Running...
  del      Running...
  html     Completed in 25ms
  del      Completed in 58ms
  scss     Completed in 103ms
  es6      Completed in 111ms
  bundle   Completed in 426ms
[13:31:05] gulp-imagemin: Minified 2 images (saved 1.1 kB - 1.3%)
  img      Completed in 655ms
  default  Completed in 659ms
```

To watch files and rebuild everything (watches files in `chron.watch` for all tasks running): 
```bash
$ node build -w
```

To watch files and rebuild incrementally (`livereload` is more efficient this way)

```bash
$ node build html scss bundle -w
```

Or individually
```bash
$ node build del
  del      Running...
  del      Completed in 5ms
$ node build img
  img      Running...
[13:28:40] gulp-imagemin: Minified 2 images (saved 1.1 kB - 1.3%)
  img      Completed in 319ms
$ node build es6
  es6      Running...
  del      Running...
  del      Completed in 3ms
  es6      Completed in 31ms
$ node build bundle -w
  bundle   Running...
  es6      Running...
  del      Running...
  del      Completed in 5ms
  es6      Completed in 33ms
  watching: bundle
  bundle   Completed in 291ms
  changed: src/es6/main.es6
  bundle   Running...
  es6      Running...
  del      Running...
  del      Completed in 1ms
  es6      Completed in 10ms
  bundle   Completed in 159ms
```
That's it! 

## License

MIT


