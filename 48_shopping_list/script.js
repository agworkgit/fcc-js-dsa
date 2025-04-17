/* 
Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.

["Chocolate Bar", 15]
There should be at least 5 sub-arrays in the list.

Challenge setup:

const myList = [];
*/

const myList = [];
const meats = ["sausage", 1, "cod fish", 1];
const bread = ["bread", 1];
const dairy = ["milk", 1, "cheese", 1];
const pizzaIngredients = ["flour", 1, "passata", 1, "mozzarella", 1];
const desserts = ["ice cream", 1, "chocolate", 1, "cheery pie", 1];

myList.push(meats, bread, dairy, pizzaIngredients, desserts);

console.log(myList);