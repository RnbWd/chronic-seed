# chronic-seed

This is literally the tip of the iceberg... example build folder for [chronic](https://github.com/codingalchemy/chronic)

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
```

To watch files and rebuild everything (watches files in `chron.watch` for all tasks running): 
```bash
$ node build -w
```

To watch files rebuild incrementally (`livereload` is more efficient this way)

```bash
$ node build html scss bundle -w
```

That's it! 

## License

MIT


