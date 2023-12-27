"use strict";

const iterateObject = require("iterate-object")
    , regexEscape = require("regex-escape")
    , he = require("he")
    ;


module.exports = {
    /**
     * decode
     * Decodes an encoded string.
     *
     * @name decode
     * @function
     * @param {String} input The encoded string.
     * @returns {String} The decoded string.
     */
    decode (input) {
        return he.decode(input);
    }

    /**
     * encode
     * Encodes a string.
     *
     * @name encode
     * @function
     * @param {String} input The string that must be encoded.
     * @returns {String} The encoded string.
     */
  , encode: function (input) {
        return he.encode(input);
    }
};
