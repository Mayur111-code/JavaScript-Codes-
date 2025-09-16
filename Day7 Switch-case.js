// switch sattement
//used to handle mutiple  cases / operations at a same time 

// switch (data) {
//     case '':
        
//         break;
//     case '':
//         break;
//     default:
//         break;
// }

console.log("*********************************");

// let month = +prompt("Enter A month " , 0);

// switch (month) {
//     case 1 : alert('January Month');
//      break;
//     case 2: alert('Feb Month');
//      break;
//     case 3: alert('March Month');
//      break;
//     case 8 : alert('August Month');     
//      break;
//     default: alert('pse Enter A Valid month no');
//         break;
// }


console.log("*************************************");

// let no1 = +prompt('Enter Nhumber 1')
// let no2 = +prompt('Enter Number 2')

// let op = prompt('Choose Any Given Operations : -,+,/,*,%')

// switch(op)
// {
// case '+':alert(`${no1} + ${no2} = ${no1+no2}`)
// break;
// case '-':alert(`${no1} - ${no2} = ${no1-no2}`)
// break;
// case '*':alert(`${no1} / ${no2} = ${no1/no2}`)
// break;
// case '*':alert(`${no1} * ${no2} = ${no1*no2}`)
// break;
// case '*':alert(`${no1} % ${no2} = ${no1%no2}`)
// break;
// default:alert("pls enetr valid operations ")
// break;

// }
console.log("***************************************");



let day = prompt("Enter a day checked or weekend or weekday")
switch(day)
{
    case 'monday': case 'tusday': case 'wensday': case 'thusday': case 'friday':alert("weekday")
    break;
    case 'saturday': case 'sunday': alert("weekend")
    break;
    default:alert("enter valid day")
}