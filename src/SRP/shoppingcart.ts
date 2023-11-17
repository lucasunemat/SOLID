/*eslint-disable*/

type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCart {
  //array de objetos com atributos name e price
  //o array começa vazio
  private readonly _items: CartItem[] = [];
  //cria um status que pode ser 'open' ou 'closed' e inicia em 'open'
  private _orderStatus: OrderStatus = 'open';

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

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return parseFloat(this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2));
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Seus pedido com total de ${this.total()} foi recebido!!`);
    this.saveOrder();
    this.clear();
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada: ', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso!');
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo!');
    this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length === 0; //validar se carrinho tá vazio
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Camiseta', price: 49.91 });
shoppingCart.addItem({ name: 'Bermuda', price: 79.91 });
shoppingCart.addItem({ name: 'Tenis', price: 129.91 });

console.log(shoppingCart.items);
console.log('Status atual carrinho=', shoppingCart.orderStatus);
shoppingCart.checkout();
console.log('Status atual carrinho=', shoppingCart.orderStatus);
