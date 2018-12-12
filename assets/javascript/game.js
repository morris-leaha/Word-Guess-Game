// Holiday Word Array 
var wordList = ["advent", "christmas", "dreidel", "eggnog", "elves", "gingerbread", "garland", "hanukkah", "jingle", "kwanzaa", "mistletoe", "nutcracker", "reindeer", "stocking", "sugarplum"];

// Random word is chosen by computer
var currentWord = ""; 
var currentWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log("Current, random word is: " + currentWord);

// random word is displayed as current word 
var wordPicked = document.getElementById("rep-word");
wordPicked.textContent = ("");

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