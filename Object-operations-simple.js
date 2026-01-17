const user= {
    id:101,
    name:"Anurag",
    email:"anurag@example.com",
    role:"student",
    isActive:true
};

//printing user details
console.log("name:", user.name);
console.log("email:", user.email);

//add new property
user.lastLogin="2026-01-01";
console.log("lastLogin:", user.lastLogin);

//update property
user.role="admin";
console.log("Updated role:", user.role);

//deleting isActive property
delete user.isActive;
console.log("After deletion, isActive:", user.isActive);

//use object.keys to get all keys
console.log("keys:", Object.keys(user));

//==============================================================================================================================================
//==============================================================================================================================================


//Scenario : Marks are stored subject-wise for a student.

//test data
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

//calculating total and average marks
total_marks = marks.maths + marks.physics + marks.chemistry + marks.english;
average_marks = total_marks / 4;
console.log("Total Marks:", total_marks);
console.log("Average Marks:", average_marks);

//find highest marks
let highest_marks = Math.max(marks.maths, marks.physics, marks.chemistry, marks.english);
console.log("Highest Marks:", highest_marks);

//add new sub
marks.computer = 90;
console.log("Updated Marks:", marks);

//===========================================================================================================================================
//===========================================================================================================================================

const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

//toggle theme
settings.theme = (settings.theme === "light") ? "dark" : "light";
console.log("Updated theme:", settings.theme);

//turn autoSave on
settings.autoSave = true;
console.log("AutoSave status:", settings.autoSave);

//remove notifications setting
delete settings.notifications;

//Freeze the settings object so it cannot be modified
Object.freeze(settings);

//try to change language (will not work due to freeze)
settings.language = "fr";
console.log("Language after attempted change:", settings.language);

