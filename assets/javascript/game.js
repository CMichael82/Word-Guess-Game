//Create an array of available words
var wordBank = ["fibula", "elbow", "clavicle", "cranium", "femur", "vertebra", "mandible"];

//Pick a random word from the arrray
var word = wordBank[Math.floor(Math.random() * wordBank.length)];

//Create underscores to represent letter spaces based on random word
var letterSpaces = [];
for (var i = 0; i < word.length; i++) {
	letterSpaces[i] = '_ ';
}

//Create an empty array for letters already guessed
var guessedLetters = [];
document.getElementById("wordBlock").innerHTML = letterSpaces.join("");

//Determine the length of the random word 
var lettersRemaining = word.length;

//Set number of available guesses
var guessesLeft = 10;

//Set wins starting at 0
var wins = 0;
var losses = 0;

//Start game with press(up)of any key
document.onkeyup = function (event) {
	
	//Set the user guess to the key selected
	var userGuess = event.key;
	console.log(userGuess);
	console.log(word);
	
	// If the user guess is in the word, replace space with letter, reduce letters remaining,
	if (word.indexOf(userGuess) > -1) {
		for (var j = 0; j < 26; j++) {
			if (word[j] === userGuess) {
				letterSpaces[j] = userGuess;
				lettersRemaining--;
			}
		}
	}
	// If the user guess is not in the word, move to guessed letters array
	else {
		guessedLetters.push(userGuess);
		guessesLeft--;
		console.log(guessesLeft);
	}
	
	checkWin();
	checkLoss();
	
	//Display stats in html
	document.getElementById("wordBlock").innerHTML = letterSpaces.join("");
	document.getElementById("guessed").innerHTML = guessedLetters.join("");
	document.getElementById("remaining").innerHTML = "Guesses Remaining:  " + guessesLeft;
	document.getElementById("wins").innerHTML = "Wins:  " + wins;
	document.getElementById("losses").innerHTML ="Losses:  " + losses;

};

//functions
function checkWin() {
	if (lettersRemaining === 0) {
		wins++;
		console.log(wins);
		winImage();
		resetGame();
	}
}

function checkLoss() {
	if (guessesLeft === 0) {
		losses++;
		console.log (losses);
		loseImage();
		resetGame();
	}
}

function resetGame() {
	word = wordBank[Math.floor(Math.random() * wordBank.length)];
	letterSpaces = [];
	for (var i = 0; i < word.length; i++) {
		letterSpaces[i] = '_ ';
	}
	lettersRemaining = word.length;
	guessedLetters = [];
	guessesLeft = 10;
}

function winImage() {
	document.getElementById("skeleton").src = "assets/images/skeleton-dancing.webp";
}

function loseImage(){
	document.getElementById("skeleton").src = "assets/images/skeleton-kneeling.png";
}

