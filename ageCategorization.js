// Ask the user to enter their age and store it in a variable
let age = prompt("Enter your age");

// Check if the user's age is less than 5
if (age < 5) {
    console.log("You are a Toddler"); // Display "Toddler" for ages under 5
} 
// Check if the age is between 5 and 12 (inclusive)
else if (age >= 5 && age <= 12) {
    console.log("You are a Child"); // Display "Child" for ages 5-12
} 
// Check if the age is between 13 and 19 (inclusive)
else if (age >= 13 && age <= 19) {
    console.log("You are a Teenager"); // Display "Teenager" for ages 13-19
} 
// Check if the age is between 20 and 35 (inclusive)
else if (age >= 20 && age <= 35) {
    console.log("You are a Young Adult"); // Display "Young Adult" for ages 20-35
} 
// Check if the age is between 36 and 60 (inclusive)
else if (age >= 36 && age <= 60) {
    console.log("You are Middle-Aged"); // Display "Middle-Aged" for ages 36-60
} 
// If age is greater than 60, the user is a Senior Citizen
else {
    console.log("You are a Senior Citizen"); // Display "Senior Citizen" for ages 61 and above
}
