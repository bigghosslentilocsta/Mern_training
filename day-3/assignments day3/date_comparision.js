let enrollmentDeadline = new Date("2026-01-20");

//check if current date is before enrollment deadline then print "Enrollment is open" else print "Enrollment is closed"
let currentDate = new Date();
if (currentDate < enrollmentDeadline) {
    console.log("Enrollment is open");
} else {
    console.log("Enrollment is closed");
}

//valid user input date

let userInputDate = new Date("2026-02-30");
//detect wheather user input date is valid or not
if(userInputDate.getDate()!==30 || userInputDate.getMonth()!==1 || userInputDate.getFullYear()!==2026)
    {
    console.log("Invalid Date");
} else {
    console.log("Valid Date");
}
