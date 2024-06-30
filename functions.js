let a = 94;
let b = 59;

const addNumbers = (a, b) => a + b;
console.log(addNumbers(a, b));

addNumbers(a, b);

//1. write a function that takes the name as an argument and prints that name to the console
function names() {
  console.log("James Kiprop");
}

names();

//another way
const greet = (name) => {
  return "Hello" + name + "!";
};
console.log(greet("James"));

//2. write a function that takes in 2 integers as arguments and returns their sum
let x = 234;
let y = 6859;
function addThese(x, y) {
  return x + y;
}
console.log(addThese(x, y));

//another way
let m = 456;
let n = 5489;

const addInts = (m, n) => m + n;
console.log(addInts(m, n));

//3. Write a function that takes a number as an argument and returns "even" if the number is even or "odd" if the number is odd

function evenOdd(number) {
  if (number % 2 === 0) {
    return "Even number";
  } else {
    return "Odd Number";
  }
}
console.log(evenOdd(2000));

//another way (using the arrow function syntax)
const ovenOrOdd = (name) => (name % 2 === 0 ? "Even Number" : "odd Number");

console.log(ovenOrOdd(1616));
