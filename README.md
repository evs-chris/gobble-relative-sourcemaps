# gobble-relative-sourcemaps

Adjust the paths in sourcemaps to be relative to the project root instead of absolute with gobble paths.

## Installation

First, you need to have gobble installed - see the [gobble readme](https://github.com/gobblejs/gobble) for details. Then, simply reference `'relative-sourcemap'` in a `transform`, and gobble will take care of getting the plugin installed.

## Usage

relative-sourcemaps is a file transform that will be run on any `.map` files at the stage in the gobble pipeline in which it is called. You probably want to insert it somewhere near the end.

```js
gobble(lastStep).transform('relative-sourcemaps');
```

### Options
* `prefix` - defaults to `''` - a new prefix to apply e.g. to make `$projectDir/foo.js` become `$prefix/foo.js` in the sourcemap

## License

Copyright (c) 2014 Chris Reeves. Released under an [MIT license](https://github.com/evs-chris/gobble-giblets/blob/master/LICENSE.md).
