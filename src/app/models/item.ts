export interface Item {
  id: string;
  name: string;
  price: number;
  type: ItemType;
  [key: string]: any;
}

export enum ItemType {
  Fruit = "fruit",
  Vegetable = "vegetable"
}
