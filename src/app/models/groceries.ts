export enum GroceryType {
  vegetable = "vegetable", fruit = "fruit"
}

export interface Groceries {
  id: string;
  type: GroceryType;
  name: string;
  price: number;
}
