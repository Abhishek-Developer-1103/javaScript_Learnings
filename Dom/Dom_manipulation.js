  'use strict'
/*
// Selecting elements  by class name  it selects all the classes with the same name.
// const ele = document.querySelector('.message');
// console.log(document.querySelector('.number'));

// building guess my number 

// creating the secret using math random function 

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// create score 
// document.querySelector('.number').textContent = secretNumber;
 let score = 20;
 let highScore = 0;


//  Refactoring the code 

// creating a function for dry code.

// step 01 get the value of input by clicking the check button 
console.log(secretNumber)
document.querySelector('.check').addEventListener('click',function(){
// get the value of input field 
 let guess = Number(document.querySelector('.guess').value);

//  adding condition for input field that shouldnt be empty 
 if(!guess){
  // selecting message using selector 
  document.querySelector('.message').textContent = '🚫 No number';
 }else if(guess === secretNumber){
  document.querySelector('.message').textContent = '✅ Correct Number!!'; 
  document.querySelector('.number').textContent = secretNumber; 
   document.querySelector('body').style.backgroundColor = '#60b347';
   document.querySelector('.number').style.width = '30rem'

  //  implementing highScore 
  if(score > highScore){
    highScore = score;
    document.querySelector('.highscore').textContent = score;
  }
 }
   else if(guess !== secretNumber){
    if(score > 1){
      document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High' : '📉 Too Low'
      score--;
      document.querySelector('.score').textContent = score;
    }
   }


//  else if(guess > secretNumber){
//   if(score > 1 ){
//        document.querySelector('.message').textContent = '📈 Too High';
//       score--;
//      document.querySelector('.score').textContent = score;
//   }else{
//     document.querySelector(".message").textContent = "You lost"
//   }
   
//  }
//  else if(guess < secretNumber){

//   if(score > 1){
//  document.querySelector('.message').textContent = '📉 Too Low';
//     score--;
//     document.querySelector('.score').textContent = score;
//   }else{
//     document.querySelector(".message").textContent = "You lost"
//   }
//  }
});




// adding the evenlistner on again event to reset the values 

document.querySelector('.again').addEventListener('click',function(){
  console.log("hello")
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber)

  // document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing ? '
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  
});


*/

// first we grab teh value and then match the secret number 
// lets store the html elements in the variable.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(secretNumber)
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const again = document.querySelector('.again');
let number = document.querySelector('.number');
// console.log(check,message,again,number)


// Adding logic for guess number Game.

check.addEventListener('click',function(){

  // imp note whenever we use .value to get value from the input we get string 
  // type conversion 
   let guess = Number(document.querySelector('.guess').value);
  
   
//  main game logic if the guess is empty 
    if(!guess){
        message.textContent = '🚫 No Number!!';
    }
    else if(secretNumber === guess){
     message.textContent = "🎉 Correct Number!!"
    }
    else if(guess !== secretNumber){
      if(score>=1)
     message.textContent = guess > secretNumber ? "📈 Too High" : "📉 Too Low";
     
    }
});












