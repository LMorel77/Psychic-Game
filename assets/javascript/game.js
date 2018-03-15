// Array containing all possible choices (a-z, 0-9) - NO CAPS!!!.
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Variables for wins, losses, and guesses.
var wins = 0;
var losses = 0;
var guesses = 10;
var guessCount = 1;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guesses").innerHTML = guesses;

document.onkeyup = function (event) {

    // Variables to store user input and output results.
    var userGuess = event.key;
    var newSpan = document.createElement("span");
    var targetSpan = document.getElementById("guessed");

    // User input output
    newSpan.innerHTML = guessCount + ") " + userGuess + " ";
    targetSpan.appendChild(newSpan);
    guessCount++;

    // Have computer pick another character
    if (guesses == 10) {
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }    

    // Game Logic
    if (userGuess == computerGuess) {
        wins++;
        guesses = 10;
        guessCount = 1;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("guessed").innerHTML = "";
    }
    else if (guesses > 1) {
        guesses--;
        document.getElementById("guesses").innerHTML = guesses;
    } else {
        losses++;
        guesses = 10;
        guessCount = 1;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("guesses").innerHTML = guesses;
        document.getElementById("guessed").innerHTML = "";
   }
}
