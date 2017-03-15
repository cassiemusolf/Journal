(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/journal.js":1}]},{},[2]);
