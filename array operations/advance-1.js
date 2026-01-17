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

