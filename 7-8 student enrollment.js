let DSA = [];
let WebDev = [];
let subject, students;

while (true) {
    subject = prompt("Choose subject (A) DSA, (B) WebDev:").toLowerCase();
    students = subject === 'a' ? DSA : WebDev;
    
    let action = prompt("(A) Enroll, (B) Unenroll, (C) Change Subject, (D) Exit:").toLowerCase();

    if (action === 'a') {
        let name = prompt("Enter student name:");
        students.push(name);
    } 
    else if (action === 'b') {
        if (students.length === 0) {
            alert("No students enrolled.");
        } else {
            let name = prompt("Enter student name to remove:");
            let newList = [];
            
            for (let i = 0; i < students.length; i++) {
                if (students[i] !== name) {
                    newList.push(students[i]); // Copy all names except the one to remove
                }
            }
            
            students.length = 0; // Clear original array
            for (let i = 0; i < newList.length; i++) {
                students.push(newList[i]); // Copy back only the remaining names
            }
        }
    } 
    else if (action === 'c') {
        continue; // Go back to subject selection
    } 
    else if (action === 'd') {
        alert("DSA: " + DSA + "\nWebDev: " + WebDev);
        break; // Exit the loop
    }
}
