// Looping statement :=> Executes a same condition multilpe times until it becomes wrong/false i.e Iterating




// while 

// do while
// for loop
// for in, for of, for each, map


document.write("<h1>Hello Mayur..!!</h1>")
//while

let i = 0;
while (condition) {
    //block of codee 
}

let i = 1;
while(i<=10){
    document.write("<h1>Hello Mayur..!! "+i+" </h1>")
    i++;
}

let no = 1;
while(no<=50){
    document.write("<h2>javascript</h2>");
    no++;
}

let num = 0;
while(num<=100){
document.write(num +" " )
    num++;
}

document.write("<h1>*********************************************</h1>")

let num1 = 0;
while(num1<=100){
document.write(num1 +" " )
    num1+=2;
}

document.write("<h1**********************************</h1>");

let num1 = 0;
while(num1<=100){
document.write(num1 +" " )
    num1++;
}
let i=0; 
var sum = 0;
while (i<=100){
    if (i % 2 == 0){
        document.write(i + "");
        sum +=i
    }
    i++;
}

console.log("tooal suum is  : " +sum);



 let m = 100;
 let add = 0
 while(m >= 1) {
   console.log(m);
    add-=m;
      
m--
    
 }
 console.log(add );
 
 //nested while loop

 let mm = 2;
  while(mm <= 15) {
    console.log(mm)


    let kk = 1 ;
 while (kk <= 10) {
    console.log(kk);
    kk++
    
 }
 mm++;
    
  }

let xy = 2;

while(xy<=15){
    document.write("<h1>"+xy+"</h1>")
     
    let ab = 1;
    while(ab <= 10){
        document.write(xy*ab + "")
        ab++;
    }
    xy++;
}
