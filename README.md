# html-encoder-decoder [![Support this project][donate-now]][paypal-donations]

HTML Encoder / Decoder - Converts characters to their corresponding HTML Entities

## Installation

```sh
$ npm i --save html-encoder-decoder
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

 - [`jsfiddle`](https://bitbucket.org/IonicaBizau/node-jsfiddle#readme)

 - [`jsfiddle-api`](https://npmjs.com/package/jsfiddle-api)

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md