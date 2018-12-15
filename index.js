
var cart = require('./cart')


var myCartLineItems = [
	{ name: "ayam0000", price:200, qty:2},
	{ name: "sapiJs", price:80, qty:1},
];

var total = getTotalCart(myCartLineItems);
console.log(cart.formatTOlocal(total));
console.log(cart.isGettingDiscount(total));


