// Declare variables
var wordList = ["advent", "christmas", "dreidel", "eggnog", "elves", "gingerbread", "garland", "hanukkah", "jingle", "kwanzaa", "mistletoe", "nutcracker", "reindeer", "stocking", "sugarplum"];


//=============================================================================================================================================================================================
// RANDOM WORD GENERATION

var currentWord = wordList[Math.floor(Math.random() * wordList.length)]; // Random word is chosen by computer 
    console.log("Current, random word is: " + currentWord); // Checking to see if random word is chosen

// var currentWordElement = document.createElement("span"); // Creating new element for random word chosen and storing it in a variable
// var currentWordText = document.createTextNode(" " + currentWord); // Creating a new text node for random word chosen and storing it in a variable
// currentWordElement.appendChild(currentWordText); // Attaching the new text node for random word chosen to the new element created
// document.getElementById("current-word").appendChild(currentWordElement); // Telling where the new element for random chosen word will go and inserting the new element into its position

//=============================================================================================================================================================================================

// letters are displayed as underscores
var currentWordGuess = [];

for (var i = 0; i < currentWord.length; i++) {
    currentWordGuess.push("_");
    document.getElementById("guessing-word").textContent = currentWordGuess.join(" ");
  }

//=============================================================================================================================================================================================

// Starting number of wins at 0, then created and added a new element into DOM for number of wins
var wins = 0;
newWinElement = document.createElement("span");
newWinText = document.createTextNode(" " + wins);
newWinElement.appendChild(newWinText);
document.getElementById("wins").appendChild(newWinElement);

//=============================================================================================================================================================================================

// Starting number of losses at 0, then created and added a new element into DOM for number of losses
var losses = 0;
newLossesElement = document.createElement("span");
newLossesText = document.createTextNode(" " + losses);
newLossesElement.appendChild(newLossesText);
document.getElementById("losses").append(newLossesElement);

//=============================================================================================================================================================================================

// Starting number of guesses remaining at 0, then created and added a new element into DOM for number of guesses remaining
var guessesLeft = 10;
newGuessesLeft = document.createElement("span");
newGuessesText = document.createTextNode(" " + guessesLeft);
newGuessesLeft.appendChild(newGuessesText);
document.getElementById("guesses-remaining").appendChild(newGuessesLeft);

// This function is run whenever the user presses a key
var userGuess = [];
var guessCount = "";

document.onkeypress = function(event) {
    userGuess = String.fromCharCode(event.keyCode);
        console.log(userGuess);
    
    newGuessedLetterEl = document.createElement("span");
    newGuessedText = document.createTextNode(" " + userGuess);
    newGuessedLetterEl.appendChild(newGuessedText);
    document.getElementById("current-guesses").appendChild(newGuessedLetterEl);

    guessesLeft--;
        console.log(guessesLeft);
    document.getElementById("guesses-remaining").innerHTML = ("Guesses Remaining: " + guessesLeft);
}


// each letter key pressed is stored and listed 

// each letter key pressed decreases the allowed number of guessed 