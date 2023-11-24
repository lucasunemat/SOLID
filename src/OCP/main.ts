/*eslint-disable*/

/**
 * OCP = Open Closed Principle
 * Entidades devem estar abertas para extensão, mas fechadas para modificação
 * Devo criar formas de, ao precisar modificar algo (como o desconto) eu não precisar mexer no código fonte
 * Isso é feito na função totalWithDiscount, que recebe o desconto por meio de uma variavel que passo como parâmetro para a função
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
console.log('Total = ', shoppingCart.totalWithDiscount());
console.log('Status da ordem de compra = ', order.orderStatus);
order.checkout();
console.log('Status da ordem de compra = ', order.orderStatus);
