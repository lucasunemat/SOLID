/*eslint-disable*/

import { ShoppingCart } from './shoppingcart';
import { Order } from './order';
import { Messaging } from './messaging';
import { Persistency } from './persistency';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);
shoppingCart.addItem({ name: 'Camiseta', price: 49.91 });
shoppingCart.addItem({ name: 'Bermuda', price: 79.91 });
shoppingCart.addItem({ name: 'Tenis', price: 129.91 });



console.log(shoppingCart.items);
//console.log('Status atual carrinho=', shoppingCart.orderStatus);
//shoppingCart.checkout();
//console.log('Status atual carrinho=', shoppingCart.orderStatus);
