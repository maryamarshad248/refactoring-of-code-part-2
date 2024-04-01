// Exporting module
//////// Named Export
//console.log('Exporting module');
//// Blocking code
console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('finish fetching users');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ quantity, product });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 10;

export { totalPrice, totalQuantity as tq };

//////// Default exports

export default function (product, quantity) {
  cart.push({ quantity, product });
  console.log(`${quantity} ${product} added to cart`);
}
