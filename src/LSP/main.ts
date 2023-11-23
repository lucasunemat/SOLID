/*eslint-disable*/

/**
 * Liskov Substitution Principle (Princípio da substituição de Liskov)
 * Se q(x) é uma propriedade demonstrável dos objetos x de tipo T. Então q(y) deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.
 * Mais simples ainda: Subtipos precisam ser substituíveis por seus tipos de base.
 * Mais simples ainda: Se meu programa espera um Animal, algo do tipo Cachorro (que herda de Animal) deve servir como qualquer outro Animal.
 * Se há classes derivadas de Discount, elas precisam se comportar como a classe base Discount.
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
