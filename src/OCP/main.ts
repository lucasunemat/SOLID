/*eslint-disable*/

import { ShoppingCart } from './classes/shoppingcart';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);
/*
 * veja que a classe product implementa a cartItem, e usa um construtor
 * para preencher o name e price. Por ter construtor, não precisa passar
 * o objeto literal ali com os pares de chave e valor
 */
shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Lapis', 9.91));
shoppingCart.addItem(new Product('Calça', 89.91));

console.log(shoppingCart.items);
//console.log('Status atual carrinho=', shoppingCart.orderStatus);
//shoppingCart.checkout();
//console.log('Status atual carrinho=', shoppingCart.orderStatus);
console.log('Total = ', shoppingCart.totalWithDiscount(0.5));
console.log('Status da ordem de compra = ', order.orderStatus);
order.checkout();
console.log('Status da ordem de compra = ', order.orderStatus);
