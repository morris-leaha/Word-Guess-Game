// Holiday Word Array 
var wordList = ["advent", "christmas", "dreidel", "eggnog", "elves", "gingerbread", "garland", "hanukkah", "jingle", "kwanzaa", "mistletoe", "nutcracker", "reindeer", "stocking", "sugarplum"];

// Declaring the variable that will store the current, randomly chosen word as a string
var currentWord = ""; 

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

// var wordPicked = document.getElementById("rep-word");
// wordPicked.textContent = ("");

// letters are displayed as underscores


// number of wins starts at 0
var wins = 0;
var winCount = document.getElementById("wins");
winCount.textContent = "Wins: " + wins;

// number of losses starts at 0
var losses = 0;
var lossesCount = document.getElementById("losses");
lossesCount.textContent = "Losses: " + losses;

// guesses left starts at 10
var guessesLeft = 10;
var guessCount = document.getElementById("guesses-remaining");
guessCount.textContent = "Guesses Remaining: " + guessesLeft;

// user starts the game by pressing any letter key

// each letter key pressed is stored and listed 

// each letter key pressed decreases the allowed number of guessed letters