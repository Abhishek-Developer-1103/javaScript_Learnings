<!-- Brief Introduction to JavaScript  -->

JavaScript is a high-level, dynamically typed,
 single-threaded programming language used to build interactive web applications. It runs in the browser to manipulate the DOM and handle user events, and it can also run on the server using Node.js.
1
✅ What it means
You don’t manage memory manually like C/C++.
🧠 Why important
JavaScript is easy to write and human-readable.
👉 Example:
 why high level -> you dont have think about memory management You don’t allocate memory manually.
let x = 10;


 2. Dynamically Typed
✅ What it means
You don’t need to define data types.
👉 Example:let x = 10;     // number
x = "hello";    // now string
 dynmically typed-> dont need to declare datatype before declaring varible.


3. Single-Threaded
✅ What it means.
Execute one task at a time 
used to build interactive webpages 
make a static webiste dynamic 
by making the content alive 

4.
handles user events 
click, scroll typing mouse move.


JavaScript is a single-threaded, dynamically typed language used to build interactive web apps in browsers and servers.

<!-- Values and variables  -->
value - is smallest unit of information 
console.log("jonas")
10        // number
"Hello"   // string
true      // boolean
null
undefine


what is variable ?
A variable is a container used to store values so we can reuse and manipulate them in a program.

js keyword  name of variable and then value.

let firstName = Abhishek
consol.log(firstName)



<!-- Data types  -->

1 number : floating point numbers used for decimal and integers let age = 23;
2 string : sequence of characters used for text let firstName = 'Jonas'
3 Boolean : logical type that can only be true or false let fullage = True;

4 Undefined: Means a variable has been declared but hasn't been given a value yet. The language assigns this automatically.
Example: let name; (the value of name is undefined)

5 Null: Represents an intentional absence of any value. It's a value you, the programmer, assign to a variable to explicitly say "this is empty".
Example: let data = null;

6 Symbol: A unique and immutable value, introduced in ES6, often used as an identifier for object properties to avoid naming conflicts.
Example: Symbol("id")

7 BigInt: Used for representing whole numbers that are larger than the Number type can safely handle. You create a BigInt by adding n to the end of a number.
Example: 12345678901234567890n


<!-- let , var and const -->
let var and const are the keywords of javaScript used to declare variables 

var is function/global scope  we can reassign it and also redeclare it.

let is block scope we can reassign the value but cannot redecalre it.

const is block scope  cannot reassign and Redeclare. 





