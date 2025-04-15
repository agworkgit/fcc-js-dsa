/* 
In JavaScript, you can also perform calculations with decimal numbers, just like whole numbers.

Let's multiply two decimals together to get their product.

Change the 0.0 so that product will equal 5.0.

const product = 2.0 * 0.0;
*/

const product = 2.0 * 2.5; // this will equal 5 and not exactly 5.0 as above
console.log(parseFloat(product).toPrecision(2)); // parseFloat and the toPrecision number of decimals after float