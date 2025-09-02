/*Data Types 

Primitive data type := predifine data types, built in data types 
int,char float boolean,double,long

Non-Premitive data types := Derives from primitive data type, defined by developers 

array object 


#its a comman laguage data types 
*/

/*

In JS Data Type 

primitive data type := 
number, string boolean, null, undifined, symbol, bigint

Non primitive data type := 

array, object

*/

let age = 20;
console.log(age);

console.log(typeof age);//number


console.log("*************************************");


//string := stored data or a single value in a "" or '' collection of charechters 


var name = "mayur";
console.log(name);
console.log(typeof name);
console.log("***********************************");

//boolean := stored true or false boolean value

var isEligible = true;
// alert(isEligible);
console.log(isEligible);
console.log(typeof isEligible);

console.log("*********************************");

//null := null means nothing no data and null type is object

var empid =null;
console.log(empid);
console.log(typeof empid); //object    i.e as per expert is a bug in a JS

console.log("******************************************");


//emty data := empty blank space and data type is string 
var emprole ="";
console.log(emprole);
console.log(typeof emprole);

console.log("************************************");

//undifine  := when we declare variable but not initilized any value i.e undifine
//by default value undifined 
//return undifine
var proid;
console.log(proid);// undifine
console.log(typeof proid); //undifine

console.log("********************************");  




//symbol := call to symbol functionn and vaue mus be unique
//similer to number string boolean etc
//it represents a unique  "hidden" identifier that no other code accidentally access
//symbol are always unique
//call symbol function 


//symbol()

var a=20;
var b=20;
console.log(a==b);

console.log(Symbol(a)==Symbol(b));//flase

//simple example 

let obj={
    name1:"Mayur",
    skill1:"Mern Stack",
}
let id = Symbol('id');
obj[id]=1234;
console.log(obj);
console.log(obj.id);// undifine means not access essily 


console.log("*****************************");

//bigint := 

var data = 1234569767376767n; //add n to the last of value that called to the bigint 
console.log(data);
console.log(typeof data);//bigint

//******************************************************** */


console.log("********************************");
// Non premitive data type :=
//Array object 
// Array
//array is a collection of similer or diffrent tyope of elements 
//we can stored multiple type of data in a single variable 
//starts indexing from 0 

const arr=[100,"mayur",true,null,undefined,12345344n,[],{}];
console.log(arr);
console.log(typeof arr); // object  
// In JavaScript, arrays are a special kind of object. When you use typeof arr, it returns "object" because:

/* ********************************* ******************** */

// - Arrays are built on top of objects.
// - Internally, an array is just an object with numeric keys (0, 1, 2, ...) and a length property.
// - JavaScript doesn’t have a separate typeof result for arrays.

console.log("*******************************");
//object 
//is a entity having methods and properties

//we can stored large amount of data any kind of data any type of data 
//stored in a kye value pair

//ex
const obj2 = {
    //key:value
    id:1,
    name2:"mayur",
    role:"developer",
    mobile:3520063250,
    isEligible2:true,
    empid2:null,  
    empskill2:["html","css","bs","js","rjs"], 
}
console.log(obj2);
console.log(typeof obj2);// object





























