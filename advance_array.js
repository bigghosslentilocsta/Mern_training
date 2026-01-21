const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//use filter to get only inStock items
let inStockItems = cart.filter(item => item.inStock);

console.log("In-Stock Items:", inStockItems);

//use map to create an array with name,total price
let name_price=inStockItems.map(item=> ({name:item.name, totalPrice:item.price * item.quantity}) );

console.log("Name and Total Price:", name_price);

//use reduce to get the total cart value of inStock items
let totalCartValue = inStockItems.reduce((total, item) => total + (item.price * item.quantity), 0);

console.log("Total Cart Value of In-Stock Items:", totalCartValue);

//use find to get details of mouse
let mouseDetails = cart.find(item => item.name.toLowerCase() === "mouse");
console.log("Mouse Details:", mouseDetails);

//use findeindex to get index of keyboard
let keyboardIndex = cart.findIndex(item => item.name.toLowerCase() === "keyboard");
console.log("Index of Keyboard:", keyboardIndex);

//--------------------------------------------------------------------------------------------------------------------------------------------------


const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//use filter to get students who passed (marks >= 40)
let passedStudents = students.filter(student => student.marks >= 40);
console.log("Passed Students:", passedStudents);

//use map to grade all students
let gradedStudents = students.map(student => {
  let grade;
    if (student.marks >= 90) grade = 'A';
    else if (student.marks >= 75) grade = 'B';
    else if (student.marks >= 60) grade = 'C';
    else grade = 'D';
    return { ...student, grade: grade };
});
console.log("Graded Students:", gradedStudents);

//use reuce to calculate average marks
let totalMarks = students.reduce((total, student) => total + student.marks, 0);
let averageMarks = totalMarks / students.length;
console.log("Average Marks:", averageMarks);

//use find to get details of student named "Kiran"
let kiranDetails = students.find(student => student.name.toLowerCase() === "kiran");
console.log("Kiran Details:", kiranDetails);

//--------------------------------------------------------------------------------------------------------------------------------------------------

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//use filter to get employees in IT department
let itEmployees = employees.filter(employee => employee.department === "IT");
console.log("IT Employees:", itEmployees);

//map() to add: netsalary= salary +10% bonus
let employeesWithNetSalary = employees.map(employee => {
  let netSalary = employee.salary + (employee.salary * 0.10);
  return { ...employee, netSalary: netSalary };
});

console.log("Employees with Net Salary:", employeesWithNetSalary);

//use reduce to calculate total salary payout
let totalSalaryPayout = employees.reduce((total, employee) => total + employee.salary, 0);
console.log("Total Salary Payout:", totalSalaryPayout);

//find employee with salary 30000
let employeeWithSalary30000 = employees.find(employee => employee.salary === 30000);
console.log("Employee with Salary 30000:", employeeWithSalary30000);

//find index of employee neha

let nehaIndex = employees.findIndex(employee => employee.name.toLowerCase() === "neha");
console.log("Index of Neha:", nehaIndex);
//===========================================================================================================================================

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

//filter only sci=fi movies
let sciFi=movies.filter(movies=> movies.genre==="Sci-Fi");
console.log("sci-fi movies:", sciFi);

//map to return "Inception (8.8)" format
let movieRatings=movies.map(movie=> `${movie.title} (${movie.rating})`);
console.log("movie ratings:", movieRatings);

//reduce to get average rating of all movies
let totalRating=movies.reduce((total,movie)=> total + movie.rating,0);
let avgRating= totalRating/movies.length;
console.log("average rating:", avgRating);

//find movie with title "Joker"
let jokerMovie=movies.find(movie=> movie.title.toLowerCase()==="joker");
console.log("joker movie details:", jokerMovie);

// find index of avengers movie 
let avengersIndex=movies.findIndex(movie=> movie.title.toLowerCase()==="avengers");
console.log("index of avengers movie:", avengersIndex);
//===========================================================================================================================================

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

//filter only credit transactions
let creditTransactions=transactions.filter(txn=> txn.type==="credit");
console.log("credit transactions:", creditTransactions);

//map to get only transaction amounts
let transactionAmounts=transactions.map(txn=> txn.amount);
console.log("transaction amounts:", transactionAmounts);

//reduce to get final account balance
let finalBalance=transactions.reduce((balance,txn)=>{
  if(txn.type==="credit"){
    return balance + txn.amount;
    } else {
    return balance - txn.amount;
    }
},0);
console.log("final account balance:", finalBalance);

//find the first debit transaction 
let firstDebitTransaction=transactions.find(txn=> txn.type==="debit");
console.log("first debit transaction:", firstDebitTransaction);

//find index of transaction with amount 10000
let txnIndex=transactions.findIndex(txn=> txn.amount===10000);
console.log("index of transaction with amount 10000:", txnIndex);

//===========================================================================================================================================


