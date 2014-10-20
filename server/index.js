'use strict';

global.Intl || require('intl');


var IntlMessageFormat = require('intl-messageformat');
var output;

var MESSAGES = {
  'en-US': {
    NUM_PHOTOS: 'You have {numPhotos, plural, ' +
        '=0 {no photos.}' +
        '=1 {one photo.}' +
        'other {# photos.}}',
    HELLO: 'You are {name}',
    NUMBER: 'I have {numCats, number}',
    DATE: 'It is {date, date, short}',
    GENDER: "I'm a {gender, select, " +
      'male {man.}' +
      'female {woman.}}'
  },
  'es-MX': {
        photos: 'Usted {numPhotos, plural, ' +
            '=0 {no tiene fotos.}' +
            '=1 {tiene una foto.}' +
            'other {tiene # fotos.}}'
  }
};


var enNumPhotos = new IntlMessageFormat(MESSAGES['en-US'].NUM_PHOTOS, 'en-US');
output = enNumPhotos.format({numPhotos: 0});
console.log(output); // => "You have 1,000 photos."

var hello = new IntlMessageFormat(MESSAGES['en-US'].HELLO, 'en-US');
console.log(hello.format({name: 'Alex' }));

var num = new IntlMessageFormat(MESSAGES['en-US'].NUMBER, 'de-de');
console.log(num.format({numCats: '5000' }));

var d = new IntlMessageFormat(MESSAGES['en-US'].DATE, 'en-US');
console.log(d.format({date: new Date()}));

var g = new IntlMessageFormat(MESSAGES['en-US'].GENDER, 'en-US');
console.log(g.format({gender: 'female' }));


var es = new IntlMessageFormat(MESSAGES['es-MX'].photos, 'es-MX');
console.log(es.format({numPhotos: 1}));



