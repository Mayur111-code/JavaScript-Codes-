
//used to decleared js variables

data="mayur";
console.log(data);

//we can redecleared variable with same name

var age =24;
var age = 21;

console.log(age);

//we can update value

var skill ="React js";
skill="mern stack";
console.log(skill);

//scope= global scope 

var x = 100;
console.log(x);
if(true){
   var x = 300;
   console.log(x);
}

console.log(x);


// le keyword is mordern js keyword used to decleared js variables


let age1 = 20 ;

//alert(age1);

//we can not redeclared varibale with same name

let empId = 12345;
// let empId = 23456;
console.log(empId);

//we can update value

let  empId1 = 500;

console.log(empId1)
empId1 = 200;
console.log(empId1);


//scope = block level scope local/functional scope (limited to that block)


let a = 100;
console.log(a);

if(true){
   let a = 350;
   console.log(a);
    
}

console.log(a);



//const keyword constant value

//used to declared js variables


const id = 1234;

console.log(id);

// we can not redeclared variable with same name

const myName = 'mayur';

// const myName  = "yash";
console.log(myName);

//we can not declared variable without initilization 

//i.e we mi=ust need to initilized or assigned value while declaration 

// const uage; //we can not declarations must be initilized.javascript
// uage= 18;
// console.log(uage);



//we can not update also

// const empCTC= "20LPA";
// empCTC="30LPA";//not update console error
//Uncaught TypeError: Assignment to constant variable. at Day3-var-let-const.js:99:7

// console.log(empCTC);

//scope = block level 



//Hoisting :=
/*we can declared variable after used 
we can used variables before declaration 


i.e js variable have by default behavior that variable declartion goes to the top of scope


*/

//var is hoisted 

name = "mayur-borse";
console.log(name);
var name;



myskill;
console.log(myskill);
myskill="fullstak stack";//output undifine
var myskill;


//let 

let Role = "js developer";
console.log(Role);


//let and const are not hoisted 
