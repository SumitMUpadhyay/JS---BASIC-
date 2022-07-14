// Arrays, Function and objects
// Arrays -[], 0 index based
// Functions - declare , invoke
// plaeholders, local vars 
// arguments- when/invoke/call/run
// use vars/values, multiple params, undefined

// function hello(){
//  // logic

// console.log('Hello There Bob');
// console.log('Hello There Anna')
// console.log('Hello There Susy')
// }

// // greet bob
// hello();
// // great anna 
// hello();
// // greet susy
// hello();

// function helloBob(){
//  // Logic
//  console.log('Hello There Bob');
// }

// function helloAnna(){
//  // logic
//  console.log('Hello There Anna')
// }

// function helloSusy(){
//  //logic
//  console.log('Hello There Susy');
// }

// // greet bob
// helloBob();
// // greet anna
// helloAnna();
// //greet susy
// helloSusy();

// const bob = 'Bob';
// const susy = 'Susy';
// const anna = 'Anna';

// function greet(name,second){
//  console.log(second);
 
//  console.log('Hello there ' + name);
// }

// // greet bob
// greet(4);
// // greet anna
// greet(anna,'Bob');
// // greet susy
// greet('susy');

// return 
// default undefined, shortcuts, ignores after
//1 inch 2.54cm
// const wallHeight = 80
// function calculate(value){
 // const newValue = value * 2.54;
 // console.log('The value in cm is :' + (value * 2.54)+ 'cm');
 // return 'hello world'
//  return value * 2.54;
//  console.log('hello there');
//  console.log('hello there');
//  console.log('hello there');

// }

// const width = calculate(100);
// const height = calculate(wallHeight);



// const dimensions =[width,height];
// console.log(dimensions);

// function/definition/declaration

function addValues(num1, num2){
 return num1 + num2;
}

const firstValue = addValues(3,4);
const secondValue = addValues(12,34);
// function expression

const add = function(num1,num2){
 return num1 + num2;
}
// const thirdValue = add(5,6);



const values = [firstValue,secondValue,add(5,6)];
console.log(values);

const multiply = (num1,num2) =>num1 * num2;