// EXERCISE 1: Print "Hello World!"
console.log("Hello World!");

// EXERCISE 2: Variables & Data Types
const myName = "Anni A";
const myAge = 39;
const myFavoriteColor = "purple";
const myLocation = "Södertälje, Stockholm";
const myHobbies = "surfing and surfskating";

console.log(`My name is ${myName}, I am ${myAge} years old, and I live in ${myLocation}. My favorite color is ${myFavoriteColor}, I love ${myHobbies}.`);

// EXERCISE 3: Basic Arithmetic
const num1 = 20;
const num2 = 5;

console.log("Addition:", num1 + num2);       
console.log("Subtraction:", num1 - num2);    
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);       

// ASSIGNMENT: Price Tag Discount (10%)
const rawInput = prompt("Please enter a price tag (e.g. $49.99):");

if (rawInput) {
  const priceWithoutSymbol = rawInput.slice(1);
  const originalPrice = parseFloat(priceWithoutSymbol);
  const discountedPrice = originalPrice * 0.90;

  console.log(`Your new price is: $${discountedPrice.toFixed(2)}`);
}