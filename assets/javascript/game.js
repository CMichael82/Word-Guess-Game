var wordBank = ["fibula", "elbow", "clavicle","cranium", "femur","vertebra", "mandible"];
var word = wordBank[Math.floor(Math.random()*wordBank.length)];
var letterSpaces = [];
	for (var i = 0; i < word.length; i++) {
		letterSpaces[i] ='_ ';
			}
var guessedLetters = [];
var lettersRemaining = word.length;
var wins = 0;
var winMessage = "You Win!"

document.onkeyup = function (event){

//is this the correct way to assign the user guess - seems to be duplicating keystrokes?//
var userGuess = event.key;
console.log(userGuess);
document.getElementById("wordBlock").innerHTML= letterSpaces.join("");
//how do you get all user guesses to show//
document.getElementById("guessed").innerHTML=userGuess;
console.log(word);

if (lettersRemaining > 0) {
	for (var j = 0; j < word.length; j++) {
		if (word[j]===userGuess){
			letterSpaces[j] = userGuess;
			lettersRemaining--;
		}
	}
} 

}
