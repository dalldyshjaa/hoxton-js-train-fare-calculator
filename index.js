let distance = prompt("how far will you go in kms?");
let age = prompt("what's your age?");
let discount;

//Giving a value to discount based on the age input
if (age < 18) {
  discount = 20;
} else if (age > 65) {
  discount = 40;
} else {
  discount = 0;
}

let price = distance * 0.21 - ((distance * 0.21) / 100) * discount;

console.log(`the price is ${price.toFixed(2)}$`);
