//Create an array of available words
var wordBank = ["fibula", "elbow", "clavicle","cranium", "femur","vertebra", "mandible"];

//Pick a random word from the arrray
var word = wordBank[Math.floor(Math.random()*wordBank.length)];

//Create underscores to represent letter spaces based on random word
var letterSpaces = [];
	for (var i = 0; i < word.length; i++) {
		letterSpaces[i] ='_ ';
	}

//Create an empty array for letters already guessed
var guessedLetters = [];

//Determine the length of the random word
var lettersRemaining = word.length;

//Set number of available guesses
var guessesLeft = 10;

//Set wins starting at 0
var wins = 0;
var winMessage = "You Win!"
var loseMessage ="Try Again!"

//Start game with press(up)of any key
document.onkeyup = function (event){

//Set the user guess to the key selected
userGuess = event.key;
console.log(userGuess);
console.log(word);

// If the user guess is not in the word, move to guessed letters array
if (word.indexOf(userGuess) > -1) {
	} else {
		guessedLetters.push(userGuess);

//Decrease guesses left each time incorrect letter selected
		guessesLeft--;
		console.log(guessesLeft);
	}

//Check the user guess against the letters of the word. If correct reduces letters remaining
if (lettersRemaining > 0) {
	for (var j = 0; j < word.length; j++) {
		if (word[j]===userGuess){
			letterSpaces[j] = userGuess;
			lettersRemaining--;
		}
	}

	//run function to see if the user won
	checkWin ();
}

//Display stats in html
document.getElementById("wordBlock").innerHTML= letterSpaces.join("");
document.getElementById("guessed").innerHTML= guessedLetters.join("");
document.getElementById("remaining").innerHTML=guessesLeft;
document.getElementById("wins").innerHTML=wins;
}

//functions
function checkWin (){
	if (lettersRemaining===-0){
		wins++;
		}
}



