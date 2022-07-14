// Conditional Statements
// > ,<, >=, <=, ==, ===,!=, !===

// const value = true;
// console.log(typeof value)
// if(true){
//  console.log('hello world');
// }

// const value = 2 >1;
//console.log(typeof value);

// const value2 = 1 > 2;
// if(value2){
//  console.log('hello world');
// }
// else{
//  console.log('hello people');
// }

// const num1 = 6;
// const num2 = 6;
// const result = num1>= num2;

// if(num1>num2){
//  console.log('first number is bigger then second');
// }
// else if(result){
//  console.log('first number equal to second');
// }
// else {
//  console.log('second number is bigger then first');
// }

// const num1 = 6;
// const num2 = 6;

// const result = num1 >= num2;

// const value = false;

// if(!value){
//  console.log('value is true');
// }

// Equality
const num1 = 6;
const num2 = 6;

const value = num1 == num2
const value2 = num1 === num2;

console.log(value);
console.log(value2);

// Logical Operator
// (|| -OR), (&& - AND), !

// const name = 'peter';
// const age  = 24;

// if(name === 'sumit'){
//  console.log('hello there user');
// }else {
//  console.log('wrong values');
// }

// Switch
// dice values : 1-6

// const dice = 1;

// if(dice === 1){
//  console.log('you got one');
// }
// if (dice === 2){
//  console.log('you got one');
// }

// if(dice <1 || dice > 6){
//  console.log('you did not roll the dice');
// }

const dice = 1;


switch(dice){
 case 1 :
  console.log('you got one');
  break;
  case 2 :
   console.log('you got two');
   break;
   case 3 : 
   console.log('you got three');
   break;
   default:
    console.log('you did not roll the dice');
}

// else if 

// if (dice === 1){
//  console.log('you got one');
// }

// if (dice === 2){
//  console.log('you got two');
// }

// if (dice < 1 || dice > 6) {
//  console.log('you did not roll the dice');
// }