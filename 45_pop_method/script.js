/* 
Another way to change the data in an array is with the .pop() function.

.pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

Any type of entry can be popped off of an array - numbers, strings, even nested arrays.

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
The first console.log will display the value 6, and the second will display the value [1, 4].

Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.

Exercise setup:

const myArray = [["John", 23], ["cat", 2]];
*/

const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();

console.log(removedFromMyArray);
console.log(myArray);