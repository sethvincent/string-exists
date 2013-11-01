var test = require('tape');
var exists = require('./');

/* strings we are looking for: */
var awesome = ['pizza', 'is', 'awesome'];
var huh = 'huh';
var poop = 'poop';

/* strings we are checking in: */
var whoa = 'whoaaaa, pizza is like the best food in the world.';
var alright = 'hmm. huh, ok. i guess pizza is alright.';
var shit = 'i shat out the pizza.';

test('check that strings exist or return false', function(t){
  t.plan(3);

  t.equal(exists(awesome, whoa).length, 2);

  t.equal(exists(huh, alright).length, 1);

  t.notOk(exists(poop, shit));
});