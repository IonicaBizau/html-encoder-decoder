/**
 *  An array containing objects that contain encoded and decoded characters
 *
 */
var CharacterMap = [
    {
        encoded: "&quot;"
      , decoded: "\""
    }
  , {
        encoded: "&apos;"
      , decoded: "'"
    }
  , {
        encoded: "&amp;"
      , decoded: "&"
    }
  , {
        encoded: "&lt;"
      , decoded: "<"
    }
  , {
        encoded: "&gt;"
      , decoded: ">"
    }
  , {
        encoded: "&iexcl;"
      , decoded: "¡"
    }
  , {
        encoded: "&cent;"
      , decoded: "¢"
    }
  , {
        encoded: "&pound;"
      , decoded: "£"
    }
  , {
        encoded: "&curren;"
      , decoded: "¤"
    }
  , {
        encoded: "&yen;"
      , decoded: "¥"
    }
  , {
        encoded: "&brvbar;"
      , decoded: "¦"
    }
  , {
        encoded: "&sect;"
      , decoded: "§"
    }
  , {
        encoded: "&uml;"
      , decoded: "¨"
    }
  , {
        encoded: "&copy;"
      , decoded: "©"
    }
  , {
        encoded: "&ordf;"
      , decoded: "ª"
    }
  , {
        encoded: "&laquo;"
      , decoded: "«"
    }
  , {
        encoded: "&not;"
      , decoded: "¬"
    }
  , {
        encoded: "&reg;"
      , decoded: "®"
    }
  , {
        encoded: "&macr;"
      , decoded: "¯"
    }
  , {
        encoded: "&deg;"
      , decoded: "°"
    }
  , {
        encoded: "&plusmn;"
      , decoded: "±"
    }
  , {
        encoded: "&sup2;"
      , decoded: "²"
    }
  , {
        encoded: "&sup3;"
      , decoded: "³"
    }
  , {
        encoded: "&acute;"
      , decoded: "´"
    }
  , {
        encoded: "&micro;"
      , decoded: "µ"
    }
  , {
        encoded: "&para;"
      , decoded: "¶"
    }
  , {
        encoded: "&middot;"
      , decoded: "·"
    }
  , {
        encoded: "&cedil;"
      , decoded: "¸"
    }
  , {
        encoded: "&sup1;"
      , decoded: "¹"
    }
  , {
        encoded: "&ordm;"
      , decoded: "º"
    }
  , {
        encoded: "&raquo;"
      , decoded: "»"
    }
  , {
        encoded: "&frac14;"
      , decoded: "¼"
    }
  , {
        encoded: "&frac12;"
      , decoded: "½"
    }
  , {
        encoded: "&frac34;"
      , decoded: "¾"
    }
  , {
        encoded: "&iquest;"
      , decoded: "¿"
    }
  , {
        encoded: "&times;"
      , decoded: "×"
    }
  , {
        encoded: "&divide;"
      , decoded: "÷"
    }
  , {
        encoded: "&Agrave;"
      , decoded: "À"
    }
  , {
        encoded: "&Aacute;"
      , decoded: "Á"
    }
  , {
        encoded: "&Atilde;"
      , decoded: "Ã"
    }
  , {
        encoded: "&Auml;"
      , decoded: "Ä"
    }
  , {
        encoded: "&Aring;"
      , decoded: "Å"
    }
  , {
        encoded: "&AElig;"
      , decoded: "Æ"
    }
  , {
        encoded: "&Ccedil;"
      , decoded: "Ç"
    }
  , {
        encoded: "&Egrave;"
      , decoded: "È"
    }
  , {
        encoded: "&Eacute;"
      , decoded: "É"
    }
  , {
        encoded: "&Ecirc;"
      , decoded: "Ê"
    }
  , {
        encoded: "&Euml;"
      , decoded: "Ë"
    }
  , {
        encoded: "&Igrave;"
      , decoded: "Ì"
    }
  , {
        encoded: "&Iacute;"
      , decoded: "Í"
    }
  , {
        encoded: "&Iuml;"
      , decoded: "Ï"
    }
  , {
        encoded: "&ETH;"
      , decoded: "Ð"
    }
  , {
        encoded: "&Ntilde;"
      , decoded: "Ñ"
    }
  , {
        encoded: "&Ograve;"
      , decoded: "Ò"
    }
  , {
        encoded: "&Oacute;"
      , decoded: "Ó"
    }
  , {
        encoded: "&Ocirc;"
      , decoded: "Ô"
    }
  , {
        encoded: "&Otilde;"
      , decoded: "Õ"
    }
  , {
        encoded: "&Ouml;"
      , decoded: "Ö"
    }
  , {
        encoded: "&Oslash;"
      , decoded: "Ø"
    }
  , {
        encoded: "&Ugrave;"
      , decoded: "Ù"
    }
  , {
        encoded: "&Uacute;"
      , decoded: "Ú"
    }
  , {
        encoded: "&Ucirc;"
      , decoded: "Û"
    }
  , {
        encoded: "&Uuml;"
      , decoded: "Ü"
    }
  , {
        encoded: "&Yacute;"
      , decoded: "Ý"
    }
  , {
        encoded: "&THORN;"
      , decoded: "Þ"
    }
  , {
        encoded: "&szlig;"
      , decoded: "ß"
    }
  , {
        encoded: "&agrave;"
      , decoded: "à"
    }
  , {
        encoded: "&aacute;"
      , decoded: "á"
    }
  , {
        encoded: "&atilde;"
      , decoded: "ã"
    }
  , {
        encoded: "&auml;"
      , decoded: "ä"
    }
  , {
        encoded: "&aring;"
      , decoded: "å"
    }
  , {
        encoded: "&aelig;"
      , decoded: "æ"
    }
  , {
        encoded: "&ccedil;"
      , decoded: "ç"
    }
  , {
        encoded: "&egrave;"
      , decoded: "è"
    }
  , {
        encoded: "&eacute;"
      , decoded: "é"
    }
  , {
        encoded: "&ecirc;"
      , decoded: "ê"
    }
  , {
        encoded: "&euml;"
      , decoded: "ë"
    }
  , {
        encoded: "&igrave;"
      , decoded: "ì"
    }
  , {
        encoded: "&iacute;"
      , decoded: "í"
    }
  , {
        encoded: "&iuml;"
      , decoded: "ï"
    }
  , {
        encoded: "&eth;"
      , decoded: "ð"
    }
  , {
        encoded: "&ntilde;"
      , decoded: "ñ"
    }
  , {
        encoded: "&ograve;"
      , decoded: "ò"
    }
  , {
        encoded: "&oacute;"
      , decoded: "ó"
    }
  , {
        encoded: "&ocirc;"
      , decoded: "ô"
    }
  , {
        encoded: "&otilde;"
      , decoded: "õ"
    }
  , {
        encoded: "&ouml;"
      , decoded: "ö"
    }
  , {
        encoded: "&oslash;"
      , decoded: "ø"
    }
  , {
        encoded: "&ugrave;"
      , decoded: "ù"
    }
  , {
        encoded: "&uacute;"
      , decoded: "ú"
    }
  , {
        encoded: "&ucirc;"
      , decoded: "û"
    }
  , {
        encoded: "&uuml;"
      , decoded: "ü"
    }
  , {
        encoded: "&yacute;"
      , decoded: "ý"
    }
  , {
        encoded: "&thorn;"
      , decoded: "þ"
    }
  , {
        encoded: "&yuml;"
      , decoded: "ÿ"
    }
  , {
        encoded: "&#259;"
      , decoded: "ă"
    }
  , {
        encoded: "Ă"
      , decoded: "&#258;"
    }
  , {
        encoded: "â"
      , decoded: "&#226;"
    }
  , {
        encoded: "Â"
      , decoded: "&#194;"
    }
  , {
        encoded: "î"
      , decoded: "&#238;"
    }
  , {
        encoded: "Î"
      , decoded: "&#206;"
    }
  , {
        encoded: "ş"
      , decoded: "&#351;"
    }
  , {
        encoded: "Ş"
      , decoded: "&#350;"
    }
  , {
        encoded: "ţ"
      , decoded: "&#355;"
    }
  , {
        encoded: "Ţ"
      , decoded: "&#354;"
    }
];

module.exports = CharacterMap;

