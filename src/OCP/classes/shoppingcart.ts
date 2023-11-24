/*eslint-disable*/

import { Discount } from './discount';
import { CartItem } from '../interfaces/cartItem';

export class ShoppingCart {

  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) { }

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {

    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem>[] {

    return this._items;
  }

  total(): number {
    return parseFloat(this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2));
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }


  sendMessage(msg: string): void { //potencial atributo que não é responsabilidade do carrinho
    console.log('Mensagem enviada: ', msg);
  }

  saveOrder(): void { //potencial atributo que não é responsabilidade do carrinho
    console.log('Pedido salvo com sucesso!');
  }

  clear(): void { //mantido porque mexe com atributo privado do carrinho
    console.log('Carrinho de compras foi limpo!');
    this._items.length = 0;
  }

  isEmpty(): boolean { //validação mantida por ser a única presente no carrinho
    return this._items.length === 0;
  }
}

