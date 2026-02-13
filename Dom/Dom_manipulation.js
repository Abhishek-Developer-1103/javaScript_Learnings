  'use strict'

// Selecting elements  by class name  it selects all the classes with the same name.
// const ele = document.querySelector('.message');
// console.log(document.querySelector('.number'));

// modern querySelector 
const number = Math.trunc(Math.random() * 20) + 1;


document.querySelector('.check').addEventListener('click',function(){
     
    const guess = document.querySelector('.guess').value;
    document.querySelector('.message').textContent = guess;
    if(!guess){
        document.querySelector('.message').textContent = '🚫 No number'; 
    }
    
})









