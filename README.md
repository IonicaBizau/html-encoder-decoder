# html-encoder-decoder [![Support this project][donate-now]][paypal-donations]

HTML Encoder / Decoder - Converts characters to their corresponding HTML Entities

## Installation

```sh
$ npm i -g html-encoder-decoder
```

## Example

```js
// dependencies
var HTMLDecoderEncoder = require("../index")
  , encoded = null
  ;

console.log(encoded = HTMLDecoderEncoder.encode("Copyright © Ionică Bizău <bizauionica@gmail.com>"));
// => Copyright &copy; Ionic&#259; Biz&#259;u &lt;bizauionica@gmail.com&gt;

console.log(HTMLDecoderEncoder.decode(encoded));
// => Copyright © Ionică Bizău <bizauionica@gmail.com>
```

## Documentation

### `decode(input)`
Decodes an encoded string.

#### Params
- **String** `input`: The encoded string.

#### Return
- **String** The decoded string.

### `encode({})`
Encodes a string.

#### Params
- **** `{}`: input The string that must be encoded.

#### Return
- **String** The encoded string.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`jsfiddle`](https://npmjs.com/package/jsfiddle)

 - [`jsfiddle-api`](https://npmjs.com/package/jsfiddle-api)

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2014

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md