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
