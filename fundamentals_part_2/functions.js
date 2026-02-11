//  Functnions in JavaScript
// is block of code to do a specific task again and again 
// it takes inputs perform actions and return outputs as values 

/*
function logger(){
    console.log("My name is Jonas");
}
logger();


function fruitProcessor(apples, oranges){   // parameters 
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice;

}

fruitProcessor(5,0);
console.log(fruitProcessor(30,8))

*/

// Function Declaration.
function calcAge(birthYear){
    return 2026 - birthYear;
}
// saving the return value by calling the funcions
const age = calcAge(1998);
console.log(age);



// function expressions 

const calcAge2 = function(birthYear){
    return 2026 - birthYear;
}

console.log(calcAge2(1999));


// Arrow function short cut for creating funcitons 

const greeting = (name)=>{
    return `Hello, Good Morning! ${name}`;
}

console.log(greeting("Sushant"))

// multiple parameters 

const yearsUntilRetirement = (birthYear,firstName) =>{
    const age = 2026 - birthYear;
    const retirement = 60 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2000,"Abhi"));

// functions calling other funcitons 

function cutFruitPieces(fruit){
    return fruit  * 4;
}

function fruitProcessor(apples,oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges)

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces}`
    return juice;
}

console.log(fruitProcessor(2,3));

