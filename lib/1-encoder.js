'use strict';

var encoder = function(phrase){
  //code your solution here
  var shifted = "";
  for (var i = 0; i < phrase.length; i++) {
    var newLetter = String.fromCharCode(phrase.charCodeAt(i) + 3);
    shifted = shifted + newLetter;
  }

  var reversed = shifted.split("").reverse().join("");

  var secretMessage = "spy[" + reversed + "]code";

  return secretMessage;
};

module.exports = encoder;