//CONTROL STRUCTURES

//I if-else statements

//+/-/0
const num=parseInt(prompt("Enter an integer to check pos/neg/zero"));
if(num===0){
    console.log("Num is zero");
}
else if(num<0){
    console.log("Num is negative");
}
else{
    console.log("Num is positive");
}

//eligible to vote?
const age=parseInt(prompt("Enter your age:"));
if(age<18){
    console.log("Not eligible to vote");
}
else if(age>=18){
    console.log("Eligible to vote");
}


//II Nested if-else statements:

//largest of three numbers:
const n1=parseInt(prompt("Enter value for n1"));
const n2=parseInt(prompt("Enter value for n2"));
const n3=parseInt(prompt("Enter value for n3"));

if(n1>n2){
    if(n2>n3){
        console.log(`${n1} is the largest among ${n1}, ${n2}, ${n3}`);
    }
    else{
        if(n1>n3){
            console.log(`${n1} is the largest among ${n1}, ${n2}, ${n3}`);
        }
        else{
            console.log(`${n3} is the largest among ${n1}, ${n2}, ${n3}`);
        }
    }
}
else{
    if(n1>n3){
        console.log(`${n2} is the largest among ${n1}, ${n2}, ${n3}`);
    }
    else{
        if(n2>n3){
            console.log(`${n2} is the largest among ${n1}, ${n2}, ${n3}`);
        }
        else{
            console.log(`${n3} is the largest among ${n1}, ${n2}, ${n3}`);  
        }
    }
}


//Switch Case:


const day=parseInt(prompt("Enter a number (1-7) to determine the day"));
switch(day){
    case 1:
        console.log("Sunday");
        break;       
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
           break;
    case 4:
        console.log("Wednesday");
           break;
    case 5:
        console.log("Thursday");
           break;
    case 6:
        console.log("Friday");
           break;
    case 7:
        console.log("Saturday");
           break;    
    default:
        console.log("Enter a valid number between 1 and 7");
        break;
}


//Ternary Operator:

//check odd/even

const value=parseInt(prompt("Enter a number to check even or odd: "));
let result=(value%2===0)?"Even":"Odd";
console.log(result);

//Combining Conditions:

//Check if leap year

let year=parseInt(prompt("Enter a year to check leap or not: "));
let answer=((year%4===0 && year%100!==0) || (year%4===0 && year%100===0 && year%400===0))?"leap year":"Not a leap year";
console.log(answer);

