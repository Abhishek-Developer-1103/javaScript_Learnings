/*

Type Conversion
Type Conversion is the process in JavaScript in which the data type of the variables is converted from one type to another type manually. This is also known as explicit type casting.

Performed manually by the programmer.
Uses built-in JavaScript methods like Number(), String(), and Boolean().
Ensures control over data types in code.
*/

//1. String to Number 

let s = "123";
let n = Number(s); // convert string to number 
console.log(n);


// 2 Number to String
console.log(String(n))
console.log(typeof String(n))


// 3 Boolean to Number
let bool = true;
let num = Number(bool);
console.log(num)

// bool to string

let str = String(bool)
console.log(str)


/*
Type Coercion
Type coercion is the automatic conversion of one data type to another by JavaScript during operations. This is also known as implicit type casting.

Performed automatically by JavaScript.
Happens mostly in comparison and arithmetic operations.
Can lead to unexpected results if not handled properly.

*/
// 1. String + Number :- convert to string automatically.

let num1 = 20;
let numToString = num1 + str;
console.log(typeof numToString);

// 2. boolean + Number = Boolean;

let boolToNum = bool + num1;

console.log(boolToNum, typeof boolToNum)

// ! important == operator converst the string to number 

if(18 == "18"){
    console.log("See how easily it converted the string to number ")
}

// Truthy and falsey values

//I) Truthy Values 
// What Are Truthy Values?
// Truthy values are values that are evaluated to be 
// true when used in a Boolean context. Simply put, any value that is not explicitly falsy is considered truthy.

// let emtyString = 0; 

// if(emtyString) console.log("will not run this funciton ")


// === vs == 
// == is loose equality operator 

// example :- 
// == is loose
let num2 = 23;
if(num2 == "23"){
    console.log(num2)
}

// strict equality operator 

if(num2 === "23"){
    console.log("It will not run ",num2)
}
