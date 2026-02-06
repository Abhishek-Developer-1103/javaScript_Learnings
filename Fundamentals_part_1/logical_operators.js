 

 const hasDriversLicense = true;

 const hasGoodVision = true;

 console.log(hasDriversLicense && hasGoodVision)
 console.log(!hasDriversLicense && hasGoodVision)
 console.log(!hasDriversLicense || hasGoodVision)

//  const shouldDrive = hasDriversLicense && hasGoodVision;

//  if(hasDriversLicense && hasGoodVision){
//     console.log("Sarah is able to drive!")
//  }else{
//     console.log("Someone else should drive...")
//  }

 const tired = true;

  if(hasDriversLicense && hasGoodVision && !tired){
    console.log("Sarah is able to drive!")
 }else{
    console.log("Someone else should drive...")
 }

// Switch statement expressions vs statements 

let day = 5;
switch(day){
    case 1:
        console.log("Monday");
        break;

        case 2:
            console.log("tuesday");
            break;
            case 3: 
            console.log("wednesday")
            break;
            case 5:
                console.log("funday last day off weekdays")
               break;

            default:
            console.log("Invalid day!!");
}


// Statements vs Expressions A complete instruction.

let x = 10;
if (x > 5) {
  console.log("Big");
}


// Expression

// Something that produces a value.

let ans = 10 + 5;
console.log(ans);
let newMessage = "hello" + 5;
console.log(newMessage)


// Ternay operator 

let age = 18;

let message = age>=18 ? "Adult" : "Minor";
console.log(message)
