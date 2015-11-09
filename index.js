// Dependencies
var CharacterMap = require("./character-map");

/*!
 * encodeCharacter
 * This function returns the encoded character using CharacterMap
 *
 * @name encodeCharacter
 * @function
 * @param {String} input A string that must be encoded.
 * @return {String} The encoded input.
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
     * decode
     * Decodes an encoded string.
     *
     * @name decode
     * @function
     * @param {String} input The encoded string.
     * @return {String} The decoded string.
     */
    decode: function (input) {
        var output = String(input);

        for (var i = 0; i < CharacterMap.length; ++i) {
            output = output.replace(new RegExp (CharacterMap[i].encoded, "g"), CharacterMap[i].decoded)
        }

        return output;
    }

    /**
     * encode
     * Encodes a string.
     *
     * @name encode
     * @function
     * @param {} input The string that must be encoded.
     * @return {String} The encoded string.
     */
  , encode: function (input) {

        input = String(input);
        var output = "";

        for (var c in input) {
            output += encodeCharacter(input[c]);
        }

        return output;
    }
};

module.exports = HTMLEncoderDecoder
