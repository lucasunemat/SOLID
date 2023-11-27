/*eslint-disable*/
import { OrderStatus } from './interfaces/orderStatus';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { CustomerOrder } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open'; //potencial atributo que não é responsabilidade do carrinho

  constructor(
    //injetando dependências - tô falando que a Order inclui outras classes como atributos dela
    /**
     * Aqui ainda há dependencia de ShoppingCart, Messaging e Persistency
     * Para quebrar isso e evitar desrespeitar lei de inversão de dependencia, o ideal seria
     * simplesmente criar uma abstração para cada uma dessas classes e injetar as abstrações
     */
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder) { } //tá abstrata pois customer tá vindo de uma interface e não de uma classe concreta


  get orderStatus(): OrderStatus {  //potencial atributo que não é responsabilidade do carrinho
    return this._orderStatus;
  }

  checkout(): void { //potencial atributo que não é responsabilidade do carrinho
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(`Seus pedido com total de ${this.cart.totalWithDiscount()} foi recebido!!`);
    this.persistency.saveOrder();
    this.cart.clear();
    console.log('O cliente é:', this.customer.getName(), this.customer.getIDN());
    // nao importa se é pessoa fisica ou juridica, o que importa é que ele é um customer
    // e os seu nome e identificação vão aparecer no console
  }

}
