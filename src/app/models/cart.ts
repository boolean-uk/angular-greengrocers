import { Item } from "./item"

export interface Cart {
    items: CartItem[]
}

export interface CartItem {
    item: Item,
    quantity: number
}