/* 
When JavaScript variables are declared, they have an initial value of undefined. 
If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". 
If you concatenate a string with an undefined variable, you will get a string of undefined.

Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined.
*/

var a;
var b;
var c;

a = 5;
b = 10;
c = 'I am a';

a = a + 1;
b = b + 5;
c = c + 'String!';

console.log(a, b, c);