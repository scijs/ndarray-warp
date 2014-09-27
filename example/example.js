//Load input image
var lena = require("luminance")(require("lena"))

var imshow = require("ndarray-imshow")

//Allocate storage for result
var result = require("zeros")([512, 512])

//Apply warp
require("../warp.js")(result, lena, function(out, inp) {
  var dx = inp[0] - 256
  var dy = inp[1] - 256
  var r  = Math.sqrt(dx * dx + dy * dy)
  var theta = Math.atan2(dy, dx)
  
  out[0] = 0.9 * r * Math.cos(theta + 0.01 * r) + 256
  out[1] = 0.7 * r * Math.sin(theta + 0.01 * r) + 256
})

//Save the result
imshow(result)