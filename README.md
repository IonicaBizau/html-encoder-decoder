HTML Decoder Encoder
====================

HTML Encoder / Decoder - Converts characters to their corresponding HTML Entities

## Installation

```sh
$ npm install html-decoder-encoder
```

## Example and testing

```js
// dependencies
var HTMLDecoderEncoder = require("html-encoder-decoder")
  , encoded = null
  ;

console.log(HTMLDecoderEncoder.encode(encoded = "Copyright © Ionică Bizău <bizauionica@gmail.com>"));
console.log(HTMLDecoderEncoder.decode(encoded));
```

Running this you will get:

```sh
$ npm test

> html-encoder-decoder@0.0.0 test /.../html-encoder-decoder
> node test/1.js

Copyright &copy; Ionic&#259; Biz&#259;u &lt;bizauionica@gmail.com&gt;
Copyright © Ionică Bizău <bizauionica@gmail.com>
```

## Methods

### `decode (@input)`
Decodes an encoded string.

#### Arguments
 - @input: the encoded string

#### Returns
The decoded string.

### `encode (@input)`
Encodes a string.

#### Arguments
 - @input: the string that must be encoded

#### Returns
The encoded string.

## Changelog

### `v0.1.0`
 - The initial release

## License
See LICENSE file.
