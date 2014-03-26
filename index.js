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

/**
 * TODO
 *
 */
var HTMLEncoderDecoder = {
    decode: function (input) {

    }
    /**
     *  TODO
     *
     */
  , encode: function (input) {

        // force input to be a string
        input = String(input);
        var output = "";

        // each character
        for (var c in input) {

            // apend encoded character to output
            output += encodeCharacter[c];
        }

        // and return the output
        return output;
    }
};

module.exports = HTMLEncoderDecoder
