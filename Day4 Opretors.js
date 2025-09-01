//post increment pre increment 

let x = 15;
console.log(x++);

let y = 15;
console.log(++y);

console.log("*************************************");


let m = 20;
m++;
--m;
console.log(m);
console.log(m++);
m--;
console.log(++m);
console.log(m--);

console.log("**********************************");


let num = 22;
 
console.log(num);
--num;
console.log(num);


console.log("*****************************")
//assignment operator 
//=,=,+=,/=,%=
//LSV = RSV

let p = 20;
let q=p;
console.log(p);
console.log(q);

 
let no1 = 100;
let no2 = 50;
// console.log(no1+no2);
// console.log(no1+=no2);
//  no1 += no2;
//  console.log(no1);
console.log(no1 -= no2);

//comparison < > >= <= !=

 
console.log(100> 100);
console.log(100<=100);
//! return true when conditions between false 
//! return false when condition becomes false

console.log(20!=20)
console.log(20!=100);

console.log("*************************");


// Equality operator
// == check only value 
// ,=== cheks the value and these datatype

let a1=20;
let b1=100
console.log(a1 == b1);
console.log(a1===b1);

let a2=20;
let b2=20;
console.log(a2==b2);
console.log(a2===b2);

let c=20;
let d='20';
console.log(c==d);
console.log(c===d);
console.log(typeof c);
console.log( typeof d);




console.log("**************************");
//logical opretor

//&& || !
// conditional rendering
//used to checks two or more condition


var num1 = 30
var num2 = 20;
var num3 = 10;
console.log(num1 > num2 && num1 > num3); //true
console.log(num1 > num2 && num1 <= num3);//false

console.log(num1 > num2 || num1 <= num3);//true

console.log(num2<=num1 && num2>=num3 && num1<=num2);//true && true && false
console.log("****************************************");

//bitwise operetor
// & | ^(XOR) ~(Not)
//<<< , << , >>

console.log(5 & 1);


//Additional op 
// typeof  - return  data type of theat specific value which we stored in a variable 

console.log(typeof 10);
console.log(typeof "10");
console.log(typeof []);
console.log(typeof{});
console.log(typeof null);
console.log(typeof undefined);

//we can check typeof typeof always return string 
console.log(typeof typeof 10);
console.log(typeof typeof "10");
console.log(typeof typeof undefined);

// Nullish coalscheing op ??
//return 1st argument if not nullish (null ot undifine)

// var empid = 1234;
var empid = null;
let empemail = "example@gmail.com";
console.log(empid ?? empemail);

//nullish coaleshing used ?? and its return the fist value and the first value is also null or undifinde so it return secound value 

console.log("*********************");

//exponetitation op - **
//return power

console.log(10**2);//power  100
console.log(10 ** 3);//1000

console.log("***********************");
//ternary operator
//alternate if else

// let age = 4
// if(age>=18){
//     alert("done");
// } else{
//     alert("sorry")
// }
    

//sybtax conditon ? true : false

let age=10;
let result = age >= 18 ? "done" : "sorry";
// alert(result);

//cheks the condition it same as ifelse statement  and  its returns true or false 

console.log("***************************");

console.log(10+10); //20
console.log(10+"abc");//10abc
console.log(10+"10");//1010

console.log("************************");


console.log(10*10);
console.log(10*"10");
console.log(10/"10");

console.log(100/"ABC"); //NaN






















