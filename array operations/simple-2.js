const courses = ["javascript", "react", "node", "mongodb", "express"];


//------------------------------------------------------------------------------------------------------------


//filtering courses with name length > 5
let bigC=courses.filter(coursesname=> coursesname.length>5);
console.log("courses with name length >5:", bigC);


//------------------------------------------------------------------------------------------------------------


//map to uppercase all course names
let uc=courses.map(coursename=> coursename.toUpperCase());
console.log("courses in uppercase:", uc);


//------------------------------------------------------------------------------------------------------------


//generate single string of all course names
let sc= courses.reduce((all,coursename)=> all+coursename.toUpperCase(),"");
console.log("single string of all course names:", sc);


//------------------------------------------------------------------------------------------------------------


//finding course name reat

let fc=courses.find(coursename=> coursename==="react");
if (fc=="react"){
    console.log("course react is found");
}
else{
    console.log("course react is not found");
}


//------------------------------------------------------------------------------------------------------------


//finding index of "node"
let index=courses.findIndex(coursename=> coursename==="node");
console.log("index of course node is:", index);


//------------------------------------------------------------------------------------------------------------
