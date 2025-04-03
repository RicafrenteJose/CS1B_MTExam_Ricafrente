// Create empty arrays to store student names for each subject
let DSA = [];
let WebDev = [];

// Declare variables for the selected subject and the list of students
let subject, students;

while (true) { // Infinite loop, runs until 'Exit' is chosen
    // Ask the user to choose a subject and convert the input to lowercase
    subject = prompt("Choose subject (A) DSA, (B) WebDev:").toLowerCase();
   
    if (subject === 'a') {
        students = DSA;
    } else {
        students = WebDev;
    }

    // Ask the user what action they want to perform
    let action = prompt("(A) Enroll, (B) Unenroll, (C) Change Subject, (D) Exit:").toLowerCase();

    if (action === 'a') { // If the user chooses to enroll a student
        let name = prompt("Enter student name:"); // Ask for the student's name
        students.push(name); // Add the name to the selected subject's list
    } 
    else if (action === 'b') { // If the user chooses to unenroll a student
        if (students.length === 0) { // Check if the list is empty
            alert("No students enrolled."); // Show a message if no students are in the list
        } else {
            let name = prompt("Enter student name to remove:"); // Ask for the student's name to remove
            
            // Use filter() to create a new array without the removed student
            students = students.filter(student => student !== name);
        }
    } 
    else if (action === 'c') { // If the user wants to change subjects
        continue; // Restart the loop, allowing the user to pick a new subject
    } 
    else if (action === 'd') { // If the user wants to exit
        // Show the final list of students in both subjects
        alert("DSA: " + DSA + "\nWebDev: " + WebDev);
        break; // Exit the loop
    }
}
