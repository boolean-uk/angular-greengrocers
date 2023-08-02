import { Item } from "./item";

export class CartItem{
    quantity: number;
    constructor(public item: Item){
        this.quantity = 1;
    }
}