import { type Item } from './item';

export interface BasketItem extends Item {
  quantity: number;
}

export interface ShoppingBasket {
  items: BasketItem[];
  total: number;
}
