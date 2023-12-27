"use strict";

const HTMLDecoderEncoder = require("..");

let encoded = null;

console.log(encoded = HTMLDecoderEncoder.encode("Copyright © Foo Bar <foobar@example.com>"));
// => Copyright &#xA9; Foo Bar &#x3C;foobar@example.com&#x3E;


console.log(HTMLDecoderEncoder.decode(encoded));
// => Copyright © Foo Bar <foobar@example.com>;
