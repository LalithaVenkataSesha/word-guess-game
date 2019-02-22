var words = [
     'javascript',
     'document',
     'element',
     'object',
     'property',
     'event',
     'propagation',
     'listener',
     'translation',
     'animation'
  ];
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);
var answerArray = [];
var userGuesses = [];
var guessedletters = document.getElementById('guess');
for (var i = 0; i < word.length; i++) {
 answerArray[i] = "_";
}
var remainingLetters = word.length;
var guess = document.getElementById('letter');
guess.textContent = answerArray.join(" ");

document.onkeyup = function(event) {
var userGuess = event.key.toLowerCase();
 userGuesses.push(userGuess);
 guessedletters.textContent = "your guesses " + userGuesses.join(", ");

  for (var j = 0; j < word.length; j++) {
 if (word[j] === userGuess) {
 answerArray[j] = userGuess;
 guess.textContent = answerArray.join(" ");
 remainingLetters--;
 }
}
};
