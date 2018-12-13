// Declare variables
var wordList = ["advent", "christmas", "dreidel", "eggnog", "elves", "gingerbread", "garland", "hanukkah", "jingle", "kwanzaa", "mistletoe", "nutcracker", "reindeer", "stocking", "sugarplum"];


//=============================================================================================================================================================================================
// RANDOM WORD GENERATION

var currentWord = wordList[Math.floor(Math.random() * wordList.length)]; // Random word is chosen by computer 
    console.log("Current, random word is: " + currentWord); // Checking to see if random word is chosen

//=============================================================================================================================================================================================

// LETTERS ARE DISPLAYED AS UNDERSCORES (__)
var blanksArray = [];

for (var i = 0; i < currentWord.length; i++) {
    blanksArray.push("_");
    console.log(blanksArray);
  }
    document.getElementById("guessing-word").innerHTML = blanksArray.join(" ");

//=============================================================================================================================================================================================

// START WINS = 0 AND DISPLAY
var wins = 0;
newWinElement = document.createElement("span");
newWinText = document.createTextNode(" " + wins);
newWinElement.appendChild(newWinText);
document.getElementById("wins").appendChild(newWinElement);

//=============================================================================================================================================================================================

// START LOSSES = 0 AND DISPLAY
var losses = 0;
newLossesElement = document.createElement("span");
newLossesText = document.createTextNode(" " + losses);
newLossesElement.appendChild(newLossesText);
document.getElementById("losses").append(newLossesElement);

//=============================================================================================================================================================================================

// START MAX GUESSES = 10 AND DISPLAY
var guessesLeft = 10;
newGuessesLeft = document.createElement("span");
newGuessesText = document.createTextNode(" " + guessesLeft);
newGuessesLeft.appendChild(newGuessesText);
document.getElementById("guesses-remaining").appendChild(newGuessesLeft);

//=============================================================================================================================================================================================

// RUN THIS FUNCTION WHEN USER PRESSES A KEY

// declaring initial variables for use in function
var userGuess = "";
var guessedLetters = [];
var guessCount = 10;
var splitWord = currentWord.split("");
    console.log(splitWord);
var totalLetters = splitWord.length;
var correctLetters = 0;

// each letter key pressed is stored and listed
document.onkeyup = function(event) { 
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(userGuess);
    
    // newGuessedLetterEl = document.createElement("span");
    // newGuessedText = document.createTextNode(" " + userGuess);
    // newGuessedLetterEl.appendChild(newGuessedText);
    // document.getElementById("current-guesses").appendChild(newGuessedLetterEl);

    // verifies if user has picked the same letter twice
    if (guessedLetters.indexOf(userGuess) >= 0) {
        console.log("you've already guessed that letter");
        return; //stop the rest of the code from running
    } else {
        guessedLetters.push(userGuess);
    }




    // // each letter key pressed decreases the allowed number of guessed 
    // guessesLeft--;
    //     console.log(guessesLeft);
    // document.getElementById("guesses-remaining").innerHTML = ("Guesses Remaining: " + guessesLeft);

    // check each userGuess against each index (each letter) of splitWord 

    var matchFound = false;

        // for loop to run through the splitWord.length 
            for (j=0; j < splitWord.length; j++) {
                // if userGuess matches a value in splitWord array
                if (splitWord[j] === userGuess) {
                    //remove letter from split word
                    splitWord[j] = "_";
                    //add letter to 
                    blanksArray[j] = userGuess;
                    matchFound = true; 
                    correctLetters++;
                }
            }
            document.getElementById("guessing-word").innerHTML = blanksArray.join(" ");
            console.log(blanksArray);

            // check if a match was found or not
                // if found, check if all the matches have been found
                if (matchFound) {
                    if (totalLetters === correctLetters) {
                        wins++;
                        document.getElementById("wins").innerHTML = wins;
                        //reset the game
                    } 
                } else {
                    if (!guessCount) {
                        losses++;
                        // update DOM
                        // reset the game 
                    } else {
                        guessCount--;
                        // update DOM
                    }
                }
                // yes - WIN
                    //call func to restart
                // else, check if guesses are available
                // no - LOSS  
                    //call func to restart 

//func to restart the game
            //reset variables
            //update DOM

}

// QUESTIONS: 
// 1. set max number of guessesLeft?
// 2. user cannot key same letter choice




