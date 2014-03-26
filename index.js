/**
 *
 *  HTML Encoder / Decoder
 *  Converts characters to their corresponding HTML Entities",
 *
 *  Licensed under MIT license
 *
 *  The MIT License (MIT)
 *
 *  Copyright (c) 2014 Ionică Bizău
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *
 */

// get character map
var CharacterMap = require("./character-map");

/**
 * private: encodeCharacter
 *  This function returns the encoded character using CharacterMap
 *
 *  Arguments
 *    @input: string that must be encoded
 *
 *  Returns
 *    The encoded character or @input
 *
 */
function encodeCharacter (input) {
    for (var i = 0; i < CharacterMap.length; ++i) {
        var cCharacterMapObj = CharacterMap[i];
        if (cCharacterMapObj.decoded === input) {
            return cCharacterMapObj.encoded;
        }
    }
    return input;
}

// constructor
var HTMLEncoderDecoder = {

    /**
     *  HTMLEncoderDecoder#decode
     *    Decodes an encoded string.
     *
     *    Arguments
     *      @input: the encoded string
     *
     *    Returns
     *      The decoded string.
     *
     */
    decode: function (input) {

        // force input to be a string
        var output = String(input);

        // each character object in charactermap
        for (var i = 0; i < CharacterMap.length; ++i) {
            output = output.replace(new RegExp (CharacterMap[i].encoded, "g"), CharacterMap[i].decoded)
        }

        return output;
    }

    /**
     *  HTMLEncoderDecoder#encode
     *    Encodes a string.
     *
     *    Arguments
     *      @input: the string that must be encoded
     *
     *    Returns
     *      The encoded string.
     *
     */
  , encode: function (input) {

        // force input to be a string
        input = String(input);
        var output = "";

        // each character
        for (var c in input) {

            // apend encoded character to output
            output += encodeCharacter(input[c]);
        }

        // and return the output
        return output;
    }
};

module.exports = HTMLEncoderDecoder
