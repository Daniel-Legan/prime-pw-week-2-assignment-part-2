// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called 'name' and assign it the value "Dane".
// We check to see with a conditional statement if the value stored in 'name' is strictly equivalent to the string "Mary".
// Since 'name' has the string value of "Dane" stored, the condition is false. Therefore, 'console.log('Hi, Mary!');' will not execute.
// "How do you do?" is printed since it follows the conditional statement with nothing to compare or evaluate.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// 'secret' is initialized with no initial value. 'code' is assigned a value of 123.
// Since code does strictly equal 123 in the conditional statement, "super" is assigned to the variable 'secret'. 123 x 2 = 246, and 246 is assigned to 'code'.
// 246 is not larger than 250, therefore 'secret' remains unchanged.
// We console.log 'secret' with the string "super".

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// isStudent, age, and zip are all given initial values.
// The first if statement is false since both sides of the conditional statement must be true with the && operator. 55407 is not larger than 80000.
// The next if statement is also false. isStudent (true) === false is false. age (34) < 30 is false. Code proceeds to the next if statement.
// isStudent (true) does strictly equal true. We console.log out "Welcome to Prime!".

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

// FIX: the instructions state colorOne is set to blue. 
// -- change colorOne to 'blue'.
let colorOne = 'red';

// FIX: the instructions state colorTwo is set to red. 
// -- change colorTwo to 'red'.
let colorTwo = 'blue';

let mix = true;

if (mix === true) {
  colorOne = 'purple';
// FIX: colorTwo was not changed to 'purple'. Add colorTwo = 'purple'; per instructions.
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX: Change || to &&. We are checking if temp > 39 AND time >= 4.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX: 'no entry' and 'entry' should be swapped in there respective console.log's.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

