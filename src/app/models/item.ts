export interface Item {
  id: string;
  name: string;
  price: number;
}

export interface Cart {
  item: Item;
  quantity: number;
}
