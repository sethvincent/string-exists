module.exports = function stringExists(words, text){
  var text = text;
  var words = typeof words === 'string' ? [words] : words;

  var matches = [];

  for (i=0; i<words.length; i++){
    if (text.toLowerCase().indexOf(words[i].toLowerCase()) != -1){
      matches.push(words[i]);
    }
  }

  if (matches.length > 0) return matches;
  else return false;
}