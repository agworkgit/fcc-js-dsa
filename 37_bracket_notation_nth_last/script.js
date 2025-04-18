/* 
You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.

For example, you can get the value of the third-to-last letter of the const firstName = "Augusta" string by using firstName[firstName.length - 3]

Example:

const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3];
thirdToLastLetter would have a value of the string s.

Use bracket notation to find the second-to-last character in the lastName string.

Hint: Try looking at the example above if you get stuck.

Exercise Setup:

const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName; // Change this line
*/

const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

console.log(secondToLastLetterOfLastName);