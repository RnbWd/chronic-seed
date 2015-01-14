# chronic-seed

This is literally the tip of the iceberg... example build folder for [chronic](https://github.com/codingalchemy/chronic)

```bash

$ git clone https://github.com/codingalchemy/chronic-seed.git
$ cd chronic-seed
$ npm install 
$ node build
```

## Usage

To build everything once: 
```bash
$ node build
```

To watch files and rebuild everything (anything you put in `chron.watch`): 
```bash
$ node build -w
```

To watch rebuild individual tasks (`livereload` is more efficient this way)

```bash
$ node build html scss bundle -w
```

That's it! 

## License

MIT


