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

