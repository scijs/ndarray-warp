"use strict"

var ndarray = require("ndarray")
var warp = require("../warp.js")
var zeros = require("zeros")
var unpack = require("ndarray-unpack")

require("tape")("ndarray-warp", function(t) {

  var x = zeros([10, 10])
  x.set(5, 5, 1)
  
  var y = zeros([10, 10])

  warp(y, x, function(cy, cx) {
    cy[0] = 1.0 + cx[0]
    cy[1] = cx[0] + 0.5 * cx[1]
  })
  
  console.log(unpack(y))
  
  t.end()
})
