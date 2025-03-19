let createList = prompt("Do you want to create a grocery list? (y/n):");

if (createList.toLowerCase() === "y") {
    let numItems = prompt("How many items do you want to add?");
    numItems = Number(numItems); 

    let groceryList = []; 

    for (let i = 0; i < numItems; i++) {
        let item = prompt("Enter item : "); // Show item number to user
        groceryList.push(item); 
    }

    let reversedList = groceryList.slice().reverse(); // Copy & reverse

    alert("Grocery List: " + groceryList);
    alert("Reversed Grocery List: " + reversedList);
} else {
    alert("You chose not to create a grocery list.");
}

