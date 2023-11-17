/*eslint-disable*/

import { ShoppingCart } from './shoppingcart';
const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Camiseta', price: 49.91 });
shoppingCart.addItem({ name: 'Bermuda', price: 79.91 });
shoppingCart.addItem({ name: 'Tenis', price: 129.91 });

console.log(shoppingCart.items);
console.log('Status atual carrinho=', shoppingCart.orderStatus);
shoppingCart.checkout();
console.log('Status atual carrinho=', shoppingCart.orderStatus);
