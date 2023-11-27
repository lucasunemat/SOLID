/*eslint-disable*/

import { CartItem } from './cartItem';

export interface ShoppingCartProtocol {
  items(): Readonly<CartItem>[]; //getter = atributo da classe

  //private readonly _items: CartItem[] = [];
  //constructor(private readonly discount: Discount) { }

  addItem(item: CartItem): void;

  removeItem(index: number): void;

  total(): number;

  totalWithDiscount(): number;

  clear(): void;

  isEmpty(): boolean;
}

