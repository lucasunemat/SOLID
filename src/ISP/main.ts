/*eslint-disable*/

/**
  * Interface Segregation Principle (Princípio da Segregação de Interface)
  * Os clientes não devem ser forçados a depender de interfaces, types e métodos que não utilizam.
  * Interfaces maiores são divisíveis em menores. Grandes interfaces são poluídas e pouco práticas.
 */

import { ShoppingCart } from './classes/shoppingcart';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from './classes/discount';

const fiftyPercentDiscount = new FiftyPercentDiscount();
const noDiscount = new NoDiscount();
const tenPercentDiscount = new TenPercentDiscount();
//const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);
shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Lapis', 9.91));
shoppingCart.addItem(new Product('Calça', 89.91));

console.log(shoppingCart.items);
console.log('Total = ', shoppingCart.totalWithDiscount());
console.log('Status da ordem de compra = ', order.orderStatus);
order.checkout();
console.log('Status da ordem de compra = ', order.orderStatus);
