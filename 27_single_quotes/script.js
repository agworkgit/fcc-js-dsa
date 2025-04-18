/* 
String values in JavaScript may be written with single or double quotes, 
as long as you start and end with the same type of quote. 
Unlike some other programming languages, single and double quotes work the same in JavaScript.

const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';

The reason why you might want to use one type of quote over the other is if you want to use both in a string. 
This might happen if you want to save a conversation in a string and have the conversation in quotes. 
Another use for it would be saving an <a> tag with various attributes in quotes, all within a string.

const conversation = 'Finn exclaims to Jake, "Algebraic!"';

However, this becomes a problem if you need to use the outermost quotes within it. 
Remember, a string has the same kind of quote at the beginning and end. 
But if you have that same quote somewhere in the middle, the string will stop early and throw an error.

const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
const badStr = 'Finn responds, "Let's go!"';

Here badStr will throw an error.

In the goodStr above, you can use both quotes safely by using the backslash \ as an escape character.

Note: The backslash \ should not be confused with the forward slash /. They do not do the same thing.

Change the provided string to a string with single quotes at the beginning and end and no escape characters.

Right now, the <a> tag in the string uses double quotes everywhere. 
You will need to change the outer quotes to single quotes so you can remove the escape characters.

Exercise Setup:

const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
*/

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

console.log(myStr);