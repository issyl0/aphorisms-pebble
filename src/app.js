var UI = require('ui');
var card = new UI.Card({
  title: 'Title',
  body: 'Body',
  scrollable: true
});

card.show();

var ajax = require('ajax');
ajax({ url: 'http://pebble-aphorisms.herokuapp.com/aphorisms.json', type: 'json' },
  function(data) {
    card.body(data.quote);
    card.title(data.author);
  }
);
