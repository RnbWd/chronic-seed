# chronic-seed

## Example Project

This is literally the tip of the iceberg... but also my current dev environment :)

**First (if you haven't already):**

```bash

$ git clone https://github.com/codingalchemy/chronic-seed.git
$ cd chronic-seed
$ npm install 
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


