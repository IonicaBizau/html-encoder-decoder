// dependencies
var HTMLDecoderEncoder = require("../index")
  , encoded = null
  ;

console.log(HTMLDecoderEncoder.encode(encoded = "Copyright © Ionică Bizău <bizauionica@gmail.com>"));
console.log(HTMLDecoderEncoder.decode(encoded));
