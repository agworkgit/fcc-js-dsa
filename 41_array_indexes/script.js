/* 
We can access the data inside arrays using indexes.

Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array has an index of 0.

Example

const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];

The console.log(array[0]) prints 50, and data has the value 60.

Create a variable called myData and set it to equal the first value of myArray using bracket notation.

Exercise Setup:

const myArray = [50, 60, 70];
*/

const myArray = [50, 60, 70];
const myData = myArray[0];

console.log(myData);