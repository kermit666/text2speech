var request = require('request');
var Lame = require('lame');
var Speaker = require('speaker');

var say = function(text){
  var url = 'http://translate.google.com/translate_tts?tl=en&q=' + encodeURIComponent(text);
  request(url).pipe(new Lame.Decoder).pipe(new Speaker);
};

var text = 'Say hello to my little friend';
say(text);
