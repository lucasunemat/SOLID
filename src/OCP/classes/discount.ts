/*eslint-disable*/

export abstract class Discount {
  constructor (public discount: number) {}

  abstract calculate (value: number): number;
}
