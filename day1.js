//1. Declare a variable using var, assign it a number and log the value to the console
var x;
x=1;
console.log(x);

//2. Declare a variable using let, assign it a string and log the value to the console
let s;
s="I am a string."
console.log(s);

//3. Declare a variable using const, assign it a boolean and log the value to the console
const value=true;
console.log(value);
//uninitialised const declarations are not allowed

//4. Create variables of different data types(number, string, boolean, object, array)
// and log each variable's type using the typeof operator
//number:
var num=3;
//string:
let str="Hello";
//boolean
var booly=true;
//object:
const obj={firstname:"Jane", lastname:"Doe", age:50, occupation:"Doctor"};//object literal or object initializer
const person={};//created empty object (static)
//Add properties to the 'person' object
person.firstname="John";
person.lastname="Doe";
person.age=51;
person.occupation="Engineer";
//create object using 'new' keyword
const person2=new Object();
//Add properties
person2.firstname="Sherlock";
person2.lastname="Holmes";
person2.age=55;
person2.occupation="Detective";
//array:
const cars=["Honda","Volvo","Mercedes"]//It is a common practice to declare arrays with the const keyword
//First creating array and then inserting values:
const people=[];
people[0]="Jane";
people[1]="John";
people[3]="Sherlock";
//using 'new' keyword:
const occupations=new Array("Doctor", "Engineer", "Detective");

//logging the type of each variable to the console using the 'typeof' operator:
const arr=[num, str, booly, obj, person, person2, cars, people, occupations];
for(let i=0;i<arr.length;i++){ //remember it is arr.length and not arr.size
    console.log(arr[i], typeof(arr[i]));
}

//5. Reassigning variables:
//Declare a variable using 'let', assign it an initial value, reassign a new value,
//and log both values to the console:
let greeting="Hello";
console.log(greeting);
greeting="Hey!";
console.log(greeting);

//6. Try reassigning a variable declared with const and observe the error
const text="abcd";
console.log(text);
//text="pqrs";
//Error:TypeError: Assignment to constant variable
const a=[1, 2, "hi", fruits={first:"mango", second:"apple", third:"orange"}];
console.log(a);
a[1]=true;//When you declare an array (or any object) using const, the reference to the array cannot be changed,
//but the contents of the array can be modified.
//This is because the const keyword only protects the variable binding, not the value itself.
console.log(a);

//Note:
//type of array is 'object'
//prototype chain:
//arr --> Array.prototype --> Object.prototype --> null






