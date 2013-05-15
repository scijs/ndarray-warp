//Load input image
var lena = require("luminance")(require("lena"))

//Allocate storage for result
var result = require("ndarray").zeros([512, 512])

//Apply warp
require("../warp.js")(result, lena, function(out, inp) {
  var dx = inp[0] - 256
  var dy = inp[1] - 256
  var r  = Math.sqrt(dx * dx + dy * dy)
  var theta = Math.atan2(dy, dx)
  
  out[0] = r * Math.cos(theta + 0.01 * r)
  out[1] = r * Math.sin(theta + 0.01 * r)
})

//Save the result
require("save-pixels")(result, "png").pipe(process.stdout)