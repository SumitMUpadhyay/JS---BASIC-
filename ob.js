// Arrays, Functions and Objects
// Objects - key/value pair methods
// dot notation

const person = {
 name:'sumit',
 lastName:'upadhyay',
 age:25,
 education:true,
 married:false,
 siblings:['amit','anna','susan'],
greeting:function(){
 console.log('Hello my name is SUMIT');
},
};

const age = person.age;
console.log(age);
person.name = 'Money';
console.log(person.name);
console.log(person.lastName);
console.log(person.age);
console.log(person.education);
console.log(person.married);
console.log(person.siblings);
person.greeting();