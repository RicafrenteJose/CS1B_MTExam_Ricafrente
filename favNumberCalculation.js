// Declare a variable for the favorite number
let theFavNumber = 7; // You can change this to any number

// Prompt the user to guess the number
let guess;
while (guess !== theFavNumber) {
    guess = parseInt(prompt("Guess my favorite number:"));
    
    if (guess > theFavNumber) {
        console.log("Too high! Try again.");
    } else if (guess < theFavNumber) {
        console.log("Too low! Try again.");
    } else {
        console.log("Correct! You guessed my favorite number.");
    }
}
