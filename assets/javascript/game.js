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
var splitWord = currentWord.split(""); // splits the currentWord into individual strings and stores it in an array we assigned the value of splitWord
    console.log(splitWord); // visualizing in console the individual letter of the currentWord 
var matchFound = false; // setting the value of matchFound to false 
var correctLetters = 0; // setting the value of correctLetters to 0
var totalLetters = splitWord.length; // storing totalLetters as the total length of the splitWord 


// RUN THIS FUNCTION WHEN USER PRESSES A KEY

document.onkeyup = function(event) { // when user releases a key, the event function will run
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();  // storing the event of a key pressed as userGuess -- but using the string property, the computer will convert the key's character code that was pressed to an actual letter and make it lowercase (since all my wordList words are lowercase)
        console.log("user picked: " + userGuess);  // want to visualize in console what key the user is pressing

    // verifies if user has picked the same letter twice
    if (guessedLetters.indexOf(userGuess) >= 0) {  // says if WITHIN the array (the significance of >=0) of guessedLetters, using the indexOf() method to find the first occurrence, there is another value that is the same 
        console.log("you've already guessed that letter");  // print in console that userGuess has already been chosen and cannot be chosen again
        return; // stops the rest of the code from running
    } else {  // if the user picks another letter, not already picked, then
        guessedLetters.push(userGuess);  // put userGuess into the guessedLetters array 
        document.getElementById("guessed-letters").innerHTML = guessedLetters.join(" ");  // add the userGuess, now stored in the guessedLetters array, to the HTML  
    }

    for (j=0; j < splitWord.length; j++) {  // for loop to run through the splitWord.length
        if (splitWord[j] === userGuess) {  // states if userGuess matches a value in splitWord array, then:
            // splitWord[j] = "_"; 
            blanksArray[j] = userGuess; // add the matching userGuess letter to the blanksArray at specific/matching index position(s)
            matchFound = true; // updating the value of matchFound
            correctLetters++; // increment the value of correctLetters
            console.log("number of correct letters: " + correctLetters);
        }
    }
        document.getElementById("guessing-word").innerHTML = blanksArray.join(" "); // replacing matched letters in HTML at specific index - so visible to user
            console.log(blanksArray); // visualize in console the blanksArray with matched letter choice 

    if (matchFound) {  // check if a match was found or not
        if (totalLetters === correctLetters) { // if match is found AND all of the matches have been found
            wins++; // increment number of wins
            document.getElementById("wins").innerHTML = ("Wins: " + wins); //update win count in HTML
            //reset the game
        } 
    } else if (!guessCount){  // if no match was found
          // if no match was found AND guessCount = 0
            losses++; // increment number of losses
            document.getElementById("losses").innerHTML = ("Losses: " + wins); // update win count in HTML
            // reset the game 
        } else { // if no match was found, but user stills has guesses
                guessCount--; // decrement number of guesses 
                console.log("guessCount: " + guessCount); // visualize what the current guessCount is
                document.getElementById("guesses-remaining").textContent = ("Guesses Remaining: " + guessCount); 
                //reset the game
            }   
          }



//func to restart the game
            //reset variables
            //update DOM


