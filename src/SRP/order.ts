/*eslint-disable*/
import { OrderStatus } from './interfaces/orderStatus';
import { ShoppingCart } from './shoppingcart';
import { Messaging } from './messaging';
import { Persistency } from './persistency';

export class Order {
  private _orderStatus: OrderStatus = 'open'; //potencial atributo que não é responsabilidade do carrinho

  constructor(
    //injetando dependências - tô falando que a Order inclui outras classes como atributos dela
    /**
     * Aqui ainda há dependencia de ShoppingCart, Messaging e Persistency
     * Para quebrar isso e evitar desrespeitar lei de inversão de dependencia, o ideal seria
     * simplesmente criar uma abstração para cada uma dessas classes e injetar as abstrações
     */
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency) { }

  get orderStatus(): OrderStatus {  //potencial atributo que não é responsabilidade do carrinho
    return this._orderStatus;
  }

  checkout(): void { //potencial atributo que não é responsabilidade do carrinho
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    //this._orderStatus = 'closed';
    this.messaging.sendMessage(`Seus pedido com total de ${this.cart.total()} foi recebido!!`);
    this.persistency.saveOrder();
    this.cart.clear();
  }

}
