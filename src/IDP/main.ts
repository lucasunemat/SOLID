/*eslint-disable*/

/**
 * IDP - Inversion of Dependency Principle
 * Princípio da inversão de dependência: módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender
    * de abstrações. Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.
 * Dependa de abstrações, não de implementações;
 * Primeiro, entender o que é alto nível e baixo nível
 * Alto nível: módulos que são mais genéricos. Se formos verificar, as classes que definem atributos do objeto são de alto nível e
    * e as classes que implementam métodos são de baixo nível.
 * Dentro de classes que injetam dependências, temos que a classe (Order, por exemplo) é a de alto nível e as dependências que ela
    * injeta (ShoppingCart, Messaging, Persistency) são de baixo nível.
 * Abstrações: classes abstratas, interfaces, types...
 * No caso, temos que customer em Order é uma abstração, pois é a instanciação de uma interface.
 */

//imports
import { ShoppingCart } from './classes/shoppingcart';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';
import { MessagingProtocol } from './classes/interfaces/messaging-protocol';

//descontos
const fiftyPercentDiscount = new FiftyPercentDiscount();
const noDiscount = new NoDiscount();
const tenPercentDiscount = new TenPercentDiscount();

//carrinho com messaging, persistency e desconto
//const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

//messaging teste (mock)

class MessagingMock implements MessagingProtocol {
  sendMessage() {
    console.log('A mensagem foi enviada pelo mock');
  }
}

const messagingMock = new MessagingMock();

//configuração de cliente
const individualCustomer = new IndividualCustomer('Lucas', 'Bertoncello', '111.111.111-11');
const enterpriseCustomer = new EnterpriseCustomer('Empresa LiTroLândia', '222.222.222/00001-22');

//ordem de compra
const order = new Order(shoppingCart, messagingMock, persistency, enterpriseCustomer);
shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Lapis', 9.91));
shoppingCart.addItem(new Product('Calça', 89.91));

//consoles
console.log(shoppingCart.items);
console.log('Total = ', shoppingCart.totalWithDiscount());
console.log('Status da ordem de compra = ', order.orderStatus);
order.checkout();
console.log('Status da ordem de compra = ', order.orderStatus);

//veja que a Order acabou utilizando a messagingMock sem nem saber. Teste realizado!!



