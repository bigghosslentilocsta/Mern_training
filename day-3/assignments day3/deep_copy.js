const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
//create a deep copy of order

order2=structuredClone(order);

//modify customer.address.city
order2.customer.address.city="Bangalore";
//modify items[0].price
order2.items[0].price=65000;

console.log("Original Order:");
console.log(order);
console.log("Modified Deep Copied Order:");
console.log(order2);