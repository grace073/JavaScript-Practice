//Operators

//I Arithmetic Operators

//1. WAP to add two numbers and log the result to the console
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


  
