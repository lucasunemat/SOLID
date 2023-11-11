type CartItem = { name: string; price: number };

export class ShoppingCart {
  //array de objetos com atributos name e price
  private readonly _items: CartItem[] = [];

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    //a partir do index, remove 1 item
    this._items.splice(index, 1);
  }
}
