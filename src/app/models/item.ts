export enum ItemType {
  vegetable = 'vegetable',
  fruit = 'fruit',
}

export interface Item {
  id: string;
  name: string;
  price: number;
  type: ItemType;
}
