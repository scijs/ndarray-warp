"use strict"

var ndarray = require("ndarray")
var warp = require("../warp.js")

require("tap").test("ndarray-warp", function(t) {

  var x = ndarray.zeros([10, 10])
  x.set(5, 5, 1)
  
  var y = ndarray.zeros([10, 10])

  warp(y, x, function(cy, cx) {
    cy[0] = 1.0 + cx[0]
    cy[1] = cx[0] + 0.5 * cx[1]
  })
  
  console.log(y.toString())
  
  t.end()
})
