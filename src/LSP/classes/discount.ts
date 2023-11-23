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

  /*
   * se você trocar o retorno da função de number para unknowm
   * você vai precisar validar em cada chamada de função na main se tá retornando number ou não
   * ou seja, você vai estar quebrando um comportamento da base ao chamar a função especifica da classe derivada da classe base
   */

  /**
   * Outra forma de quebrar o LSP: mudar o tipo de retorno da função dentro das classes filhas abaixo
   * Ou seja, tô mudando o retorno da função na classe filha e não na classe base
   */
  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class FiftyPercentDiscount extends Discount {
  //usando discount aqui pq essa classe herda de Discount
  //agora é só ir mudando o valor de discount para mudar o desconto
  protected readonly discount = 0.5;
  //o método calculate é herdado de Discount, não precisa aparecer aqui
}

export class TenPercentDiscount extends Discount {
  //usando discount aqui pq essa classe herda de Discount
  protected readonly discount = 0.1;
}

//usando discount aqui pq essa classe herda de Discount
export class NoDiscount extends Discount { }

