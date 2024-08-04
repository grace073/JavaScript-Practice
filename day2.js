//Operators

//I Arithmetic Operators

//1. WAP to +,-,*,/,% two numbers and log the result to the console
function sumTwoNumbers(number1, number2) {
    let sum = number1 + number2;
    return sum;
  }
function subtractTwoNumbers(number1, number2) {
    let diff = number1 - number2;
    return diff;
  }
function multiplyTwoNumbers(number1, number2) {
    let product = number1 * number2;
    return product;
  }
function divideTwoNumbers(number1, number2) {
    let quotient = number1 / number2;
    return quotient;
  }
function moduloTwoNumbers(number1, number2) {
    let modulo = number1 % number2;
    return modulo;
  }
let request = prompt("Enter the operation you want to perform:\nAddition\nSubtraction\nMultiplication\nDivision\nModulo");
let number1 = parseFloat(prompt("Enter the first number:"));
let number2 = parseFloat(prompt("Enter the second number:"));
let result;
if(request==="Addition"){
    result=sumTwoNumbers(number1, number2);
}
if(request==="Subtraction"){
    result=subtractTwoNumbers(number1, number2);
}
if(request==="Multiplication"){
    result=multiplyTwoNumbers(number1, number2);
}
if(request==="Division"){
    result=divideTwoNumbers(number1, number2);
}
if(request==="Modulo"){
    result=moduloTwoNumbers(number1, number2);
}
console.log(`The ${request} of ${number1} and ${number2} is: ${result}`);


  
//II Assignment Operators

//+=
var x=0;
console.log(`initial value of x is: ${x}`);
x+=2;
console.log(`After using assignment operator += value of x is: ${x}`);

//-=
var y=10;
console.log(`initial value of x is: ${y}`);
y-=5;
console.log(`After using assignment operator -= value of x is: ${y}`)

//III Comparison operator

let a=10;
let b=25;
console.log(a<b);
console.log(a>b);
console.log(a<=b);
console.log(a>=b);
let s="abc";
console.log(a==s);
console.log(a===s);

//IV Logical Operators

if(5<10 && 4<8){
  console.log("Logical AND");
}
if(10<7 || 3>1){
  console.log("Logical OR");
}
if(!1){
  console.log("Logical NOT");
}

//V Ternary Operator

const num=parseInt(prompt("Enter an Integer to check even/odd:"));
let res="even"?(num%2===0):"odd";
console.log(res);