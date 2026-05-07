'use strict';

var decoder = function(encoded){
  //code your solution here
  var withoutFrontCode = encoded.replace("spy[", "");
  var withoutSecretCode = withoutFrontCode.replace("]code", "");

  var unreversed = withoutSecretCode.split("").reverse().join("");

  var original = "";

  for (var i = 0; i < unreversed.length; i++) {
    var oldLetter = String.fromCharCode(unreversed.charCodeAt(i) - 3);
    original = original + oldLetter;
  }

  return original;
};

module.exports = decoder;