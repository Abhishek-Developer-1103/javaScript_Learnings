 
//  loops are used to perfrom one task again and again we use loops 

// repetitive task
// console.log("Abhishek")
// console.log("Abhishek")
// console.log("Abhishek")
// console.log("Abhishek")
// console.log("Abhishek")


// for loop 

// for(let i = 1; i<=10; i++){
//    console.log(`lifting weights repeition ${i} 🏋️‍♀️ `);
// }


// Looping arrays

 

// run 0 to  till -length; 

// for(let i = 0; i<jonasArray.length; i++){
//     console.log(jonasArray[i]);
// }


/* 
const types = [];
// for(let i = 0; i<jonasArray.length; i++){
//      console.log(jonasArray[i], typeof jonasArray[i])
//      types.push( typeof jonasArray[i]);
// }

// console.log(types)


const years = [1991,1990,1995,1996];
const ages = [];
for(let i = 0; i<years.length; i++){
    ages.push(2026 - years[i]);
}

console.log(ages);

const jonasArray = ['Jonas','schmedtmann', 2037-1991, 'teacher', ['Michael','Peter', 'Steven']]

// continue and break 
// continue will exit the current iteration 
for(let i = 0; i<jonasArray.length; i++){
    if(typeof jonasArray[i] !== 'string') continue;

    console.log(jonasArray[i], typeof jonasArray[i])
}

// break it will stop the loop immediately. 

for(let i = 0; i<jonasArray.length; i++){
    if(typeof jonasArray[i] !== 'number') break;
    console.log(jonasArray[i]);
}

// looping forward and backward

// backward looping 

for(let i =jonasArray.length-1; i>=0; i--){
    console.log(i,jonasArray[i])
}

  */

// while loop it will run till the while condition is true. 

let rep = 1;

while(rep<=10){
    console.log(rep);
    rep++;
}


let dice = Math.trunc(Math.random()*6) + 1;

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6 ) + 1;
    
    if(dice === 6) console.log('Loop is about to end....');

}