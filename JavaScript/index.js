let name = "Mohit Lakra";
console.log(name);

// var is function scoped and can be redeclared and updated
// let is block scoped and can be updated but not redeclared
// const is block scoped and cannot be updated or redeclared

if (true) {
  var age = 20; // This is function scoped and will be accessible outside this block
  let city = "New York"; // This is block scoped and will not be accessible outside this block
  const country = "USA"; // This is also block scoped and cannot be updated
}

console.log(age); // This will print 20 because var is function scoped
// console.log(city); // This will throw an error because city is block scoped
// console.log(country); // This will throw an error because country is block scoped

const pi = 3.14;
console.log(pi);
// pi = 3.14159; // This will throw an error because pi is a constant

// primitive data types in JavaScript
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

// number
let num1 = 10;
let num2 = 20.5;
console.log(typeof num1); // This will print "number"
console.log(num1);
console.log(typeof num2); // This will also print "number"
console.log(num2);

// string
let str1 = "Hello, World!";
let str2 = 'JavaScript is fun!';
console.log(typeof str1); // This will print "string"
console.log(str1);
console.log(typeof str2); // This will also print "string"
console.log(str2);

// boolean
let isJavaScriptFun = true;
let isCodingHard = false;
console.log(typeof isJavaScriptFun); // This will print "boolean"
console.log(isJavaScriptFun);
console.log(typeof isCodingHard); // This will also print "boolean"
console.log(isCodingHard);

// Undefined
let undefinedVariable;
console.log(typeof undefinedVariable); // This will print "undefined"
console.log(undefinedVariable); // This will print undefined

// Null
let nullVariable = null;
console.log(typeof nullVariable); // This will print "object" due to a quirk in JavaScript
console.log(nullVariable); // This will print null

// BigInt
let bigIntVariable = 9007199254740991n; // The 'n' at the end denotes a BigInt
console.log(typeof bigIntVariable); // This will print "bigint"
console.log(bigIntVariable);

// symbol
let symbolVariable = Symbol("unique");
console.log(typeof symbolVariable); // This will print "symbol"
console.log(symbolVariable);

// non-primitive data types in JavaScript
// 1. Object
// 2. Array
// 3. Function

let arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // This will print "object" because arrays are a type of object in JavaScript
console.log(arr);

let obj = {
  name: "Mohit",
  age: 19,
  city: "Delhi",
};
console.log(typeof obj); // This will print "object"
console.log(obj);

let f = function greet() {
  return "Hello!";
}
console.log(typeof f); // This will print "function"
console.log(f);
