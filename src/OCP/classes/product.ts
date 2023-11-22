/*eslint-disable*/

/**
 * Aqui temos exemplo de abstração
 */

import { CartItem } from './interfaces/cartItem';

export class Product implements CartItem{
  constructor(public name: string, public price: number) {
  }
}
