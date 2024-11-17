// =====================================================
// COMPLETE JAVASCRIPT REFERENCE GUIDE
// =====================================================

// INTRODUCTION
// JavaScript is a high-level, interpreted programming language used for web development, servers, games, and more.

// =====================================================
// 1. BASIC SYNTAX
// =====================================================

// Logging to the console
console.log("Welcome to the Complete JavaScript Guide");

// 1.1 VARIABLES
let myVar = "This is a variable"; // Block-scoped
const myConst = "This value cannot change"; // Constant
var oldVar = "This is function-scoped (legacy)";

// 1.2 DATA TYPES
let string = "Hello"; // String
let number = 123; // Number
let bigInt = 12345678901234567890n; // BigInt
let boolean = true; // Boolean
let nothing = null; // Null
let undefinedVar; // Undefined
let uniqueID = Symbol("id"); // Symbol
let obj = { key: "value" }; // Object
let arr = [1, 2, 3]; // Array
let func = function () {}; // Function
console.log(typeof string); // typeof returns the type

// =====================================================
// 2. OPERATORS
// =====================================================

// Arithmetic
console.log(10 + 5, 10 - 5, 10 * 5, 10 / 5, 10 % 3); // +, -, *, /, %
console.log(2 ** 3); // Exponentiation

// Assignment
let a = 10;
a += 5; // a = a + 5;

// Comparison
console.log(10 == "10"); // true (loose equality)
console.log(10 === "10"); // false (strict equality)

// Logical
console.log(true && false); // AND
console.log(true || false); // OR
console.log(!true); // NOT

// Ternary Operator
let age = 20;
let canDrive = age > 18 ? "Yes" : "No";
console.log(canDrive);

// =====================================================
// 3. CONTROL FLOW
// =====================================================

// 3.1 IF-ELSE
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// 3.2 SWITCH CASE
let color = "blue";
switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  default:
    console.log("Unknown color");
}

// 3.3 LOOPS
// FOR LOOP
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// WHILE LOOP
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// DO-WHILE LOOP
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// FOR...OF (for iterables like arrays)
let nums = [10, 20, 30];
for (let num of nums) {
  console.log(num);
}

// FOR...IN (for object keys)
let person = { name: "John", age: 30 };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// =====================================================
// 4. FUNCTIONS
// =====================================================

// FUNCTION DECLARATION
function greet(name) {
  return `Hello, ${name}`;
}

// ARROW FUNCTIONS
const multiply = (x, y) => x * y;

// CALLBACK FUNCTIONS
function processUser(name, callback) {
  console.log("Processing...");
  callback(name);
}
processUser("Alice", (name) => console.log(`Welcome, ${name}`));

// =====================================================
// 5. OBJECTS & CLASSES
// =====================================================

// OBJECT LITERAL
let car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2020,
  start() {
    console.log("Car started");
  },
};
console.log(car.brand);
car.start();

// CLASS
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}
let dog = new Animal("Dog");
dog.speak();

// =====================================================
// 6. ES6+ FEATURES
// =====================================================

// DESTRUCTURING
const { brand, model } = car;
console.log(brand, model);

// SPREAD OPERATOR
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2);

// TEMPLATE LITERALS
console.log(`The car brand is ${brand}`);

// DEFAULT PARAMETERS
function sum(a, b = 10) {
  return a + b;
}
console.log(sum(5));

// =====================================================
// 7. ASYNCHRONOUS JAVASCRIPT
// =====================================================

// PROMISES
const fetchData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched"), 1000);
  });
fetchData().then((data) => console.log(data));

// ASYNC/AWAIT
async function fetchAsyncData() {
  let data = await fetchData();
  console.log(data);
}
fetchAsyncData();

// =====================================================
// 8. DOM MANIPULATION
// =====================================================

document.querySelector("body").style.backgroundColor = "lightblue";
document.getElementById("header").innerText = "JavaScript is awesome!";

// =====================================================
// 9. ADVANCED TOPICS
// =====================================================

// CLOSURES
function createCounter() {
  let count = 0;
  return () => ++count;
}
const counter = createCounter();
console.log(counter());
console.log(counter());

// PROTOTYPES
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};
let john = new Person("John");
john.sayHello();

// MODULES (Node.js or modern browsers)
// Export:
// export const sayHello = () => console.log("Hello");
// Import:
// import { sayHello } from './module.js';

// =====================================================
// 10. APIs & BUILT-IN METHODS
// =====================================================

// FETCH API
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));

// LOCAL STORAGE
localStorage.setItem("user", JSON.stringify({ name: "Alice" }));
console.log(JSON.parse(localStorage.getItem("user")));

// DATE OBJECT
let now = new Date();
console.log(now.toISOString());

// =====================================================
// END OF COMPLETE GUIDE
// =====================================================
