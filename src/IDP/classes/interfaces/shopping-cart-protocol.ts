/*eslint-disable*/

import { CartItem } from './cartItem';

export interface ShoppingCartProtocol {
  items: Readonly<CartItem>[]; //getter = atributo da classe

  //private readonly _items: CartItem[] = [];
  //constructor(private readonly discount: Discount) { }

  addItem(item: CartItem): void;

  removeItem(index: number): void;

  total(): number;

  totalWithDiscount(): number;

  clear(): void;

  isEmpty(): boolean;

  /*
  * Para transformar ShoppingCart em uma interface, foi necessário:
  * Basicamente tirou o corpo dos métodos e transformou o que tinha de getter em atributo
  */
}

