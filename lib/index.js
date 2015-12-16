/**
 * Imports
 */

var inherit = require('component-inherit')
var devices = require('ev3-js-devices')
var Device = require('ev3-js-device')

/**
 * Expose ColorSensor
 */

module.exports = ColorSensor['default'] = ColorSensor

/**
 * colorSensor
 */

function ColorSensor (port) {
  Device.call(this, devices(port))
}

inherit(ColorSensor, Device)

Object.defineProperties(ColorSensor.prototype, {
  color: {
    get: getColor
  },
  reflected: {
    get: getReflected
  }
})

function getColor () {
  this.write('mode', 'COL-COLOR')
  this.read('value0')
}

function getReflected () {
  this.write('mode', 'COL-REFLECT')
  this.read('value0')
}
