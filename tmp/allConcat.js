var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#journal-entry-form').submit(function(event) {
    event.preventDefault();
    var journalBody = $('#journalBody').val();
    var newEntry = new Entry();
    var words = newEntry.wordCount(journalBody);
    var vowels = newEntry.vowelCount(journalBody);
    var sentence = newEntry.firstSentence(journalBody);

    $('#word-count').append(words);
    $('#vowel-count').append(vowels);
    $('#teaser').append(sentence);

  });
});
