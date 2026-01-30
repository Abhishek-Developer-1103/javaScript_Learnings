
// var function/global scope it means varible declare
// with var key can be accesble outside fucntion scope 


// example: 
var str = "false"
console.log(str)

var str = "true"

console.log(str)

if(true){
    str = "hello"
}

console.log(str);

function greet(){
    var str = "very good morning!!"
    console.log(str)
}

console.log(str)
// let keyord you can update the value but cannot redecalre
let x = "Say something ";
x = "Want to go out ";
console.log(x)

if(true){
 let x = "don't know"

 console.log(x)
}

console.log(x)


// const keyword you must initialize the value first

// const greet = "good morning "
// greet = "bolo"