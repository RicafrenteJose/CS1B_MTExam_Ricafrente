// Declare a variable for the favorite number
let theFavNumber = 7; // You can change this to any number

// Declare a variable for the user's guess (but don't assign a value yet)
let guess;

// Start a loop that will keep running until the user guesses correctly
while (guess !== theFavNumber) {
    // Prompt the user to guess the number and convert their input to a number
    guess = parseInt(prompt("Guess my favorite number:"));
    
    // Check if the guessed number is too high
    if (guess > theFavNumber) {
        console.log("Too high! Try again.");
    } 
    // Check if the guessed number is too low
    else if (guess < theFavNumber) {
        console.log("Too low! Try again.");
    } 
    // If the guess is correct, print a success message
    else {
        console.log("Correct! You guessed my favorite number.");
    }
}
