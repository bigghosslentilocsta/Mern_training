const temperatures = [32, 35, 28, 40, 38, 30, 42];

//------------------------------------------------------------------------------------------------------------


//filter temperatures above 35
let hightemps=temperatures.filter(temp=> temp>35);
console.log("hightemps:", hightemps);


//------------------------------------------------------------------------------------------------------------


//convert celsius to fahrenheit
let c_f=temperatures.map(temp=> (temp *1.8)+32);
console.log("fahrenheit:" ,c_f);


//------------------------------------------------------------------------------------------------------------


//find average temperature
let avg=temperatures.reduce((sum,temp)=> sum+temp,0)/temperatures.length;
console.log("average:", avg)


//------------------------------------------------------------------------------------------------------------


//find first temperature above 40
let first_temp=temperatures.find(temp=> temp>40);
console.log("first temp above 40:",first_temp);


//------------------------------------------------------------------------------------------------------------

//finding index of temperature above 28
let find_index=temperatures.findIndex(temp=> temp>28);
console.log("index of first temp above 28:", find_index);

//===========================================================================================================================================
//===========================================================================

const marks = [78, 92, 35, 88, 40, 67];
//---------------------------------------------------------------------------------------------------------------------


//marks greater than or equal to 50
let pass=marks.filter(marks=> marks>=40);
console.log("passing marks:", pass);


//---------------------------------------------------------------------------------------------------------------------


//5+ grace marks to each student
let grace=marks.map(marks=> marks+5);
console.log("marks after grace:", grace);


//---------------------------------------------------------------------------------------------------------------------


//reduce to find highest marks

let high=marks.reduce((max,marks)=> (marks>max)? marks:max,0); //initial max=0, marks:max means allocating marks to max if marks>max


console.log("highest marks:", high);
//---------------------------------------------------------------------------------------------------------------------


//find first failing marks

let ff=marks.find(marks=> marks<40)


console.log("first failing mark:", ff);
//---------------------------------------------------------------------------------------------------------------------


//find index of marks 92
let fi=marks.findIndex(marks=> marks===92);
console.log("index of marks 92:", fi);

//============================================================================================================================================
//=============================================================================================================================================

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
