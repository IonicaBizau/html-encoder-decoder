// dependencies
var HTMLDecoderEncoder = require("../index")
  , encoded = null
  ;

console.log(encoded = HTMLDecoderEncoder.encode("Copyright © Ionică Bizău <bizauionica@gmail.com>"));
// => Copyright &copy; Ionic&#259; Biz&#259;u &lt;bizauionica@gmail.com&gt;

console.log(HTMLDecoderEncoder.decode(encoded));
// => Copyright © Ionică Bizău <bizauionica@gmail.com>
