// Array containing all possible choices (a-z, 0-9) - NO CAPS!!!.
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Variables for wins, losses, and guesses.
var wins = 0;
var losses = 0;
var guesses = 10;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guesses").innerHTML = guesses;

document.onkeyup = function (event) {

    // Variable to store user input.
    var userGuess = event.key;
    if (guesses == 10) {
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }    
    

    // Game Logic
    console.log("Computer guessed: " + computerGuess + ". User guessed: " + userGuess);
    console.log("-----------------------");
    if (userGuess == computerGuess) {
        wins++;
        guesses = 10;
        document.getElementById("wins").innerHTML = wins;
        console.log("[Inside IF] Wins: " + wins + "; Guesses: " + guesses);
        console.log("-----------------------");
    }
    else if (guesses > 1) {
        guesses--;
        document.getElementById("guesses").innerHTML = guesses;
        console.log("[Inside ELSE IF] Guesses remaining: " + guesses);
        console.log("-----------------------");
    } else {
        losses++;
        guesses = 10;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("guesses").innerHTML = guesses;
        console.log("[Inside ELSE] You lose. Resetting. Guesses: " + guesses + "; Losses: " + losses);
        console.log("-----------------------");
   }
}


// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
// var html =
//     "<p>You chose: " + userGuess + "</p>" +
//     "<p>The computer chose: " + computerGuess + "</p>" +
//     "<p>wins: " + wins + "</p>" +
//     "<p>losses: " + losses + "</p>" +
//     "<p>ties: " + ties + "</p>";

// // Set the inner HTML contents of the #game div to our html string
// document.querySelector("#game").innerHTML = html;
//     }
// };
