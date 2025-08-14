//3Array Access

//let fruits = ["apple", "banana", "mango", "grape", "kiwi"];
//console.log('First fruit', fruits[0]);
//console.log('Last fruit', fruits[fruits.length - 1]);
//console.log('Total number of fruits:', fruits.length);
//console.log('"mango" using index:', fruits[2]);



//4. Object Practice
//let a = {
  //name: "Vishnu", age: 28,  grade: "A", isPassed: true 
//}
//console.log('Name:' ,a.name);
//console.log('Age:' ,a.age);
//console.log('Grade:' ,a.grade);
//console.log('Passed:' ,a.isPassed);




//5Console Methods

//console.log("Name: Vishnu");
//console.warn("age: 28");
//console.error("place: palakkad");

//Clear 
//console.clear();



//2. Using Prompt & Confirm

//let age = prompt("Enter your age");
// a = ["Access Denied", "Access Granted"];
 //b = Number(age > 18);

//console.log(a[b]);




//var x = 5;
//let y = 10;

{
  //var x = 20;
  //let y = 30;

  //console.log(x); // ?
  //console.log(y); // ?
}

//console.log(x); // ?
//console.log(y); // ?


//let num = 10;
//++num;
//console.log(num); //11


//let num = 10;
//num++;
//console.log(num); //11

//let numbers = 20;
//let numbers1 = numbers++;
//console.log(numbers, numbers1); //21 20


//let a1 = 12;
//let b1 = ++a1;     // a1 becomes 13, b1 = 13
//let c1 = ++b1;     // b1 becomes 14, c1 = 14
//console.log(a1, b1, c1);


//let num1 = 20;
//let num2 = num1++ + ++num1;
//console.log(num1, num2);


//07-08-2025 TASK

/*console.log(10 + 10); 
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 11);
console.log(10 ** 10);*/


/*let int = 10;
int = int++;
console.log(int);*/


//let numbers = 20;
//let numbers1 = ++numbers;
//console.log(numbers, numbers1);


//let a1 = 12;
//let b1 = ++a1;
//let c1 = ++b1;
//console.log(a1, b1, c1);


//let d1 = 1;
//let e1 = --d1;
//let f1 = ++e1;
//console.log(d1, e1, f1)


//let num1 = 20;
//let num2 = num1++ + --num1;
//console.log(num1, num2);

//08-08-2025 task

//Q1
/*let x = 5;
let y = x++ + ++x;
console.log(x, y)

//2
let total = 50;   
total += 30;    
total /= 4;      
console.log(total); 

//3

console.log(10 == "10");
console.log(10 === "10");

//5
console.log(typeof(5 + "5"));

//6

console.log(Boolean(0));
console.log(Boolean("false"));
console.log(Boolean([]));

//7

let n = Number("123"); 
let a = n + 10;
console.log(a);

//8
console.log(Boolean({}));
console.log(Boolean(null));


//9

let b= "Hello" + "  "+ "Students";
console.log(b);

//10
let c= "10";  
let d= 10;    
console.log(c+d)
console.log(Number(c) + d);

//4
//let age = 25;
//let experience = 3;
//console.log(age >= 18 && experience >= 2 && "Eligible for the job" || "Not eligible for the job");*/



//11/08-2025 task
//1
/*let num = Number(prompt("Enter a number:"));


  if (num > 0) {
    console.log("Positive number");
  } else if (num < 0) {
    console.log("Negative number");
  } else {
    console.log("Zero");
  }

//2
let month = 7; 

switch (month) {
  case 1:console.log("January") ; break; 
  case 2:console.log("February"); break;
  case 3: console.log("March");break; 
  case 4:console.log("April");break; 
  case 5:console.log("May");break;
  case 6:console.log("June");break;
  case 7:console.log("July");break; 
  case 8:console.log("August");break; 
  case 9:console.log("September"); break;
  case 10:console.log("October");break;
  case 11:console.log("November"); break;
  case 12:console.log("December"); break;    
   
}
  

//3
for(let a=1; a<=10; a++){
  console.log(`${a}*7=${a*7}`);
}

//4
let c = ["red", "green", "blue", "yellow"];
for (let a of c) {
  console.log(a.toUpperCase());
}
  

//5
let car = {
  brand: "Tata",
  model: "Safari",
  year: 2022
};

for (let a in car) {
  console.log(a + ": " + car[a]); 
}
*/


//12-08-2025 TASK
/*
//2
let shoutName = function(name) {
  console.log(name.toUpperCase() + "!!!");
}
shoutName("vishnu");




//3

let tellFortune = (name, place = "Unknown") => {
  console.log(`Dear ${name}, you will travel to ${place} soon!`);
}
tellFortune("Vishnu", "COIMBATORE");  
tellFortune("Vishnu"); 


//5
let sumNumbers = (a, b) => a + b;
console.log(sumNumbers(5, 7)); 

*/


//1
/*
let num = Number(prompt("Enter a number:"));

function isMagicNumber(num) {
  if (num % 3 === 0 && num % 7 === 0) {
    console.log(" It's magic!");
  } else {
    console.log("Not magic");
  }
}
isMagicNumber(num);

//4

function scopeDetective() {
  if (true) {
    var varVariable = "I am var ";
    let letVariable = "I am let ";
    const constVariable = "I am const ";

    console.log(varVariable); 
    console.log(letVariable);  
    console.log(constVariable); 
  }
console.log(varVariable); 
    console.log(letVariable);  
    console.log(constVariable); 
  
}
scopeDetective();*/


/*var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var result = [];

for (var i = 0; i < arr1.length; i++) {
    result[result.length] = arr1[i];
}

for (var i = 0; i < arr2.length; i++) {
    result[result.length] = arr2[i];
}


console.log(result);*/

//13-08-2025

//1
function sayHello() {
    console.log("Hello World");
}
sayHello();

//2

let fruits = ["Apple", "Banana", "Mango", "Orange", ];

console.log(fruits[0]);               
console.log(fruits[fruits.length - 1]); 


//3

var student = {
    name: "Vishnu",
    age: 28
}
console.log(student.name);

//4
var a = "JavaScript";

for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}


//5
function hai () {
    console.log("I am learning JavaScript");
    
}
hai()


//medium
//2
function power(a) {
    return function(b) {
        return a ** b;
    }
}
console.log(power(2)(3));
console.log(power(5)(2));


//3

(function(shopName, discount) {
    alert("Welcome to " + shopName + "! Get " + discount + "% off today!");
})("flipkart", 50);



// 4

function *color() {

    yield "red";
    yield "green";
    yield "blue";
}
var colors = color();
console.log(colors.next());
console.log(colors.next());
console.log(colors.next()); 
console.log(colors.next());

//5
var word = "developer";

for (var letter of word) {
    console.log(letter);
}
let laptop = { brand: 'Dell', price: 45000, isNew: true };

for (var key in laptop) {
    console.log(laptop[key]);
}











