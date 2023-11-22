/*eslint-disable*/

export abstract class Discount {
  abstract calculate(value: number): number;
}

export class FiftyPercentDiscount extends Discount {
  //usando discount aqui pq essa classe herda de Discount
  private readonly discount = 0.5;
  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class TenPercentDiscount extends Discount {
  //usando discount aqui pq essa classe herda de Discount
  private readonly discount = 0.1;
  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class NoDiscount extends Discount {
  //usando discount aqui pq essa classe herda de Discount
  calculate(price: number): number {
    return price;
  }
}
