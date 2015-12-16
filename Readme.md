
# color-sensor

[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

use the ev3 color sensor

## Installation

    $ npm install ev3-js-color-sensor

## Usage

```js
var ColorSensor = require('ev3-js-color-sensor')

```

## API

### ColorSensor(port)

- `port` - number of the port that the color sensor is plugged in to.

**Returns:** instance of ColorSensor

### .reflected
Sets the sensor to reflected light intensity mode and gets a value.

**Returns:** number between 0 and 100

### .color
Sets the sensor to color mode and gets a value.

**Returns:** color value between 0 and 7

number | color
---|---
0 | no color
1 | black
2 | blue
3 | green
4 | yellow
5 | red
6 | white
7 | brown

## License

MIT

[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/ev3-js-color-sensor.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ev3-js-color-sensor
