/*eslint-disable*/
import { OrderStatus } from './interfaces/orderStatus';
import { ShoppingCart } from './shoppingcart';

export class Order {
  private _orderStatus: OrderStatus = 'open'; //potencial atributo que não é responsabilidade do carrinho

  constructor(private readonly cart: ShoppingCart) { } //instanciando o carrinho dentro do pedido

  get orderStatus(): OrderStatus {  //potencial atributo que não é responsabilidade do carrinho
    return this._orderStatus;
  }

  checkout(): void { //potencial atributo que não é responsabilidade do carrinho
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    //this._orderStatus = 'closed';
    this.sendMessage(`Seus pedido com total de ${this.cart.total()} foi recebido!!`);
    this.saveOrder();
    this.cart.clear();
  }

  sendMessage(msg: string): void { //potencial atributo que não é responsabilidade do carrinho
    console.log('Mensagem enviada: ', msg);
  }

  saveOrder(): void { //potencial atributo que não é responsabilidade do carrinho
    console.log('Pedido salvo com sucesso!');
  }
}
