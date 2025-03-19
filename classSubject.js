// Prompt the user to enter the subject title
let subjectTitle = prompt("Enter your subject title");

// Prompt the user to enter the class schedule (time and days)
let classSchedule = prompt("Enter your Class Schedule (Time/Days):");

// Prompt the user to enter the classroom location
let classroom = prompt("Enter your Classroom:");

// Prompt the user to enter the class instructor's name
let classInstructor = prompt("Enter your Class Instructor");

// Prompt the user to enter their name
let studName = prompt("Enter your name:");

// Display the collected information in the console
console.log(`${studName} is currently enrolled in ${subjectTitle} 
    with a class schedule of ${classSchedule} at room ${classroom}. 
    The instructor for the subject is ${classInstructor}.`);
