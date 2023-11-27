// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [34, 43, 25];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
var getTotal = function (products) {
    var total = 0;
    products.forEach(function (product) {
        total = total + product.price;
    });
    return total;
};
var products = [
    { name: "jar", price: 2 },
    { name: "bowl", price: 3 },
];
console.log(getTotal(products));
