let isLoggedIn = false;
let isProfileComplete = true;

if (isLoggedIn) {
    if (isProfileComplete) {
        console.log("Welcome back");
    } else {
        console.log("complete your profile");
    }
} else {
    console.log("Please log in ");
}   


//==============================================================================================================================================
//==============================================================================================================================================


let price=200;

if(price<500){
    console.log("budget course");
}
else if(price>=500 && price<1500){
    console.log("Standard course");
}
else{
    console.log("premium course");
}

//==============================================================================================================================================
//==============================================================================================================================================


let hasPaid = true;
let hasCompletedBasics = false;

if (hasPaid==true && hasCompletedBasics==true) {
    console.log("enroll now");
} else {
    console.log("complete requirements");
}   

//use ternary operator
let enrollmessage = (hasPaid && hasCompletedBasics) ? "enroll now" : "complete requirements";
console.log(enrollmessage);
