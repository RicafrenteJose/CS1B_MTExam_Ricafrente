// Ask the user if they want to create a grocery list
let createList = prompt("Do you want to create a grocery list? (y/n):");

// Convert user input to lowercase and check if they said "y" (yes)
if (createList.toLowerCase() === "y") {
    
    // Ask the user how many items they want to add
    let numItems = prompt("How many items do you want to add?");
    
    // Convert the input (which is a string) into a number
    numItems = Number(numItems);

    // Create an empty array to store the grocery items
    let groceryList = [];

    // Loop to get each item from the user
    for (let i = 0; i < numItems; i++) {
        // Ask the user to enter an item
        let item = prompt("Enter item : "); 
        // Add the item to the grocery list
        groceryList.push(item);
    }

    // Create a reversed copy of the grocery list
    let reversedList = groceryList.slice().reverse(); // slice() makes a copy

    // Show the original grocery list to the user
    alert("Grocery List: " + groceryList);
    
    // Show the reversed grocery list to the user
    alert("Reversed Grocery List: " + reversedList);

} else {
    // If the user said no, display a message
    alert("You chose not to create a grocery list.");
}
