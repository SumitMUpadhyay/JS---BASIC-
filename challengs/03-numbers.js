// ## Numbers #3

//1.Create "score1", "score2", "score3" variables and assign a values (0-100)
//2. calculate total score and average score, and assign them to a variable.
//3. log total score and average score.
//4.create "plates" vriable and assign 20
//5. create "people" variable and assign 7
//6. calculate remaning plates and assign to the variable
//7.add one to remaning plates 
//8. create message variable and display 'There are (your value goes here) plates avaliable' - string concatenation
//9. log message

const score1 = 98;
const score2 = 75;
const score3 = 45;

const totalScore = score1+score2+score3;

const avgScore = totalScore / 3;

// console.log(totalScore,avgScore);

const plates = 20;
const people = 7;
let remainingPlates  = 20 % 7;
remainingPlates++;

const message = 'There are ' +  remainingPlates + ' plates available'; 
console.log(message);

