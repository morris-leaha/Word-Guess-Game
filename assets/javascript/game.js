// Holiday Word Array 
var wordList = ["advent", "christmas", "dreidel", "eggnog", "elves", "gingerbread", "garland", "hanukkah", "jingle", "kwanzaa", "mistletoe", "nutcracker", "reindeer", "stocking", "sugarplum"];

//=============================================================================================================================================================================================

// Random word is chosen by computer
var currentWord = wordList[Math.floor(Math.random() * wordList.length)];  
    // Checking to see if random word is chosen
    console.log("Current, random word is: " + currentWord);

// Creating new element for random word chosen and storing it in a variable
var currentWordElement = document.createElement("span");

// Creating a new text node for random word chosen and storing it in a variable
var currentWordText = document.createTextNode(" " + currentWord);

// Attaching the new text node for random word chosen to the new element created
currentWordElement.appendChild(currentWordText);

// Telling where the new element for random chosen word will go and storing it in a variable
var currentWordPosition = document.getElementById("current-word");

// Inserting the new element into its position
currentWordPosition.appendChild(currentWordElement);

//=============================================================================================================================================================================================

// letters are displayed as underscores



//=============================================================================================================================================================================================

// Starting number of wins at 0, then created and added a new element into DOM for number of wins
var wins = 0;
newWinElement = document.createElement("span");
newWinText = document.createTextNode(" " + wins);
newWinElement.appendChild(newWinText);
newWinPosition = document.getElementById("wins");
newWinPosition.appendChild(newWinElement);

//=============================================================================================================================================================================================

// Starting number of losses at 0, then created and added a new element into DOM for number of losses
var losses = 0;
newLossesElement = document.createElement("span");
newLossesText = document.createTextNode(" " + losses);
newLossesElement.appendChild(newLossesText);
newLossesPosition = document.getElementById("losses");
newLossesPosition.append(newLossesElement);

//=============================================================================================================================================================================================

//Starting number of guesses remaining at 0, then created and added a new element into DOM for number of guesses remaining
var guessesLeft = 10;
newGuessesLeft = document.createElement("span");
newGuessesText = document.createTextNode(" " + guessesLeft);
newGuessesLeft.appendChild(newGuessesText);
newGuessesPosition = document.getElementById("guesses-remaining");
newGuessesPosition.appendChild(newGuessesLeft);

// user starts the game by pressing any letter key

// each letter key pressed is stored and listed 

// each letter key pressed decreases the allowed number of guessed letters