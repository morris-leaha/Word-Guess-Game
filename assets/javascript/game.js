// STORE THE HOLIDAY WORDS IN AN ARRAY  

var wordList = ["advent", "christmas", "dreidel", "eggnog", "elves", "gingerbread", "garland", "hanukkah", "jingle", "kwanzaa", "mistletoe", "nutcracker", "reindeer", "stocking", "sugarplum"];

//=============================================================================================================================================================================================

// RANDOM WORD GENERATION

var currentWord = wordList[Math.floor(Math.random() * wordList.length)]; // Random word is chosen by computer 
    console.log("Current, random word is: " + currentWord); // Checking to see if random word is chosen

//=============================================================================================================================================================================================

// LETTERS ARE DISPLAYED AS UNDERSCORES (__)
var blanksArray = []; // creating empty array that will store our (__)/"blanks"

for (var i = 0; i < currentWord.length; i++) { // will loop through the current word's length, one letter at a time
    blanksArray.push("_"); // in each loop, each subseqent letter in the currentWord will be replaced with an underscore in the blanksArray
    console.log(blanksArray); // want to visualize each letter of the currentWord being replaced 
  }
    document.getElementById("guessing-word").innerHTML = blanksArray.join(" "); // joins the elements of an array into a string & returns the string, which is placed in our HTML where specified
                                                                                // NOTE: always put outside of the loop, because you don't need it to replace every loop, just at the end.

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

// Declaring initial variables to use in event function

var userGuess = ""; // create userGuess variable to store strings of letters pressed 
var guessedLetters = []; // created guessedLetters assigned an empty array -- will store the letters pressed by the user
var guessCount = 10; // storing the max number of letters the user can pick
var splitWord = currentWord.split(""); // storing the letters of the currentWord as individual strings into the variable splitWord 
    console.log(splitWord); // visualizing in console the individual letter of the currentWord 
var matchFound = false; // setting the value of matchFound to false 
var totalLetters = splitWord.length;
var correctLetters = 0;


// RUN THIS FUNCTION WHEN USER PRESSES A KEY

document.onkeyup = function(event) { // when user releases a key, the event function will run
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();  // storing the event of a key pressed as userGuess -- but using the string property, the computer will convert the key's character code that was pressed to an actual letter and make it lowercase (since all my wordList words are lowercase)
        console.log(userGuess);                              // want to visualize in console what key the user is pressing

    // verifies if user has picked the same letter twice
    if (guessedLetters.indexOf(userGuess) >= 0) {  // says if WITHIN the array (the significance of >=0) of guessedLetters, using the indexOf() method to find the first occurrence, there is another value that is the same 
        console.log("you've already guessed that letter");  // print in console that userGuess has already been chosen and cannot be chosen again
        return; // stops the rest of the code from running
    } else {  // if the user picks another letter, not already picked, then
        guessedLetters.push(userGuess);  // put userGuess into the guessedLetters array 
        document.getElementById("guessed-letters").innerHTML = guessedLetters.join(" ");  // add the userGuess, stored in the guessedLetters array, to the HTML  
    }

    // for loop to run through the splitWord.length 
    for (j=0; j < splitWord.length; j++) {
        if (splitWord[j] === userGuess) {  // if userGuess matches a value in splitWord array
            splitWord[j] = "_";  //remove letter from split word
            blanksArray[j] = userGuess; //add letter to 
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




