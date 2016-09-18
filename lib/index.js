"use strict";

const iterateObject = require("iterate-object")
    , regexEscape = require("regex-escape")
    ;

const DECODE_MAP = require("./character-map")
const ENCODE_MAP = {};

iterateObject(DECODE_MAP, (value, name) => {
    ENCODE_MAP[value] = name;
});

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
        input = input || "";
        let output = input;

        iterateObject(DECODE_MAP, (value, name) => {
            output = output.replace(new RegExp (regexEscape(name), "g"), value)
        });

        return output;
    }

    /**
     * encode
     * Encodes a string.
     *
     * @name encode
     * @function
     * @param {} input The string that must be encoded.
     * @returns {String} The encoded string.
     */
  , encode: function (input) {

        input = input || "";
        let output = "";

        for (let i = 0; i < input.length; ++i) {
            let c = input.charAt(i);
            output += (ENCODE_MAP[c] || c);
        }

        return output;
    }
};
