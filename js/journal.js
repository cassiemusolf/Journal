function Entry(journalBody) {
}

Entry.prototype.wordCount = function(journalBody) {
  var wordCount = journalBody.split(" ");
  return wordCount.length;
};

Entry.prototype.vowelCount = function(journalBody) {
  var vowels = ["a", "e", "i", "o", "u"];
  var count = 0;

  for (var i = 0; i <= journalBody.length; i++) {
    if ((vowels.indexOf(journalBody[i])) != -1) {
      count +=1;
    }
  }
  return count;
};

Entry.prototype.firstSentence = function(journalBody) {
  var seperateWords= journalBody.split(" ");

  if (seperateWords.lenth <= 8) {
    return seperateWords;
  } else {
    var result = seperateWords.slice(0,8);;
    return seperateWords.join(' ');
  }
}


exports.entryModule = Entry;
