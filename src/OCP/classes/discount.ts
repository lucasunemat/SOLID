/*eslint-disable*/

/**
 * Aqui é possível ver a aplicação do princípio DRY
 * DRY = Don't Repeat Yourself
 * Ao invés de repetir o método calculate
 * Eu gero um método global
 * E só mudo o valor de discount
 */

export abstract class Discount {
  protected discount = 0; //desconto padrão: 0

  calculate(price: number): number { //método funcional global
    return price - price * this.discount;
  }
}

export class FiftyPercentDiscount extends Discount {
  //usando discount aqui pq essa classe herda de Discount
  //agora é só ir mudando o valor de discount para mudar o desconto
  protected readonly discount = 0.5;

}

export class TenPercentDiscount extends Discount {
  //usando discount aqui pq essa classe herda de Discount
  protected readonly discount = 0.1;
}

//usando discount aqui pq essa classe herda de Discount
export class NoDiscount extends Discount {}

