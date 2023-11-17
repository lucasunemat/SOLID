/*eslint-disable*/

type CartItem = { name: string; price: number };

export class ShoppingCart {
  //array de objetos com atributos name e price
  //o array começa vazio
  private readonly _items: CartItem[] = [];
  //cria um status que pode ser 'open' ou 'closed' e inicia em 'open'
  private orderStatus: 'open' | 'closed' = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    //a partir do index, remove 1 item
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem>[] {
    //retorna uma cópia do array
    return this._items;
  }

  total(): number {
    return parseFloat(this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2));
  }

  checkout(): void {

  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Camiseta', price: 49.91 });
shoppingCart.addItem({ name: 'Bermuda', price: 79.91 });
shoppingCart.addItem({ name: 'Tenis', price: 129.91 });

console.log(shoppingCart.items);
console.log('Total= ', shoppingCart.total());
