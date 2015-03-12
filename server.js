var request = require('request');
var Lame = require('lame');
var Speaker = require('speaker');

var say = function(text){
  var url = 'http://translate.google.com/translate_tts?tl=en&q=' + encodeURIComponent(text);
  request(url).pipe(new Lame.Decoder).pipe(new Speaker);
};

var bottle = function(num){
  say(num + ' green bottles, standing on the wall');
};

for(var i=10; i>0; --i){
  setTimeout(bottle, 10 - i, i);
}
