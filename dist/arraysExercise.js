"use strict";
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
const ages = [34, 43, 25];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
const getTotal = (products) => {
    let total = 0;
    products.forEach((product) => {
        total = total + product.price;
    });
    return total;
};
const products = [
    { name: "jar", price: 2 },
    { name: "bowl", price: 3 },
];
console.log(getTotal(products));
