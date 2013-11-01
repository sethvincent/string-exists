# string-exists

Check if a string or array of strings exist in a larger string.

You might use it to check comments against a list of bad words, or to know if a block of text relates to a certain topic.

## Install

````
npm install string-exists
````

## Usage

````js
var exists = require('string-exists');

var match = exists('pizza', 'pizza is awesome');

console.log(match)
// -> returns ['pizza']

var matches = exists(['cool'], 'oh, pizza is really cool');

console.log(matches)
// -> returns ['cool']

var noMatch = exists('poop', 'i like eating pizza');
// -> returns false
````


### exists(words, text);
`words` can be a string or array of strings.

`text` is a string that you want to check find the words in.

`exists()` returns an array of matches or `false` if no matches.


## Contributing
- Fork this repo
- Clone to your machine
- Run `npm install`
- Make changes on new branch
- Check that tests work using `npm test`
- Add tests if needed
- Submit pull request

## License
MIT
