/* 
The keyword let is not the only new way to declare variables. 
In ES6, you can also declare variables using the const keyword.

const has all the awesome features that let has, with the added bonus that 
variables declared using const are read-only. 
They are a constant value, which means that once a variable is assigned with const, 
it cannot be reassigned:

const FAV_PET = "Cats";
FAV_PET = "Dogs";

The console will display an error due to reassigning the value of FAV_PET.

You should always name variables you don't want to reassign using the const keyword. 
This helps when you accidentally attempt to reassign a variable that is meant to stay constant.

Note: It is common for developers to use uppercase variable identifiers for immutable values 
and lowercase or camelCase for mutable values (objects and arrays). 
You will learn more about objects, arrays, and immutable and mutable values in later challenges. 
Also in later challenges, you will see examples of uppercase, lowercase, or camelCase variable identifiers.

Change the code so that all variables are declared using let or const. 
Use let when you want the variable to change, and const when you want the variable to remain constant. 
Also, rename variables declared with const to conform to common practices. 
Do not change the strings assigned to the variables.
*/

/* 
var fCC = "freeCodeCamp"; // Change this line
var fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(fCC, fact); // Change this line 
*/

const FCC = 'freeCodeCamp';
let fact = 'is cool!';
fact = 'is awesome!';

console.log(FCC, fact);