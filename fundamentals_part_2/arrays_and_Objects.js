
/* 
Arrays 
 An array is datastructure which can hold multiple values in one place 

const friend1 = "Abhi";
const friend2 = "Rahul";
const friend3 = "Aman";


// how to create an array 

const numbers = [10,20,30];



// Accessing Array Elements 
// Arrays are 0-indexed (very important);

const friends = ["Abhi","Rahul","Aman"];
console.log(friends[0])
console.log(friends[1])
console.log(friends[2])

console.log(friends.length); // 3

// changing array values 

friends[1] = "Rohit";
console.log(friends)

// Arrays Can Hold Anything


const mixed = [
  "Abhi",
  25,
  true,
  ["HTML", "CSS", "JS"]
];




// Array Methods 
//push() → Add to END
friends.push("jonas");
console.log(friends);

// pop() → Remove from END
friends.pop();
console.log(friends);

console.log(friends.indexOf("Aman"));
console.log(friends.includes("Abhi"));



// Array of tips 
const bills = [125, 555, 44];
let tips = bills.map(bill =>{
    return bill * 0.15;
})
console.log(tips)


const tasks = ["Wrokout","cricket","boxing"];

tasks.pop();
console.log(tasks)
console.log(tasks.includes("Study JS"));






// ########################Objects##############################

// Objects in JavaScript are used to store data as key value pairs 



const user = {
 firstName:'Jonas',
 lastName:'Schmedtmann',
 age: 22,
 friends:["Jack","mike","eleven"],
 isStudent: true
};


// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// console.log(user[interestedIn])

console.log(user.friends.length);

console.log(`Jonas has ${user.length} friends, and his best friend is call ${user.friends[1]}`)


// Acessing Objects 
console.log(user.firstName);
console.log(user["age"]);

const key = "firstName";
console.log(user[key]);


user.location = "India";






// Objects With Methods

// const person = {
//   name:"Jonas",
//   birthYear:1993,
//   // method is property of object which holds function as value
//   calcAge:function(){
//     return 2026 - jonas.birthYear;

//   }
// }
// console.log(person.calcAge());
const person2 = {
  name:"Jonas",
  birthYear:1993,
  // method is property of object which holds function as value
  calcAge:function(){
    return 2026 - this.birthYear;

  }
}
console.log(person2.calcAge());


// Now we are using this keyword to use objects values without passing parameters 

*/


// this use to add new property 

const person2 = {
  name:"Jonas",
  birthYear:1992,
  // method is property of object which holds function as value
  calcAge:function(){
   // createing property for objects using js
   this.age = 2026 - this.birthYear;
   return this.age;

  }
}
console.log(person2.calcAge());


// Challenge 

const jonas = {
    firstName:"jonas",
    lastName:"schedmadtmenn",
    isTrue:true,
    birthYear: 1991,
    job:"teacher",

    getSummary:function(){
       return `${this.firstName} is a ${2025 - this.birthYear} old ${this.job}, and he has ${this.isTrue ? "a" : "no"} driver's License`
    }

}

console.log(jonas.getSummary())


// challenge
// Let's go back to Mark and John comparing their BMIs!
/*
This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".
*/


const mark = {
    firstName:'Mark',
    lastName:'Miller',
    mass:78 ,
    height:1.69,

    calcBmi:function(){
      this.bmi = this.mass / (this.height * this.height);
       return this.bmi;
    }
}
const john = {
    firstName:'John',
    lastName:'Smith',
    mass:92,
    height:1.95,
    calcBmi: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

console.log(john.bmi > mark.bmi ? `${john.firstName} ${john.lastName}'s BMI${john.calcBmi()} is higher than ${mark.firstName} ${mark.lastName}'s ${mark.calcBmi()}`: `${mark.firstName} ${mark.lastName}'s BMI${mark.calcBmi()} is higher than ${john.firstName} ${john.lastName}'s ${john.calcBmi()}`)
